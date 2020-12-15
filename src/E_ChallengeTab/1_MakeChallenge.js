import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native';
import Make from './ShowComponent/MakeChallenge'
import Show from './ShowComponent/Show'
import { 
    Card, 
    CardItem, 
    Thumbnail, 
    Body, 
    Left, Right, 
    Button, Icon, 
    Content, Form, Input, 
    Item, Label, CheckBox, ListItem,
    DatePicker, Textarea
 } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import * as Request from '../request';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.',]);

class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>챌린지 만들기</Text>
            </View>
        )
    }
}




export default class ChallengeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            c_name: '',
            c_exercise: null,
            c_due: null,
            c_friend: null,
            c_description : '',
            //챌린지 정보
            c_exerciseModal: false,
            c_dueModal: false,
            c_friendModal: false,
            //모달
            c_exerciseNum1: '', c_exerciseNum1Set: '',
            c_exerciseNum2: '', c_exerciseNum2Set: '',
            c_exerciseNum3: '', c_exerciseNum3Set: '',
            //운동 개수 저장 => 이후 Arrary로 만들어야함
            //친구 선택 체크박스 => 이후에 Arrary로 만들어야함
            c_dueStart: new Date(),
            c_dueEnd: new Date(),
        }

        this.setDateStart = this.setDateStart.bind(this);
        this.setDateEnd = this.setDateEnd.bind(this);
    }
    data = {
        name: '',
        description: '',
        calorie_consume: 0,
        start_datetime: '',
        finish_datetime: '',
        perform_day: '', //요일
        eID: [],
        target_total_count: [],
        friend_uIDs: [],

    }

    friendsList = []

    friendData = {
        frienduID: -1,
        friendCheck: false
    }

    setDateStart(newDate) {
        this.setState({ c_dueStart: newDate });
        var yyyy_mm_dd = '';
        var year = newDate.getFullYear();
        var month = newDate.getMonth() + 1;
        var date = newDate.getDate();
        if (month < 10) { month = `0${month}`; }
        if (date < 10) { date = `0${date}`; }

        yyyy_mm_dd = `${year}-${month}-${date} 00:00:00`;
        this.data.start_datetime = yyyy_mm_dd;
    }
    setDateEnd(newDate) {
        this.setState({ c_dueEnd: newDate });
        var yyyy_mm_dd = '';
        var year = newDate.getFullYear();
        var month = newDate.getMonth() + 1;
        var date = newDate.getDate();
        if (month < 10) { month = `0${month}`; }
        if (date < 10) { date = `0${date}`; }

        yyyy_mm_dd = `${year}-${month}-${date} 00:00:00`;
        this.data.finish_datetime = yyyy_mm_dd;
    }

    componentDidMount() {
        const friendList = DB.data.friends;
        friendList.map((obj) => {
            this.friendData.frienduID = obj.uID;
            this.friendsList.push(this.friendData);
        });
        console.log('friends :', this.friendsList);

    }

    render() {

        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('내정보')}>
                            <Image
                                style={styles.button}
                                source={require('../Image/default_profile.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Title />
                    <Content>
                        <ScrollView style={styles.main}>
                            <Card>
                                <Form>
                                    <Item stackedLabel>
                                        <Label style={{ fontSize: 20, color:'black' }}>이름 설정</Label>
                                        <Input value={this.state.c_name} onChangeText={val => { this.setState({ c_name: val }); this.data.name = val; }} />
                                    </Item>
                                    <Textarea style={{borderColor:'white', marginHorizontal:5}} rowSpan={4} bordered placeholder="챌린지 설명" onChangeText={val =>{this.setState({c_description:val});this.data.description=val;}}></Textarea>
                                </Form>

                                <CardItem button onPress={() => this.setState({ c_exerciseModal: true })} style={{ height: 100 }}>
                                    <Left>
                                        <Text style={{ fontSize: 20 }}>운동 선택</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="add-circle-outline" />
                                    </Right>
                                </CardItem>
                                <Modal visible={this.state.c_exerciseModal}
                                    onTouchOutside={() => { this.setState({ c_exerciseModal: false }); }}
                                >
                                    <ModalTitle
                                        title="운동 선택"
                                        align="left"
                                    />
                                    <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200, height: 400 }}>
                                        <Text style={{ borderStyle: 'solid' }}>운동을 선택하세요</Text>
                                        <Text></Text>
                                        <Text style={{ borderStyle: 'solid' }}>(개수  *  세트)</Text>
                                        <Label style={{ paddingTop: 24 }}>스쿼트</Label>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum1} onChangeText={(val) => { this.setState({ c_exerciseNum1: val }); }} />
                                            <Text>  *  </Text>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum1Set} onChangeText={(val) => { this.setState({ c_exerciseNum1Set: val }); }} />
                                        </View>
                                        <Label style={{ paddingTop: 24 }}>풀업</Label>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum2} onChangeText={(val) => { this.setState({ c_exerciseNum2: val }); }} />
                                            <Text>  *  </Text>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum2} value={this.state.c_exerciseNum2Set} onChangeText={(val) => { this.setState({ c_exerciseNum2Set: val }); }} />
                                        </View>
                                        <Label style={{ paddingTop: 24 }}>사이드 런지</Label>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum3} onChangeText={(val) => { this.setState({ c_exerciseNum3: val }); }} />
                                            <Text>  *  </Text>
                                            <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12, marginTop: 10 }} keyboardType="number-pad" value={this.state.c_exerciseNum3} value={this.state.c_exerciseNum3Set} onChangeText={(val) => { this.setState({ c_exerciseNum3Set: val }); }} />
                                        </View>
                                    </ModalContent>
                                    <ModalFooter>
                                        <ModalButton
                                            text="확인"
                                            onPress={() => {
                                                this.setState({ c_exerciseModal: false });
                                                this.data.eID.push(1); this.data.target_total_count.push(parseInt(this.state.c_exerciseNum1 * this.state.c_exerciseNum1Set));
                                                this.data.eID.push(2); this.data.target_total_count.push(parseInt(this.state.c_exerciseNum2 * this.state.c_exerciseNum2Set));
                                                this.data.eID.push(3); this.data.target_total_count.push(parseInt(this.state.c_exerciseNum3 * this.state.c_exerciseNum3Set));
                                            }
                                            }
                                            key="button-1"
                                        />
                                    </ModalFooter>
                                </Modal>
                                <CardItem button onPress={() => this.setState({ c_dueModal: true })} style={{ height: 100 }}>
                                    <Left>
                                        <Text style={{ fontSize: 20 }}>기간 설정</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="add-circle-outline" />
                                    </Right>
                                </CardItem>
                                <Modal visible={this.state.c_dueModal}
                                    onTouchOutside={() => { this.setState({ c_dueModal: false }); }}
                                >
                                    <ModalTitle
                                        title="기간 설정"
                                        align="left"
                                    />
                                    <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200 }}>
                                        <Text>기간을 설정하세요</Text>
                                        <DatePicker
                                            defaultDate={new Date()}
                                            minimumDate={new Date()}
                                            maximumDate={new Date(2020, 12, 31)}
                                            locale={"en"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"spinner"}
                                            placeHolderText="시작날짜"
                                            textStyle={{ color: "green" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            onDateChange={this.setDateStart}
                                            disabled={false}
                                        />
                                        <Text style={{ marginLeft: 10 }}>
                                            ~
                                                    </Text>
                                        <DatePicker
                                            defaultDate={new Date()}
                                            minimumDate={this.state.c_dueStart}
                                            maximumDate={new Date(2020, 12, 31)}
                                            locale={"en"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"spinner"}
                                            placeHolderText="종료날짜"
                                            textStyle={{ color: "green" }}
                                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                                            onDateChange={this.setDateEnd}
                                            disabled={false}
                                        />
                                    </ModalContent>
                                    <ModalFooter>
                                        <ModalButton
                                            text="확인"
                                            onPress={() => {
                                                this.setState({ c_dueModal: false });
                                                console.log(`시작 날짜:${this.data.start_datetime}~종료 날짜:${this.data.finish_datetime}`);
                                            }

                                            }
                                            key="button-1"
                                        />
                                        <ModalButton
                                            text="취소"
                                            onPress={() => {
                                                this.setState({ c_dueModal: false });
                                            }}
                                            key="button-2"
                                        />
                                    </ModalFooter>
                                </Modal>
                                <CardItem button onPress={() => this.setState({ c_friendModal: true })} style={{ height: 100 }}>
                                    <Left>
                                        <Text style={{ fontSize: 20 }}>친구 추가</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="add-circle-outline" />
                                    </Right>
                                </CardItem>
                                <Modal visible={this.state.c_friendModal}
                                    onTouchOutside={() => { this.setState({ c_friendModal: false }); }}
                                >
                                    <ModalTitle
                                        title="친구 추가"
                                        align="left"
                                    />
                                    <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200 }}>
                                        <Text>함께 챌린지를 진행할 친구를 선택하세요</Text>
                                        <ScrollView>
                                            {this.friendsList.map((obj, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <CheckBox checked={obj.friendCheck} color={"#272343"} onPress={() => { console.log(obj.friendCheck); obj.friendCheck = !(obj.friendCheck); console.log(obj.friendCheck); }} />
                                                        <Body style={{ alignItems: 'flex-start', marginLeft: 5 }}>
                                                            <Text>{obj.frienduID}</Text>
                                                        </Body>
                                                    </ListItem>
                                                )
                                            }
                                            )}
                                        </ScrollView>
                                    </ModalContent>
                                    <ModalFooter>
                                        <ModalButton
                                            text="전체 선택"
                                            onPress={() => {
                                                this.friendsList.map((obj)=>{obj.friendCheck=true;});

                                            }
                                            }
                                            key="button-2"
                                        />
                                        <ModalButton
                                            text="전체 해제"
                                            onPress={() => {
                                                this.friendsList.map((obj)=>{obj.friendCheck=false;});
                                            }
                                            }
                                            key="button-3"
                                        />
                                    </ModalFooter>
                                    <ModalFooter>
                                        <ModalButton
                                            text="확인"
                                            onPress={() => {
                                                this.friendsList.map((obj)=>{
                                                    if(obj.friendCheck==true)
                                                    {this.data.friend_uIDs.push(obj.frienduID);}
                                                }
                                                )
                                                this.setState({ c_friendModal: false });
                                            }
                                            }
                                            key="button-1"
                                        />
                                    </ModalFooter>
                                </Modal>
                                
                            </Card>
                        </ScrollView>
                    </Content>
                    <View style={{ height: 50, alignItems: 'flex-end', marginBottom: 10 }}>
                        <TouchableOpacity
                            style={{
                                width: 370,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor: '#272343',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                marginBottom: 20,
                                alignItems: 'center'
                            }}
                            onPress={async () => {
                                alert('챌린지 이름:' + this.state.c_name + '\n' +
                                    '운동: 스쿼트->' + this.state.c_exerciseNum1 + '/프론트런지->' + this.state.c_exerciseNum2 + '/사이드런지->' + this.state.c_exerciseNum3 +
                                    '기간: ' + this.state.c_dueStart.toString().substr(4, 12) + ' ~ ' + this.state.c_dueEnd.toString().substr(4, 12) + '\n',
                                    '선택한 친구 : ');
                                console.log(this.data);
                                console.log(await Request.POST(`user/challenge/${DB.data.users.uID}`, this.data));
                            }}>
                            <Text style={{ color: 'white', fontSize: 19, fontStyle: 'normal', }}>저장</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootcontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'white',

    },
    profile: {
        height: 75,
        backgroundColor: 'white',
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    subtitle: {
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    main: {
        backgroundColor: 'white',


    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 100 / 2,
        backgroundColor: '#bae8e8',
    },
    box: {
        flex: 0.3,
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderRadius: 10,
        borderColor: '#bae8e8'
    }
});