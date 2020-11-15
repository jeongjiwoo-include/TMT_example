import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Left, Right, Card, CardItem, Input, Label } from 'native-base';
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';

const updateInfo = async (uID, changedPW) => {
    try {
        let response = await fetch(
            `https://savemeht.ml/user/${uID}`, {
                method: 'PUT',
                headers: {
                    Accept: 'appplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pw: changedPW,
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
                <CircleButton/>
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>설정</Text>
            </View>
        )
    }
}


class MainCom extends Component{
    render(){
        return(
            <View style={styles.main}>
          <Card>
          <CardItem button onPress={()=> this.props.navigation.navigate('F1_EditProfile')}>
              <Left>
                <Text>프로필 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> alert('친구편집')}>
              <Left>
                <Text>친구 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> alert('설정')}>
              <Left>
                <Text>설정</Text>
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


export default class Setting extends Component {
    constructor(props){
        super(props);
        this.state={
            pwd:'',
            re_pwd:'',
            name:'',
            visible:false,
            uID:-1,

            pwd_secure:true,
        }
    }
    componentDidMount(){
        const Data = this.props.navigation.getParam('data');
        this.setState({uID:Data.data.users.uID});
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
                    <Title/>
                    <Content>
                    <View style={styles.main}>
          <Card>
          <CardItem button onPress={()=> this.setState({visible:true})} style={{height:50}}>
              <Left>
                <Text style={{fontSize:20}}>비밀번호 변경하기</Text>
                </Left>
          </CardItem>
          <Modal visible={this.state.visible}
                onTouchOutside={() => {this.setState({ visible: false });}}
                    >  
                    <ModalTitle
                    title="비밀번호 변경"
                    align="left"
                    />
                <ModalContent style={{ backgroundColor: '#fff', paddingTop: 24, width:200, height:300 }}>
                    <Text style={{borderStyle:'solid'}}>변경할 비밀번호를 입력하세요.</Text>
                    <Label style={{paddingTop:24}}>비밀번호</Label>     
                    <Input secureTextEntry={true} style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.pwd} onChangeText={val=>this.setState({pwd:val})}/>
                    <Label style={{paddingTop:24}}>비밀번호 확인</Label>
                    <Input secrueTextEntry={true} style={{borderBottomWidth:0.5, borderBottomColor:'black', height:12}} value={this.state.re_pwd} onChangeText={val=>this.setState({re_pwd:val})}/>
                </ModalContent>
                <ModalFooter>
                <ModalButton
                text="변경"
                onPress={() => {
                    if(this.state.pwd==this.state.re_pwd){
                        this.setState({ visible: false });
                        updateInfo(this.state.uID,this.state.pwd).then(alert('비밀번호가 변경되었습니다.'))}
                    else{
                        alert('비밀번호와 비밀번호 확인이 맞지 않습니다.');
                    }
                }
                }
                key="button-1"
                />
                </ModalFooter>
            </Modal>
          <CardItem button onPress={()=> alert('개인정보')} style={{height:50}}>
              <Left>
                <Text style={{fontSize:20}}>개인 정보</Text>
                </Left>
          </CardItem>
          <CardItem>
              <Left>
                <Text ></Text>
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