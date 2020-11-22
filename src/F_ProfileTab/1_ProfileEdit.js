import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Left, Right, Card, CardItem, Input } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import ImagePicker from 'react-native-image-picker';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import * as Request from '../request';

const updateInfo = async (uID, changedName) => {
    try {
        let response = await fetch(
            //`http://118.127.215.194:3000/user/${uID}`, {
            `http://112.172.255.3:3000/user/${uID}`, {
            method: 'PUT',
            headers: {
                Accept: 'appplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: changedName,
            })
        });
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}


export default class ProfileTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
                visible_image: false,
                visible_name: false,
           
                profile_image: '',
                name: '',
                uID: -1,
            
        }
    }
    componentDidMount() {
        const Data = this.props.navigation.getParam('data');
        this.setState({  name: Data.data.users.name, uID: Data.data.users.uID, profile_image: Data.data.users.profile_image  });
        this.setState({ visible_image: false, visible_name: false } )
    }

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
                    <Content>
                        <View style={styles.main}>
                            <Card>
                                <CardItem button onPress={() => { this.setState({  visible_image: true  }); }} style={{ height: 50 }}>
                                    <Text style={{ fontSize: 20 }}>프로필 사진 변경하기</Text>
                                </CardItem>
                                <Modal visible={this.state.visible_image}
                                    onTouchOutside={() => { this.setState({  visible_image: false  }) }}>
                                    <ModalTitle
                                        title="프로필 이미지 변경"
                                        align="left"
                                    />
                                    <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200, height: 150 }}>
                                        <ModalButton
                                            text="사진 촬영"
                                            onPress={() => {
                                                ImagePicker.launchCamera({ saveToPhotos: true }, response => {
                                                    console.log('Response = ', response);

                                                    if (response.didCancel) {
                                                        console.log('User cancelled image picker');
                                                    } else if (response.error) {
                                                        console.log('ImagePicker Error: ', response.error);
                                                    } else if (response.customButton) {
                                                        console.log('User tapped custom button: ', response.customButton);
                                                    } else {
                                                        const source = { uri: response.uri };
                                                        this.setState({  profile_image: source });
                                                    }
                                                })
                                            }} key="Pbutton-1" />
                                        <ModalButton
                                            text="사진 불러오기"
                                            onPress={() => {
                                                ImagePicker.launchImageLibrary({}, response => {
                                                    console.log('Response = ', response);

                                                    if (response.didCancel) {
                                                        console.log('User cancelled image picker');
                                                    } else if (response.error) {
                                                        console.log('ImagePicker Error: ', response.error);
                                                    } else if (response.customButton) {
                                                        console.log('User tapped custom button: ', response.customButton);
                                                    } else {
                                                        const source = { uri: response.uri };
                                                        this.setState({  profile_image: source  });
                                                    }
                                                })
                                            }} key="Pbutton-2" />
                                    </ModalContent>
                                    <ModalFooter>
                                        <ModalButton
                                            text="변경"
                                            onPress={() => {
                                                this.setState({  visible_image: false  });
                                                //updateInfo(this.state.uID, this.state.name);
                                                alert('프로필 사진이 변경되었습니다.');
                                                console.log(this.state.name + '의 프로필 사진이 변경되었습니다.');
                                            }
                                            }
                                            key="button-1"
                                        />
                                    </ModalFooter>
                                </Modal>
                                <CardItem button onPress={() => { console.log(this.state.name, '/', this.state.uID); this.setState({  visible_name: true  }); }} style={{ height: 50 }}>
                                    <Text style={{ fontSize: 20 }}>이름 변경하기</Text>
                                </CardItem>
                                <Modal visible={this.state.visible_name}
                                    onTouchOutside={() => { this.setState( { visible_name: false } ); }}
                                >
                                    <ModalTitle
                                        title="이름 변경"
                                        align="left"
                                    />
                                    <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width: 200, height: 150 }}>
                                        <Text style={{ borderStyle: 'solid' }}>변경할 이름을 입력하세요.</Text>
                                        <Input style={{ borderBottomWidth: 0.5, borderBottomColor: 'black', height: 12 }} value={this.state.name} onChangeText={(val) => this.setState( { name: val } )} />
                                    </ModalContent>
                                    <ModalFooter>
                                        <ModalButton
                                            text="변경"
                                            onPress={async () => {
                           
                                                console.log(this.state)
                                                console.log(this.state.uID);
                                                await Request.PUT(`user/${this.state.uID}`, {name: this.state.name})
                                                console.log(this.state)
                                                console.log(this.state.uID);
                                                this.setState({  visible_name: false  });
                                                //updateInfo(this.state.uID, this.state.name);
                                                alert(this.state.name + '으로 변경되었습니다.');
                                                console.log(this.state.name + '으로 변경되었습니다.');
                                            }
                                            }
                                            key="button-1"
                                        />
                                    </ModalFooter>
                                </Modal>
                                <CardItem>
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                                <CardItem >
                                    <Left>
                                        <Text></Text>
                                    </Left>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
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
        height: 125,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
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
        width: 100,
        height: 100,
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