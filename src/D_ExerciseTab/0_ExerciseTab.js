import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Content, Icon } from 'native-base';


class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>운동</Text>
            </View>
        )
    }
}


export default class ExerciseTab extends Component {
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
                    <CardItem button onPress={()=>{console.log(DB.data.exercises[0]); this.props.navigation.navigate('D0_1_Squat',{data:DB});}} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>스쿼트</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> {console.log(DB.data.exercises[1]);this.props.navigation.navigate('D0_2_PullUp',{data:DB});}} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>풀업</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                    </CardItem>
                    <CardItem button onPress={()=> {console.log(DB.data.exercises[2]);this.props.navigation.navigate('D0_3_SideLunge',{data:DB});}} style={{height:100}}>
                        <Left>
                            <Text style={{fontSize:20}}>사이드런지</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
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