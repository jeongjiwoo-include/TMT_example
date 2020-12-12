import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native';
import { Container, Header, Button, Icon, Fab, Content, Card, CardItem, Left, Right, Form, Picker } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import * as Request from '../request';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.',]);

class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>알림</Text>
            </View>
        )
    }
}


export default class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false, //fab
            visible: false, // modal
            selected_hour: "00", // time picker
            selected_minute: "00", // time picker
            FriendRequestList: [],
            ChallengeRequestList: [],
        };
    }
    FriendData = {
        uID:-1,
        friend_uID:-1
    } //uID => 나에게 요청한 사용자의 uID
    ChallengeData = {
        //cID:-1,
        //name: '',
        //description:'',
    }


    // onValueChange_hour(value) {
    //     this.setState({
    //         selected_hour: value
    //     });
    // }

    // onValueChange_minute(value) {
    //     this.setState({
    //         selected_minute: value
    //     });
    // }

    componentDidMount(){
        
    }

    render() {
        const friendRequest = DB.data.requested;
        const challengeRequest = DB.data.invited;
        const uID = DB.data.users.uID;
        friendRequest.map((obj) => {
            this.FriendData.uID = obj.uID;
            this.FriendData.friend_uID= uID;
            this.state.FriendRequestList.push(this.FriendData);
        }
        )
        console.log(challengeRequest);
        challengeRequest.map((obj)=>{
            this.ChallengeData= obj.challenge;
            //this.ChallengeData.name= obj.challenge.name;
            //this.ChallengeData.description=obj.challenge.description;
            this.state.ChallengeRequestList.push(this.ChallengeData);
        })

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
                            {this.state.FriendRequestList.map((obj, i) => {
                                return (
                                    <Card key={i}>
                                        <CardItem style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                            <Left>
                                                <Text>친구 요청</Text>
                                            </Left>
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Icon name="alert" />
                                            </Left>
                                            <Text>'uID {obj.uID}' 님이 당신에게 친구요청을 보냈습니다.</Text>
                                            
                                        </CardItem>
                                        <CardItem style={{ justifyContent: 'space-evenly' }}>
                                            <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={async     () => {
                                                console.log('수락 ....>', obj);
                                                var json = await Request.PUT(`user/friend/request/${obj.friend_uID}/${obj.uID}`, obj).then(console.log('ok'));
                                                console.log('ok : ', json);
                                            }}>
                                                <Text style={{ color: 'white' }}>수락</Text>
                                            </Button>
                                            <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={async () => {
                                                console.log('거절 ....>', obj);
                                                var json = await Request.DELETE(`user/friend/request/${obj.friend_uID}/${obj.uID}`, obj);
                                                console.log('reject : ', json);
                                            }}>
                                                <Text style={{ color: 'white' }}>거절</Text>
                                            </Button>
                                            
                                        </CardItem>
                                    </Card>
                                );
                            })}
                            {this.state.ChallengeRequestList.map((obj, i) => {
                                return (
                                    <Card key={i}>
                                        <CardItem style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                            <Left>
                                                <Text>챌린지 요청</Text>
                                            </Left>
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Icon name="alert" />
                                            </Left>
                                            <Text>'{obj.name}' 챌린지 요청을 받았습니다.</Text>
                                        </CardItem>
                                        <CardItem>
                                            <Text>                   챌린지 설명 : {obj.description}</Text>
                                        </CardItem>
                                        <CardItem style={{ justifyContent: 'space-evenly' }}>
                                            <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={async     () => {
                                                console.log('수락 ....>', obj);
                                                var json = await Request.PUT(`user/challenge/invite/${DB.data.users.uID}/${obj.cID}`, obj).then(console.log('ok'));
                                                console.log('ok : ', json);
                                            }}>
                                                <Text style={{ color: 'white' }}>수락</Text>
                                            </Button>
                                            <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={async () => {
                                                console.log('거절 ....>', obj);
                                                var json = await Request.DELETE(`user/challenge/invite/${DB.data.users.uID}/${obj.cID}`, obj);
                                                console.log('reject : ', json);
                                            }}>
                                                <Text style={{ color: 'white' }}>거절</Text>
                                            </Button>
                                            
                                        </CardItem>
                                    </Card>
                                );
                            })}
                            {/* <Modal visible={this.state.visible}
                                                onTouchOutside={() => { this.setState({ visible: false }); }}
                                            >
                                                <ModalTitle
                                                    title="수락"
                                                    align="left"
                                                />
                                                <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200 }}>
                                                    <Text>수락</Text>
                                                </ModalContent>
                                                <ModalFooter>
                                                    <ModalButton
                                                        text="확인"
                                                        onPress={() => {
                                                            this.setState({ visible: false });
                                                        }
                                                        }
                                                        key="button-1"
                                                    />
                                                </ModalFooter>
                                            </Modal> */}

                            {/* <Card>
                                <CardItem style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                    <Left>
                                        <Text>2020/10/10</Text>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Icon name="alert" />
                                    </Left>
                                    <Text>챌린지 초대 메시지가 도착했습니다.</Text>
                                </CardItem>
                                <CardItem style={{ justifyContent: 'space-evenly' }}>
                                    <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={() => { this.setState({ visible: true }) }}>
                                        <Text style={{ color: 'white' }}>수락</Text>
                                    </Button>
                                    <Button style={{ width: 100, height: 25, justifyContent: 'center', backgroundColor: '#bae8e8' }} onPress={() => alert('거절')}>
                                        <Text style={{ color: 'white' }}>거절</Text>
                                    </Button>
                                    <Modal visible={this.state.visible}
                                        onTouchOutside={() => { this.setState({ visible: false }); }}
                                    >
                                        <ModalTitle
                                            title="수락"
                                            align="left"
                                        />
                                        <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200 }}>
                                            <Text>알림 시간을 정하세요</Text>
                                            <Form>
                                                <Picker
                                                    note
                                                    mode="dropdown"
                                                    style={{ width: 70 }}
                                                    selectedValue={this.state.selected_hour}
                                                    onValueChange={this.onValueChange_hour.bind(this)}
                                                >
                                                    <Picker.Item label="00" value="00" />
                                                    <Picker.Item label="01" value="01" />
                                                    <Picker.Item label="02" value="02" />
                                                    <Picker.Item label="03" value="03" />
                                                    <Picker.Item label="04" value="04" />
                                                    <Picker.Item label="05" value="05" />
                                                    <Picker.Item label="06" value="06" />
                                                    <Picker.Item label="07" value="07" />
                                                    <Picker.Item label="08" value="08" />
                                                    <Picker.Item label="09" value="09" />
                                                    <Picker.Item label="10" value="10" />
                                                    <Picker.Item label="11" value="11" />
                                                    <Picker.Item label="12" value="12" />
                                                    <Picker.Item label="13" value="13" />
                                                    <Picker.Item label="14" value="14" />
                                                    <Picker.Item label="15" value="15" />
                                                    <Picker.Item label="16" value="16" />
                                                    <Picker.Item label="17" value="17" />
                                                    <Picker.Item label="18" value="18" />
                                                    <Picker.Item label="19" value="19" />
                                                    <Picker.Item label="20" value="20" />
                                                    <Picker.Item label="21" value="21" />
                                                    <Picker.Item label="22" value="22" />
                                                    <Picker.Item label="23" value="23" />
                                                    <Picker.Item label="24" value="24" />
                                                </Picker>
                                                <Picker
                                                    note
                                                    mode="dropdown"
                                                    style={{ width: 70 }}
                                                    selectedValue={this.state.selected_minute}
                                                    onValueChange={this.onValueChange_minute.bind(this)}
                                                >
                                                    <Picker.Item label="00" value="00" />
                                                    <Picker.Item label="05" value="05" />
                                                    <Picker.Item label="10" value="10" />
                                                    <Picker.Item label="15" value="15" />
                                                    <Picker.Item label="20" value="20" />
                                                    <Picker.Item label="25" value="25" />
                                                    <Picker.Item label="30" value="30" />
                                                    <Picker.Item label="35" value="35" />
                                                    <Picker.Item label="40" value="40" />
                                                    <Picker.Item label="45" value="45" />
                                                    <Picker.Item label="50" value="50" />
                                                    <Picker.Item label="55" value="55" />
                                                </Picker>
                                            </Form>
                                        </ModalContent>
                                        <ModalFooter>
                                            <ModalButton
                                                text="확인"
                                                onPress={() => {
                                                    this.setState({ visible: false });
                                                    //알림 시간 저장 후 !에서 해당 챌린지 초대 없애기
                                                    alert('설정시간은 ' + this.state.selected_hour + '시 ' + this.state.selected_minute + '분 입니다.');
                                                    console.log(this.state.selected_hour, '시', this.state.selected_minute, '분')
                                                }
                                                }
                                                key="button-1"
                                            />
                                            <ModalButton
                                                text="취소"
                                                onPress={() => {
                                                    this.setState({ visible: false });
                                                }}
                                                key="button-2"
                                            />
                                        </ModalFooter>
                                    </Modal>
                                </CardItem>
                            </Card> */}
                        </ScrollView>
                    </Content>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#bae8e8', marginBottom: 52.5 }}
                        position="bottomRight"
                        onPress={() => { console.log(DB); this.props.navigation.navigate('홈', { data: DB }); }}>
                        <Icon name="ios-arrow-back" />
                    </Fab>
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
    }
});