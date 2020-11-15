import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, LogBox } from 'react-native';
import Make from './ShowComponent/MakeChallenge'
import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content, Form, Input, Item, Label, CheckBox, ListItem, DatePicker } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.',]);

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../Image/example.png')}
            />
          </TouchableOpacity>
        )
    }
}

class Profile extends Component {
    render(){
        return(
            <View style={styles.profile}>
                <CircleButton />
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>챌린지 만들기</Text>
            </View>
        )
    }
}




export default class ChallengeTab extends Component {
    constructor(props){
        super(props);
        this.state={
            c_name:'',
            c_exercise:null,
            c_due:null,
            c_friend:null,
            //챌린지 정보
            c_exerciseModal:false,
            c_dueModal:false,
            c_friendModal:false, 
            //모달
            c_exerciseNum1:'',
            c_exerciseNum2:'',
            c_exerciseNum3:'',
            c_exerciseNum4:'',
            //운동 개수 저장 => 이후 Arrary로 만들어야함
            c_friendCheck1:false,
            c_friendCheck2:false,
            c_friendCheck3:false,
            c_friendCheck4:false,
            //친구 선택 체크박스 => 이후에 Arrary로 만들어야함
            c_dueStart: new Date(),
            c_dueEnd: new Date(),}

            this.setDateStart=this.setDateStart.bind(this);
            this.setDateEnd=this.setDateEnd.bind(this);
    }

    setDateStart(newDate){
        this.setState({c_dueStart:newDate});
    }
    setDateEnd(newDate){
        this.setState({c_dueEnd:newDate});
    }



    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('내정보')}>
                            <Image
                            style={styles.button}
                            source={require('../Image/default_profile.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                        <View style={styles.main}>
                            <Card>
                                    <Form>
                                        <Item stackedLabel>
                                            <Label style={{fontSize:20}}>이름 설정</Label>
                                            <Input value={this.state.c_name} onChangeText={val=>this.setState({c_name:val})}/>
                                        </Item>
                                    </Form>
                                
                                <CardItem button onPress={()=> this.setState({c_exerciseModal: true})} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>운동 선택</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                                <Modal visible={this.state.c_exerciseModal}
                                               onTouchOutside={() => {this.setState({ c_exerciseModal: false });}}
                                               >  
                                            <ModalTitle
                                            title="운동 선택"
                                            align="left"
                                            />
                                            <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width:200, height:400 }}>
                                                <Text style={{borderStyle:'solid'}}>운동을 선택하세요</Text>
                                                <Label style={{paddingTop:24}}>스쿼트</Label>
                                                <Input style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.c_exerciseNum1} onChangeText={val=>this.setState({c_exerciseNum1:val})}/>
                                                <Label style={{paddingTop:24}}>프론트 런지</Label>
                                                <Input style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.c_exerciseNum2} onChangeText={val=>this.setState({c_exerciseNum2:val})}/>
                                                <Label style={{paddingTop:24}}>사이드 런지</Label>
                                                <Input style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.c_exerciseNum3} onChangeText={val=>this.setState({c_exerciseNum3:val})}/>
                                                <Label style={{paddingTop:24}}>플랭크</Label>
                                                <Input style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.c_exerciseNum4} onChangeText={val=>this.setState({c_exerciseNum4:val})}/>
                                            </ModalContent>
                                            <ModalFooter>
                                                <ModalButton
                                                    text="확인"
                                                    onPress={() => {
                                                    this.setState({ c_exerciseModal: false });
                                                    }
                                                    }
                                                    key="button-1"
                                                />
                                            </ModalFooter>
                                        </Modal>
                                <CardItem button onPress={()=> this.setState({c_dueModal:true})} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>기간 설정</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                                <Modal visible={this.state.c_dueModal}
                                               onTouchOutside={() => {this.setState({ c_dueModal: false });}}
                                               >  
                                            <ModalTitle
                                            title="기간 설정"
                                            align="left"
                                            />
                                            <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width:200 }}>
                                                <Text>기간을 설정하세요</Text>
                                                <DatePicker
                                                    defaultDate={new Date()}
                                                    minimumDate={new Date()}
                                                    maximumDate={new Date(2020, 12, 31)}
                                                    locale={"en"}
                                                    timeZoneOffsetInMinutes={undefined}
                                                    modalTransparent={false}
                                                    animationType={"fade"}
                                                    androidMode={"default"}
                                                    placeHolderText="시작날짜"
                                                    textStyle={{ color: "green" }}
                                                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                                                    onDateChange={this.setDateStart}
                                                    disabled={false}
                                                    />
                                                    <Text style={{marginLeft:10}}>
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
                                                        androidMode={"default"}
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
                                <CardItem button onPress={()=> this.setState({c_friendModal:true})} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>친구 추가</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                                <Modal visible={this.state.c_friendModal}
                                               onTouchOutside={() => {this.setState({ c_friendModal: false });}}
                                               >  
                                            <ModalTitle
                                            title="친구 추가"
                                            align="left"
                                            />
                                            <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width:200 }}>
                                                <Text>함께 챌린지를 진행할 친구를 선택하세요</Text>
                                                <ListItem>
                                                    <CheckBox checked={this.state.c_friendCheck1} color={"#272343"} onPress={()=>{this.setState({c_friendCheck1:!(this.state.c_friendCheck1)})}}/>
                                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                                        <Text >친구1</Text>
                                                    </Body>
                                                </ListItem>
                                                <ListItem>
                                                    <CheckBox checked={this.state.c_friendCheck2} color={"#272343"} onPress={()=>{this.setState({c_friendCheck2:!(this.state.c_friendCheck2)})}}/>
                                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                                        <Text>친구2</Text>
                                                    </Body>
                                                </ListItem>
                                                <ListItem>
                                                    <CheckBox checked={this.state.c_friendCheck3} color={"#272343"} onPress={()=>{this.setState({c_friendCheck3:!(this.state.c_friendCheck3)})}}/>
                                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                                        <Text>친구3</Text>
                                                    </Body>
                                                </ListItem>
                                                <ListItem>
                                                    <CheckBox checked={this.state.c_friendCheck4} color={"#272343"} onPress={()=>{this.setState({c_friendCheck4:!(this.state.c_friendCheck4)})}}/>
                                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                                        <Text>친구4</Text>
                                                    </Body>
                                                </ListItem>
                                            </ModalContent>
                                            <ModalFooter>
                                                <ModalButton
                                                    text="확인"
                                                    onPress={() => {
                                                    this.setState({ c_friendModal: false });
                                                    }
                                                    }
                                                    key="button-1"
                                                />
                                            </ModalFooter>
                                        </Modal>
                            </Card>
                        </View>
                    </Content>
                    <View style={{height:50, alignItems:'flex-end', marginBottom:10}}>
                        <TouchableOpacity 
                                style={{width: 370,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor:'#272343',
                                justifyContent:'center',  
                                alignItems:'flex-end', 
                                marginBottom:20,
                                alignItems:'center'}} 
                                onPress={()=> 
                                    alert('챌린지 이름:'+this.state.c_name+'\n'+
                                    '운동: 스쿼트->'+this.state.c_exerciseNum1+'/프론트런지->'+this.state.c_exerciseNum2+'/사이드런지->'+this.state.c_exerciseNum3+'/플랭크->'+this.state.c_exerciseNum4+'\n'+
                                    '기간: '+this.state.c_dueStart.toString().substr(4, 12)+' ~ '+this.state.c_dueEnd.toString().substr(4, 12)+'\n',
                                    '선택한 친구 : ')}>
                                    <Text style={{color: 'white', fontSize:19, fontStyle:'normal',}}>저장</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    rootcontainer:{
        flex: 1,
        backgroundColor:'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor:'white',
        
    },
    profile: {
        height:75,
        backgroundColor: 'white',
        justifyContent:'center',
        marginTop: 20,
    },
    title :{
        height: 50,
        backgroundColor: 'white',
        justifyContent:'center',
    },
    subtitle:{
        height: 35,
        backgroundColor: 'white',
        justifyContent:'center',
    },
    main :{
        backgroundColor: 'white',

        
    },
    button :{
        width: 70, 
        height: 70, 
        borderRadius: 100 / 2,
        backgroundColor:'#bae8e8',
    },
    box :{
        flex : 0.3,
        backgroundColor: 'white',
        borderWidth: 0.3,
        borderRadius: 10,
        borderColor: '#bae8e8'
    }
});