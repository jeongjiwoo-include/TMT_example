import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import ProgressBar from 'react-native-progress/Bar';

export default class ShowChallenge extends Component {
    daysDiff = (start, finish) => {
        return Math.round((finish - start) / (1000 * 60 * 60 * 24));
    }
    render() {
        const data = this.props.navigation.getParam('data');
        console.log('data:', data);

        var finish_date = new Date(data.finish_datetime);
        var start_date = new Date(data.start_datetime);
        var today_date = new Date();
        var total_date = this.daysDiff(start_date, finish_date);
        var now_date = this.daysDiff(start_date, today_date);
        var progressRate = now_date / total_date;
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
                    <View style={styles.title}>
                        <Text style={{ fontSize: 35, color: 'black' }}>{data.name}</Text>
                    </View>
                    <Content>
                        <View style={styles.main}>
                            <Card>
                                <CardItem style={{ marginTop:20, marginLeft: 20, marginRight: 20 }}>
                                    <Left>
                                        <Text>{now_date} / {total_date} Days</Text>
                                    </Left>
                                    <Right>
                                        <Text>순위 : </Text>
                                    </Right>
                                </CardItem>
                                <CardItem style={{ justifyContent: 'center' }}>
                                    <ProgressBar color={'#272343'} unfilledColor={'#bae8e8'} borderWidth={0} progress={progressRate} width={300} />
                                </CardItem>
                                <CardItem>
                                    <Text>{data.description}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>{data.eID}</Text>
                                </CardItem>
                                <CardItem>
                                    <Text>{data.target_total_count}</Text>
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