import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Content, Icon, ListItem,CheckBox } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../../Image/example.png')}
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
                <Text style={{fontSize:35, color:'black'}}>사이드런지</Text>
            </View>
        )
    }
}



class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Text>Side Lunge Page</Text>
            </ScrollView>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <View style ={ styles.box}></View>
        )
    }
}


export default class D0_3_SideLunge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }
    data = {
        count_per_set: 0,
        uID: 0,
        eID: 3,
        cID: 0,
        name: '',
        calorie_consume: 0.6,//개수 당 0.43kcal 소모
        perform_datetime: '',
    }
    challengeList = [];
    challengeList_tmp = [];
    challengeData = {
        cID:0,
        name : '',
        checked: false,
    };

    componentDidMount() {
        const Data = this.props.navigation.getParam('data');
        function getTimeStamp() {
            var d = new Date();
            var s =
                leadingZeros(d.getFullYear(), 4) + '-' +
                leadingZeros(d.getMonth() + 1, 2) + '-' +
                leadingZeros(d.getDate(), 2) + ' ' +
                leadingZeros(d.getHours(), 2) + ':' +
                leadingZeros(d.getMinutes(), 2) + ':' +
                leadingZeros(d.getSeconds(), 2);

            return s;
        }

        function leadingZeros(n, digits) {

            var zero = '';
            n = n.toString();

            if (n.length < digits) {
                for (var i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        }
        var challenge = DB.data.goingon;
        challenge.map((x) => {
            this.challengeList.push(x);
        });
        this.challengeList.map((x)=>{
            this.challengeData.cID=x.challenge.cID;
            this.challengeData.name=x.challenge.name;
            this.challengeData.checked=false;
            this.challengeList_tmp.push(this.challengeData);
        })
        

        var now = getTimeStamp();
        this.data.uID = DB.data.users.uID;
        this.data.perform_datetime = now;
        this.data.name = DB.data.exercises[0].name;

    }


    render() {

        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('내정보')}>
                            <Image
                                style={styles.button}
                                source={require('../../Image/default_profile.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Title />
                    <Content>
                        <MainCom />
                    </Content>
                </View>
                <View style={{ height: 120, alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity
                        style={{
                            width: 200,
                            height: 50,
                            borderRadius: 10,
                            backgroundColor: '#272343',
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            marginBottom: 20,
                            alignItems: 'center'
                        }}
                        onPress={() => {
                            this.setState({ visible: true });
                            console.log(this.challengeList_tmp);
                        }
                        }>
                        <Text style={{ color: 'white', fontSize: 19, fontStyle: 'normal', }}>챌린지 선택</Text>
                    </TouchableOpacity>
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
                        onPress={() => {
                            this.setState({ count_per_set: 100 });
                            setTimeout(() => {
                                console.log(this.data);
                                this.props.navigation.navigate('D1_ExerciseResult', { res: this.data });
                            }, 2000);
                        }
                        }>
                        <Text style={{ color: 'white', fontSize: 19, fontStyle: 'normal', }}>완료</Text>
                    </TouchableOpacity>

                    <Modal visible={this.state.visible}
                        onTouchOutside={() => { this.setState({ visible: false }) }}
                    >
                        <ModalTitle
                            title="챌린지 선택"
                            align="left"
                        />
                        <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200 }}>
                            <Text>챌린지를 선택해주세요</Text>
                            <ScrollView>
                                {this.challengeList_tmp.map((obj, i) => {
                                    return (
                                        <ListItem key={i}>
                                            <CheckBox checked={obj.check} color={"#272343"} onPress={() => { obj.check = !(obj.check); }} />
                                            <Body style={{ alignItems: 'flex-start', marginLeft: 5 }}>
                                                <Text>{obj.name}</Text>
                                            </Body>
                                        </ListItem>
                                    )
                                }
                                )}
                            </ScrollView>
                        </ModalContent>
                        <ModalFooter>
                            <ModalButton
                                text="확인"
                                onPress={() => {
                                    this.challengeList_tmp.map((obj)=>{
                                        if(obj.friendCheck==true)
                                        {this.data.eID=obj.cID;}
                                    }
                                    )
                                    
                                    this.setState({ visible: false })
                                }
                                }
                                key="button-1"
                            />

                            <ModalButton
                                text="그냥 하기"
                                onPress={() => {

                                    this.setState({ visible: false })
                                }
                                }
                                key="button-2"
                            />
                        </ModalFooter>
                    </Modal>
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
    }
});