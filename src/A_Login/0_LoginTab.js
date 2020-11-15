import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { back } from 'react-native/Libraries/Animated/src/Easing';

const login = async (user) => {
    try {
        let response = await fetch(
            'https://savemeht.ml/login/', {
                method: 'POST',
                headers: {
                    Accept: 'appplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user.id,
                    pw: user.pw
                })
            });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        return null;
    }
}
//id가 존재하는지 유효성 검사 후 로그인

export default  class LoginTab extends Component {
    state ={
        id:'',
        pw:''
    }

    handleID=(text)=>{
        this.setState({id:text})
    }
    handlePW=(text)=>{
        this.setState({pw:text})
    }
    signIn=(id,pw)=>{
        alert('id : ' + id+ '\npw : '+pw)
    }
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>alert('version: 0.0.1v')}>
                            <Image
                            style={styles.circlebutton}
                            source={require('../Image/example.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.main}>
                        <TextInput 
                        style={styles.input} 
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                        placeholder=" ID/EMAIL"
                         placeholderTextColor='#e3f6f5'
                          onChangeText={this.handleID}>
                        </TextInput>
                        <TextInput 
                        style={styles.input} 
                        underlineColorAndroid = "transparent"
                        secureTextEntry 
                        autoCapitalize = "none"
                        placeholder=" PW" 
                        placeholderTextColor='#e3f6f5' 
                        onChangeText={this.handlePW}
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.button} onPress={()=> {
                            login(this.state).then((json)=> {if(json.hasOwnProperty('data')){this.props.navigation.navigate('홈'); console.log(json.data.users.name,"로그인");}
                            else{alert('잘못된 ID 혹은 PW입니다. \n다시 확인하세요.');}})                            
                           }}
                                >
                            <Text style={{color: 'white', fontSize:21, fontStyle:'normal',}}>SIGN IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{width: 200, height: 50, alignItems:'center', marginTop:20}} onPress={()=>this.props.navigation.navigate('A1_SignupTab')}
                        >
                            <Text style={{fontSize:25, textDecorationLine:'underline', fontWeight:'bold',}}>Create Account</Text>
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
        marginLeft: 30,
        marginRight: 30,
        backgroundColor:'white',
        alignItems: 'center',
        
    },
    profile: {
        height:300,
        backgroundColor: 'white',
        justifyContent:'center',
        marginTop: 20,
    },
    main :{
        backgroundColor: 'white',
        height: 305,
        alignItems:'center',
    },
    circlebutton :{
        width: 160, 
        height: 160, 
        borderRadius: 160 / 2,
        backgroundColor:'#bae8e8',
    },
    input : {
        width: 360,
        height: 60,
        borderRadius: 10,
        backgroundColor:'#bae8e8',
        justifyContent:'center',   
        marginBottom:20,
        color: 'white',
        fontSize:21,
        fontStyle:'normal',
    },
    button:{
        width: 300,
        height: 70,
        borderRadius: 10,
        backgroundColor:'#272343',
        justifyContent:'center',  
        alignItems:'center', 
        marginBottom:20,
        }
});