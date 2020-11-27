import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import ShowResult from './ShowComponent/ShowResult';
import * as Request from '../request'

const recordExercise = async (records) => {
    try {
        let response = await fetch(
            'http://118.127.215.194:3000/user/exercise_record', {
            method: 'POST',
            headers: {
                Accept: 'appplication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uID: records.uID,
                eID: records.eID,
                cID: records.cID,
                perform_datetime: records.perform_datetime,
                count_per_set: records.count_per_set,
            })
        });
        let json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error);
    }
}


class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>운동 결과</Text>
            </View>
        )
    }
}




export default class ExerciseResult extends Component {

    state = {
        count_per_set: 0,
        uID: 0,
        eID: 0,
        cID: 0, //임의의 cID
        perform_datetime: '',
    }
    name = '';
    calorie_consume = 0;

    componentDidMount() {
        const Res = this.props.navigation.getParam('res');
        this.setState({
            uID: DB.data.users.uID,
            count_per_set: Res.count_per_set,
            eID: Res.eID,

            perform_datetime: Res.perform_datetime,

        });
    }
    render() {
        if (this.state.eID == 1) { this.calorie_consume = 0.5; this.name = '스쿼트'; }
        else if (this.state.eID == 2) { this.calorie_consume = 7; this.name = '풀업'; }
        else if (this.state.eID == 3) { this.calorie_consume = 0.6; this.name = '사이드런지'; }

        console.log(this.state.perform_datetime);
        console.log('this state', this.state);
        console.log('record', Request.POST(`user/exercise_record`, this.state));//recordExercise(this.state));
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('내정보')}>
                            <Image
                                style={styles.button}
                                source={require('../Image/default_profile.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <Title />
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>{`${this.state.perform_datetime}`}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        {`${this.name} : ${this.state.count_per_set} 회`}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        {`칼로리 소비: ${this.calorie_consume * this.state.count_per_set} kcal`}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>

                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Image source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fko%2Ffree-png-zloat&psig=AOvVaw04PJfmTmJjTRKrcHAvL6nz&ust=1602562123162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjK3aSXruwCFQAAAAAdAAAAABAD' }} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                        </Card>
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