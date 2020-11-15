import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Left, Right, Card, CardItem, Input } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const updateInfo = async (uID, changedName) => {
    try {
        let response = await fetch(
            `https://savemeht.ml/user/${uID}`, {
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

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../Image/default_profile.png')}
            />
          </TouchableOpacity>
        )
    }
}

class Profile extends Component {
    render(){
        return(
            <View style={styles.profile}>
                <CircleButton/>
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>내 정보</Text>
            </View>
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


export default class ProfileTab extends Component {
    constructor(props){
        super(props);
        this.state ={
            visible:false,
            name:'',
            uID:-1,
        }
    }
    componentDidMount(){
        const Data = this.props.navigation.getParam('data');
        this.setState({name:Data.data.users.name, uID:Data.data.users.uID});
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
                            <CardItem button onPress={()=> {alert('프로필 사진 변경하기=>Image Picker사용하기'); console.log(Data);}} style={{height:50}}>
                                    <Text style={{fontSize:20}}>프로필 사진 변경하기</Text>
                            </CardItem>
                            <CardItem button onPress={()=> {console.log(this.state.name, '/',this.state.uID);this.setState({visible:true});}} style={{height:50}}>
                                    <Text style={{fontSize:20}}>이름 변경하기</Text>
                            </CardItem>
                            <Modal visible={this.state.visible}
                                               onTouchOutside={() => {this.setState({ visible: false });}}
                                               >  
                                            <ModalTitle
                                            title="이름 변경"
                                            align="left"
                                            />
                                            <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width:200, height:150 }}>
                                                <Text style={{borderStyle:'solid'}}>변경할 이름을 입력하세요.</Text>
                                                <Input style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.name} onChangeText={val=>this.setState({name:val})}/>
                                            </ModalContent>
                                            <ModalFooter>
                                                <ModalButton
                                                    text="변경"
                                                    onPress={() => {
                                                    this.setState({ visible: false });
                                                    updateInfo(this.state.uID, this.state.name);
                                                    alert(this.state.name+'으로 변경되었습니다.');
                                                    console.log(this.state.name+'으로 변경되었습니다.');
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
        height:125,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
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
        width: 100, 
        height: 100, 
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