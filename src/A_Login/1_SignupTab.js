import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import DatePicker from 'react-native-date-picker';
import * as Request from '../request';

var tmp = new Date();

export default class SignupTab extends Component {
    state = {
        id: '',
        pw: '',
        re_pw: '',
        name: '',
        email: '',
        phone_number: '',
        birth_date: '',
        height: 0,
        weight: 0,
        public: 0,
        profile_image: '',
    }

    email = {
        address: '',
        domain: '',
    }
    phone_num = {
        first : '',
        second: '',
    }

    handleID = (text) => {
        this.setState({ id: text });
    }
    handlePW = (text) => {
        this.setState({ pw: text })
    }
    handleRE_PW = (text) => {
        this.setState({ re_pw: text })
    }
    handleNAME = (text) => {
        this.setState({ name: text })
    }
    handleEMAIL = (address, domain) => {
        var email_address = `${address}@${domain}`
        this.setState({ email: email_address })
    }
    handlePHONE = (first, second) => {
        var phone = `010-${first}-${second}`
        this.setState({ phone_number: phone })
    }
    handleBIRTH = (date) => { 
        let res = ''
        let year = date.getFullYear(); console.log(`year : ${year}`);
        let month = date.getMonth()+1; console.log(`month : ${month}`);
        if (month < 10) { month = `0${month}` }
        let day = date.getDate(); console.log(`day : ${day}`);
        if (day < 10) { day = `0${day}` }
        res = `${year}-${month}-${day}`;

        this.setState({ birth_date: res });
        console.log(this.state.birth_date);
    }
    handleHEIGHT = (text) => {
        this.setState({ height: text })
    }
    handleWEIGHT = (text) => {
        this.setState({ weight: text })
    }
    /*handlePUB=(text)=>{
        this.setState({public:text})
    }*/
    signCheck = (id, pw, re_pw, name, email, phone_number, age, height, weight) => {
        if (pw != re_pw) { alert('비밀번호 확인이 잘못 되었습니다. 재확인 하세요.');throw new Error('msg:Wrong password_re') };
        console.log(this.state);
    }
        
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>회원가입</Text>
                    </View>
                    <ScrollView style={styles.main}>
                        <Text style={{ alignItems: 'flex-start' }}>아이디</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handleID}>
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>비밀번호</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handlePW}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>비밀번호 재입력</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            secureTextEntry
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handleRE_PW}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>이름</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handleNAME}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>이메일</Text>
                        <View style={{flexDirection:'row'}}>
                        <TextInput
                            style={styles.input_row}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={(text)=>this.email.address=text}
                        >
                        </TextInput>
                        <Text style={{fontSize:28 }}>@</Text>
                        <TextInput
                            style={styles.input_row}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={(text)=>{this.email.domain=text; this.handleEMAIL(this.email.address, this.email.domain);}}
                        >
                        </TextInput>
                        </View>
                        <Text style={{ alignItems: 'flex-start'}}>휴대전화번호</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:28 }}>010  -  </Text>
                        <TextInput
                            style={styles.input_row_phone}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            keyboardType="number-pad"
                            onChangeText={(text)=>{this.phone_num.first=text}}
                        >
                        </TextInput>
                        <Text style={{fontSize:28 }}>  -  </Text>
                        <TextInput
                            style={styles.input_row_phone}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            keyboardType="number-pad"
                            onChangeText={(text)=>{this.phone_num.second=text; this.handlePHONE(this.phone_num.first, this.phone_num.second);}}
                        >
                        </TextInput>
                        </View>
                        <Text style={{ alignItems: 'flex-start' }}>생년월일</Text>
                        <DatePicker date={tmp} onDateChange={(date) => { console.log(date); tmp = date; console.log(tmp);this.handleBIRTH(tmp) }} mode={'date'} />
                        <Text style={{ alignItems: 'flex-start' }}>키 (단위:cm)</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            keyboardType="number-pad"
                            onChangeText={this.handleHEIGHT}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>몸무게 (단위:kg)</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            keyboardType="number-pad"
                            onChangeText={this.handleWEIGHT}
                        >
                        </TextInput>
                    </ScrollView>
                    <View style={{ height: 50, alignItems: 'flex-end' }}>
                        <TouchableOpacity style={styles.button} onPress={async () => {
                            try {
                                this.signCheck(
                                    this.state.id, this.state.pw, this.state.re_pw, this.state.name, this.state.email, this.state.phone_number, this.state.age, this.state.height, this.state.weight
                                );
                                /*join(this.state)
                                .then((json)=>{
                                    if(json.state==0){
                                        alert('중복된 ID입니다.\n다른 ID를 입력하세요.');
                                    }
                                    else{
                                        
                                        (this.props.navigation.navigate('A0_LoginTab'));
                                    }
                                })
                                */
                                await Request.POST('join', this.state);
                                this.props.navigation.navigate('A0_LoginTab');
                            } catch (e) {
                                alert('회원가입 실패.')
                            }
                        }}>
                            <Text style={{ color: 'white', fontSize: 19, fontStyle: 'normal', }}>가입하기</Text>
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
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: 'white',


    },
    profile: {
        height: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: "flex-start",
        marginTop: 20,
    },
    main: {
        backgroundColor: 'white',
        height: 250,

    },
    circlebutton: {
        width: 160,
        height: 160,
        borderRadius: 160 / 2,
        backgroundColor: '#bae8e8',
    },
    input: {
        alignItems: 'stretch',
        width: 350,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bae8e8',
        justifyContent: 'center',
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
    },
    input_row: {
        alignItems: 'stretch',
        width: 162.5,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bae8e8',
        justifyContent: 'center',
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
    },
    input_row_phone: {
        alignItems: 'stretch',
        width: 115,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#bae8e8',
        justifyContent: 'center',
        marginBottom: 20,
        color: 'white',
        fontSize: 14,
        fontStyle: 'normal',
    },
    button: {
        width: 150,
        height: 30,
        borderRadius: 10,
        backgroundColor: '#272343',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 20,
        alignItems: 'center'
    }
});