import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Make from './ShowComponent/MakeChallenge'
import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import ProgressBar from 'react-native-progress/Bar';

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>챌린지</Text>
            </View>
        )
    }
}


export default class ChallengeTab extends Component {
    challengeList = []
    challengeData = {
        cID: 0,
        name: '',
        description: '',
        calorie_consume: 0,
        start_datetime: '',
        finish_datetime: '',
        perform_day: '', //요일
        eID: [],
        target_total_count: [],
        //state = 1, //1 => goingon //2 => success // 3 => failed

    }
    addData =(data)=>{
        data.map((obj)=>{  
            this.challengeData.cID = obj.challenge.cID;
            this.challengeData.name = obj.challenge.name;
            this.challengeData.description = obj.challenge.description;
            this.challengeData.calorie_consume=obj.challenge.calorie_consume;
            this.challengeData.start_datetime=obj.challenge.start_datetime;
            this.challengeData.finish_datetime=obj.challenge.finish_datetime;
            this.challengeData.eID = obj.challenge.eID;
            this.challengeData.target_total_count=obj.challenge.target_total_count;
            this.challengeList.push(this.challengeData);
        }
            )
    }
    daysDiff=(start, finish)=>{
        return Math.round((finish-start)/(1000*60*60*24));
    }
    componentDidMount(){
    }

    render() {
        const goingon = DB.data.goingon;
        const success = DB.data.success;
        const failed = DB.data.failed;
        this.addData(goingon);
        console.log('challenge list : ', goingon);
        this.addData(success);
        this.addData(failed);
        console.log('challenge list : ', this.challengeList);

        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}> 
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('내정보')}>
                            <Image
                            style={styles.button}
                            source={require('../Image/default_profile.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                            <Card>
                                <CardItem button onPress={()=>this.props.navigation.navigate('E1_MakeChallenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>챌린지 만들기</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                            </Card>
                            <ScrollView style={styles.main}>
                                {this.challengeList.map((obj,i)=>{
                                    var finish_date = new Date(obj.finish_datetime);
                                    var start_date = new Date(obj.start_datetime);
                                    var today_date = new Date();
                                    var total_date = this.daysDiff(start_date,finish_date);
                                    var now_date = this.daysDiff(start_date,today_date);
                                    var progressRate = now_date/total_date;
                                    console.log(`finish : ${finish_date} / start : ${start_date} / today : ${today_date}`);
                                    return(
                                    <Card key={i}>
                                    <CardItem button onPress={()=> this.props.navigation.navigate('E2_ShowChallenge',{data : obj})} style={{height:100}}>
                                        <Left>
                                            <Text style={{fontSize:20}}>{obj.name}</Text>
                                            </Left>
                                            <Right>
                                                <Icon name="arrow-forward"/>
                                            </Right>
                                    </CardItem>
                                    <CardItem style={{marginLeft:20,marginRight:20}}>
                                        <Left>
                                        <Text>{now_date} / {total_date} Days</Text>
                                        </Left>
                                        <Right>
                                        <Text>순위 : </Text>    
                                        </Right>                                
                                    </CardItem>
                                    <CardItem style={{justifyContent:'center', borderBottomColor:'black', borderBottomWidth:0.5}}>
                                        <ProgressBar color={'#272343'} unfilledColor={'#bae8e8'} borderWidth={0} progress={progressRate} width={300}/>
                                    </CardItem>
                                </Card>
                                );})}
                            
                        </ScrollView>                  
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