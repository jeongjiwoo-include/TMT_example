import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import DatePicker from 'react-native-date-picker';
import * as Request from '../request';


/*const join = async (user) => {
    try {
        let response = await fetch(
            'http://118.127.215.194:3000/join', {
                method: 'POST',
                headers: {
                    Accept: 'appplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: user.id,
                    pw: user.pw,
                    name: user.name,
                    email: user.email,
                    phone_number: user.phone_number,
                    birth_date: user.birth_date,
                    height: user.height,
                    weight: user.weight,
                    public: user.public,
                    profile_image: user.profile_image,
                })
            });
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}*/
const join = async (user) => {
    try {
        let response = await fetch(
            'http://112.172.255.3:3000/join/', {
            method: 'POST',
            headers: {
                Accept: 'appplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id,
                pw: user.pw,
                name: user.name,
                email: user.email,
                phone_number: user.phone_number,
                birth_date: user.birth_date,
                height: user.height,
                weight: user.weight,
                public: user.public,
                profile_image: user.profile_image
            })
        });
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}

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
    handleEMAIL = (text) => {
        this.setState({ email: text })
    }
    handlePHONE = (text) => {
        this.setState({ phone_number: text })
    }
    handleBIRTH = (date) => { //생년월일을 받아서 계산하게
        //console.log(date);
        //console.log(this.state.birth_date);

        let res = ''
        let year = date.getFullYear();
        let month = date.getMonth();
        if (month < 10) { month = `0${month}` }
        let day = date.getDate();
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
        //alert('id : ' + id+ '\npw : '+pw+'\nre_pw : '+re_pw)
        

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
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handleEMAIL}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>휴대전화번호</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handlePHONE}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>생년월일</Text>
                        <DatePicker date={tmp} onDateChange={(date) => { tmp = date; this.handleBIRTH(tmp) }} mode={'date'} />
                        <Text style={{ alignItems: 'flex-start' }}>키</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
                            onChangeText={this.handleHEIGHT}
                        >
                        </TextInput>
                        <Text style={{ alignItems: 'flex-start' }}>몸무게</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                            placeholderTextColor='#e3f6f5'
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
        width: 360,
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