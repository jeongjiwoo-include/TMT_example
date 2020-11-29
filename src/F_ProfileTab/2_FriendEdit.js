import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    Container, Content, Icon, Left, Right, Card, CardItem, Separator, Item, Input,
    ListItem, CheckBox, Body,
} from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import * as Request from '../request';


class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>친구 편집</Text>
            </View>
        )
    }
}

const friends = [
    '친구1',
    '친구2',
    '친구3',
    '친구4',
];

const recommedFriend = [
    '추천친구1',
    '추천친구2',
    '추천친구3',
];


export default class FriendEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectFriend: '',
            selectFrienduID: -1,
            uID: -1,
        }
    };
    
    friendsList = []
    
    friendData = {
        frienduID : -1,
        friendCheck : false
    }


    componentDidMount() {
        const friendList = DB.data.friends;
        console.log(friendList);
        friendList.map((obj)=>{this.friendData.frienduID=obj.uID;
            this.friendsList.push(this.friendData);});
        this.setState({ uID: DB.data.users.uID });
        console.log('friends :', this.friendsList);

    }
    componentWillUnmount(){}

    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity>
                            <Image
                                style={styles.button}
                                source={require('../Image/default_profile.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Title />
                    <Content>
                        <View style={styles.main}>
                            <Card>
                                <Separator bordered>
                                    <Text style={{ fontSize: 20 }}>친구 목록</Text>
                                </Separator>
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
                            </Card>
                            <Modal visible={this.state.modalVisible}
                                onTouchOutside={() => { this.setState({ modalVisible: false }) }}>
                                <ModalTitle
                                    title="친구 검색"
                                    align="left"
                                />
                                <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200, height: 150 }}>
                                    <Item>
                                        <Input placeholder="사용자 이름 입력" onChangeText={(val) => { this.setState({ selectFriend: val }); }} />
                                    </Item>
                                    <ModalButton
                                        style={{
                                            width: 100,
                                            height: 50,
                                            borderRadius: 10,
                                            borderColor: 'grey',
                                            borderWidth: 1,
                                            marginTop: 20
                                        }}
                                        text="검색"
                                        onPress={async () => {
                                            console.log('friend name :' + this.state.selectFriend);
                                            try {
                                                var json = await Request.GET(`user/find/${this.state.selectFriend}`);
                                                if (json) {
                                                    var founduID = json.data.uID;
                                                    console.log('검색한 사용자 uID' + founduID)
                                                    this.setState({ selectFrienduID: founduID });
                                                    alert(`${this.state.selectFriend} 님을 찾았습니다.`);
                                                }
                                                else {
                                                    throw new Error('msj: no user');
                                                }
                                            } catch (e) { alert("검색한 사용자가 존재하지 않습니다."); }
                                        }} key="Fbutton-1" />
                                </ModalContent>
                                <ModalFooter>
                                    <ModalButton
                                        text="친구 추가"
                                        onPress={async() => {
                                            var json = await Request.POST(`user/friend/request/${this.state.uID}/${this.state.selectFrienduID}`)
                                            .then(alert('친구 요청을 보냈습니다.'));
                                            console.log(json);//request에 추가
                                            this.setState({ modalVisible: false });
                                        }} key="button-1" />
                                    <ModalButton
                                        text="취소"
                                        onPress={() => {
                                            this.setState({ modalVisible: false });
                                        }
                                        }
                                        key="button-2"
                                    />
                                </ModalFooter>
                            </Modal>
                        </View>
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
                            onPress={() => {
                                this.setState({ modalVisible: true });
                            }}>
                            <Text style={{ color: 'white', fontSize: 19, fontStyle: 'normal', }}>사용자 검색</Text>
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
    }
});