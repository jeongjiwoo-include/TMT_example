import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>활동</Text>
            </View>
        )
    }
}


export default class ActivityResult extends Component {
    data = {
        perform_datetime: '',
        eID: [],
        cID: [],
        count_per_set: [],
        all_kcal: 0,
    }

    addData = (Data) => {
        this.data.perform_datetime = Data.perform_datetime;
        this.data.cID = Data.cID;
        this.data.eID = Data.eID;
        this.data.count_per_set = Data.count_per_set;
    }

    render() {
        const Data = this.props.navigation.getParam('data');
        this.addData(Data);
        console.log('this.data :', this.data)
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
                        <ScrollView style={styles.main}>
                            <Card>
                                <CardItem>
                                    <Text>{this.data.perform_datetime}</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        {this.data.eID.map((num, i) => {
                                            var Exercise_name = '';
                                            var kcal = 0;
                                            
                                            if (num == 1) { Exercise_name = '스쿼트'; kcal = 0.5 * this.data.count_per_set[i]; this.data.all_kcal +=kcal; }
                                            else if (num == 2) { Exercise_name = '풀업'; kcal = 7 * this.data.count_per_set[i]; this.data.all_kcal +=kcal;}
                                            else if (num == 3) { Exercise_name = '사이드런지'; kcal = 0.6 * this.data.count_per_set[i]; this.data.all_kcal +=kcal;}
                                            
                                            return (<React.Fragment key={i}>
                                                <Left>
                                                    <Text >{Exercise_name}</Text>
                                                </Left>
                                                <Right>
                                                    <Text>{this.data.count_per_set[i]}개</Text>
                                                    <Text>{kcal}</Text>
                                                    <Text></Text>
                                                </Right>
                                            </React.Fragment>)
                                        })}
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Text>오늘의 총 칼로리 소모량 : {this.data.all_kcal} kcal</Text>
                                </CardItem>
                            </Card>
                        </ScrollView>
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