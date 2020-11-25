import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import * as Request from '../request';

class CircleButton extends Component {
    render() {
        return (
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
    render() {
        return (
            <View style={styles.profile}>
                <CircleButton />
            </View>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <View style={styles.title}>
                <Text style={{ fontSize: 35, color: 'black' }}>활동</Text>
            </View>
        )
    }
}



export default class ActivityTab extends Component {
    state = {
        uID: 0,
        eID: 0,
        cID: 0,
        perform_datetime: '',
        count_per_set: '',
    }
    result = [
    ];

    componentDidMount() {
        this.setState({ uID: DB.data.users.uID })
        this.addDateTime();
        console.log(this.result);

    }
    addDateTime = () => {
        var time = DB.data.exercise_records;
        var time_cut = new Array();

        console.log(time.length);
        for (let i = 0; i < time.length; i++) {
            var tmp = {
                uID: 0,
                eID: 0,
                cID: 0,
                perform_datetime: '',
                count_per_set: '',
            }
            tmp.uID = time[i].uID;
            tmp.eID = time[i].eID;
            tmp.cID = time[i].cID;
            tmp.count_per_set = time[i].count_per_set;
            var temp = time[i].perform_datetime.split('T');
            tmp.perform_datetime = temp[0];

            time_cut.push(tmp);
        }

       // time_cut은 시간을 yyyy-mm-dd 형식에 자른 배열
        time_cut.sort((a,b) => {
            if(a.perform_datetime < b.perform_datetime) return -1;
            else if (a.perform_datetime > b.perform_datetime) return 1;
            else return 0;
        }) // date_time 별로 sorting
        console.log('time cut : ', time_cut) 
        ////////////////////////////////////////////////////////////////////////////////////

        for (let i = 0; i < time_cut.length; i++) {
            var data = {
                perform_datetime: '',
                eID: [],
                cID: [],
                count_per_set: [],
            }
            
            if(this.result.length==0){
                data.perform_datetime=time_cut[i].perform_datetime;
                data.eID.push(time_cut[i].eID); 
                data.cID.push(time_cut[i].cID);
                data.count_per_set.push(time_cut[i].count_per_set);
                this.result.push(data)
                continue;
            } // result에 아무것도 없으면 바로 push
            
            else {
                for(let j=0; j< this.result.length ; j++){
                                      
                    if(this.result[j].perform_datetime == time_cut[i].perform_datetime){
                        this.result[j].cID.push(time_cut[i].cID);
                        this.result[j].eID.push(time_cut[i].eID);
                        this.result[j].count_per_set.push(time_cut[i].count_per_set);
                    }//같을 때
                    else{
                        data.perform_datetime=time_cut[i].perform_datetime;
                        data.eID.push(time_cut[i].eID);
                        data.cID.push(time_cut[i].cID);
                        data.count_per_set.push(time_cut[i].count_per_set);
                        this.result.push(data);
                        break;
                    }//다를 때
                }

            } //result에 있으면

            }
  
            
        }

    
    render() {
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
                            {this.result.map((obj, i) => {
                                return (
                                    <Card>
                                        <CardItem button onPress={() => { console.log(DB.data.exercise_records); this.props.navigation.navigate('C1_ActivityResult',{data:this.result[i]}); }} style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }}>
                                            <Left>
                                                <Text key={i}>{obj.perform_datetime}</Text>
                                            </Left>
                                            <Right>
                                                <Icon name="arrow-forward" />
                                            </Right>
                                        </CardItem>
                                        <CardItem>
                                            <Body>
                                                {obj.eID.map((obj2, j) => {
                                                    var Exercise_name = '';
                                                    if (obj2 == 1) Exercise_name = '스쿼트';
                                                    else if (obj2 == 2) Exercise_name = '풀업';
                                                    else if (obj2 == 3) Exercise_name = '사이드런지';
                                                    return (<React.Fragment>
                                                        <Left>
                                                        <Text key={j}>{Exercise_name}</Text>
                                                        </Left>
                                                        <Right>
                                                            <Text>{obj.count_per_set[j]}개</Text>
                                                          
                                                        </Right></React.Fragment>)
                                                })}
                                            </Body>
                                        </CardItem>
                                    </Card>
                                )
                            })}

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
    },

});
