import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import Show from './ShowComponent/Show.js';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import * as Request from '../request';

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
                <CircleButton />
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>활동</Text>
            </View>
        )
    }
}



export default class ActivityTab extends Component {
    state={
        uID:0,
        eID:0,
        cID:0,
        perform_datetime:'',
        count_per_set:'',
    }
    /*result = {
        date : {
            day:'',
            eID:0,
            cID:0,
            count_per_set:'',
        }
            
    }*/
    result = new Array();

    componentDidMount(){
        console.log(DB);
        this.setState({uID:DB.data.users.uID})
        this.addDateTime(); 
        
    }
    addDateTime=()=>{
        var res = DB.data.exercise_records;
        console.log('ab',res)
        for(let i = 0; i < res.length;i++){
            var temp = res[i].perform_datetime.split('T');
            this.result.push(temp[0]);
            console.log(i, ': ', temp[0]);
        }
        console.log(this.result)
    }
 /*   datetimeFilter=(perform_datetime)=>{
        const res = DB.data.exercise_records.perform_datetime.filter(x => )
    }*/
    render() {
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
                        <ScrollView style={styles.main}>
                            <Card>
                                <CardItem button onPress={()=> {console.log(DB.data.exercise_records); this.props.navigation.navigate('C1_ActivityResult');}} style={{borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <Left>
                                        <Text>날짜</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록1
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록2
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록3
                                        </Text>
                                    </Body>
                                    </CardItem>
                                </Card>
                                <Card>
                                <CardItem button onPress={()=> {this.props.navigation.navigate('C1_ActivityResult')}} style={{borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <Left>
                                        <Text>날짜</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록1
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록2
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록3
                                        </Text>
                                    </Body>
                                    </CardItem>
                                </Card>
                                <Card>
                                <CardItem button onPress={()=> {this.props.navigation.navigate('C1_ActivityResult')}} style={{borderBottomColor:'black', borderBottomWidth:0.6}}>
                                    <Left>
                                        <Text>날짜</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록1
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록2
                                        </Text>
                                    </Body>
                                    </CardItem>
                                    <CardItem>
                                    <Body>
                                        <Text>
                                        운동기록3
                                        </Text>
                                    </Body>
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
