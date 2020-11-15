import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Make from './ShowComponent/MakeChallenge'
import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content } from 'native-base';
import ProgressBar from 'react-native-progress/Bar';

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
                <Text style={{fontSize:35, color:'black'}}>챌린지</Text>
            </View>
        )
    }
}


class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Card>
                    <CardItem button onPress={()=>{console.log(DB); this.props.navigation.navigate('E1_MakeChallenge');}}>
                        <Left>
                            <Text>챌린지 만들기</Text>
                            </Left>
                            <Right>
                                <Icon name="add-circle-outline"/>
                            </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={()=> alert('30일스쿼트챌린지')}>
                        <Left>
                            <Text>30일 스쿼트 챌린지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> alert('매일하는 7분 운동')}>
                        <Left>
                            <Text>매일하는 7분 운동</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <View style ={ styles.box}></View>
        )
    }
}


export default class ChallengeTab extends Component {
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
                                <CardItem button onPress={()=>this.props.navigation.navigate('E1_MakeChallenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>챌린지 만들기</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem button onPress={()=> this.props.navigation.navigate('E2_ShowChallenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>30일 스쿼트 챌린지</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                </CardItem>
                                <CardItem style={{marginLeft:20,marginRight:20}}>
                                    <Left>
                                    <Text>10 / 30 Days</Text>
                                    </Left>
                                    <Right>
                                    <Text>순위 : 100 / 5000</Text>    
                                    </Right>                                
                                </CardItem>
                                <CardItem style={{justifyContent:'center', borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <ProgressBar color={'#272343'} unfilledColor={'#bae8e8'} borderWidth={0} progress={0.3} width={300}/>
                                </CardItem>
                                <CardItem button onPress={()=> alert('매일하는 7분 운동')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>매일하는 7분 운동</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                </CardItem>
                                <CardItem style={{marginLeft:20,marginRight:20}}>
                                    <Left>
                                    <Text>70 / 100 Days</Text>
                                    </Left>
                                    <Right>
                                    <Text>순위 : 1 / 48</Text>    
                                    </Right>                                
                                </CardItem>
                                <CardItem style={{justifyContent:'center', borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <ProgressBar color={'#272343'} unfilledColor={'#bae8e8'} borderWidth={0} progress={0.7} width={300}/>
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