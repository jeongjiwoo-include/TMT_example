import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Icon } from 'native-base';


export default class SignupTab extends Component {
    state ={
        id:'',
        pw:'',
        re_pw:''
    }
    handleID=(text)=>{
        this.setState({id:text})
    }
    handlePW=(text)=>{
        this.setState({pw:text})
    }
    handleRE_PW=(text)=>{
        this.setState({re_pw:text})
    }
    signCheck=(id,pw,re_pw)=>{
        alert('id : ' + id+ '\npw : '+pw+'\nre_pw : '+re_pw)
    }
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <Text style={{fontSize:25, fontWeight:'bold'}}>회원가입</Text>
                    </View>
                    <View style = {styles.main}>
                        <Text style={{alignItems:'flex-start'}}>이메일 주소</Text>
                        <TextInput 
                        style={styles.input} 
                        underlineColorAndroid = "transparent"
                        autoCapitalize = "none"
                         placeholderTextColor='#e3f6f5'
                          onChangeText={this.handleID}>
                        </TextInput>
                        <Text style={{alignItems:'flex-start'}}>비밀번호</Text>
                        <TextInput 
                        style={styles.input} 
                        underlineColorAndroid = "transparent"
                        secureTextEntry 
                        autoCapitalize = "none"
                        placeholderTextColor='#e3f6f5' 
                        onChangeText={this.handlePW}
                        >
                        </TextInput>
                        <Text style={{alignItems:'flex-start'}}>비밀번호 재입력</Text>
                        <TextInput 
                        style={styles.input} 
                        underlineColorAndroid = "transparent"
                        secureTextEntry 
                        autoCapitalize = "none"
                        placeholderTextColor='#e3f6f5' 
                        onChangeText={this.handleRE_PW}
                        >
                        </TextInput>
                    </View>
                    <View style={{height:50, alignItems:'flex-end'}}>
                        <TouchableOpacity style={styles.button} onPress={()=> {this.signCheck(this.state.id,this.state.pw,this.state.re_pw); this.props.navigation.navigate('홈');}}>
                            <Text style={{color: 'white', fontSize:19, fontStyle:'normal',}}>가입하기</Text>
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
        
        
    },
    profile: {
        height:190,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:"flex-start",
        marginTop: 20,
    },
    main :{
        backgroundColor: 'white',
        height: 250,
        
    },
    circlebutton :{
        width: 160, 
        height: 160, 
        borderRadius: 160 / 2,
        backgroundColor:'#bae8e8',
    },
    input : {
        alignItems:'stretch',
        width: 360,
        height: 40,
        borderRadius: 10,
        backgroundColor:'#bae8e8',
        justifyContent:'center',   
        marginBottom:20,
        color: 'white',
        fontSize:21,
        fontStyle:'normal',
    },
    button:{
        width: 150,
        height: 30,
        borderRadius: 10,
        backgroundColor:'#272343',
        justifyContent:'center',  
        alignItems:'flex-end', 
        marginBottom:20,
        alignItems:'center'
        }
});