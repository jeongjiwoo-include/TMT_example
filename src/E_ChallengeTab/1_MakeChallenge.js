import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Make from './ShowComponent/MakeChallenge'
import Show from './ShowComponent/Show'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon, Content, Form, Input, Item, Label } from 'native-base';

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
                <Text style={{fontSize:35, color:'black'}}>챌린지 만들기</Text>
            </View>
        )
    }
}


class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Card>
                    <CardItem button onPress={()=> alert('make challenge')}>
                        <Left>
                            <Text>이름 설정</Text>
                            </Left>
                            <Right>
                            </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={()=> alert('make challenge')}>
                        <Left>
                            <Text>운동 선택</Text>
                            </Left>
                            <Right>
                                <Icon name="add-circle-outline"/>
                            </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={()=> alert('make challenge')}>
                        <Left>
                            <Text>기간 설정</Text>
                            </Left>
                            <Right>
                                <Icon name="add-circle-outline"/>
                            </Right>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button onPress={()=> alert('make challenge')}>
                        <Left>
                            <Text>친구 추가</Text>
                            </Left>
                            <Right>
                                <Icon name="add-circle-outline"/>
                            </Right>
                    </CardItem>
                </Card>
                <Button>
                    <Text>저장  </Text>
                </Button>
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
    state ={
        c_name:'',
        c_exercise:null,
        c_due:null,
        c_friend:null,
    }


    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('내정보')}>
                            <Image
                            style={styles.button}
                            source={require('../Image/example.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                        <View style={styles.main}>
                            <Card>
                                    <Form>
                                        <Item stackedLabel>
                                            <Label style={{fontSize:20}}>이름 설정</Label>
                                            <Input value={this.state.c_name} onChangeText={val=>this.setState({c_name:val})}/>
                                        </Item>
                                    </Form>
                                
                                <CardItem button onPress={()=> alert('make challenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>운동 선택</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                                <CardItem button onPress={()=> alert('make challenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>기간 설정</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                                <CardItem button onPress={()=> alert('make challenge')} style={{height:100}}>
                                    <Left>
                                        <Text style={{fontSize:20}}>친구 추가</Text>
                                        </Left>
                                        <Right>
                                            <Icon name="add-circle-outline"/>
                                        </Right>
                                </CardItem>
                            </Card>
                        </View>
                    </Content>
                    <View style={{height:50, alignItems:'flex-end', marginBottom:10}}>
                        <TouchableOpacity 
                                style={{width: 370,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor:'#272343',
                                justifyContent:'center',  
                                alignItems:'flex-end', 
                                marginBottom:20,
                                alignItems:'center'}} 
                                onPress={()=> alert(this.state.c_name)}>
                                    <Text style={{color: 'white', fontSize:19, fontStyle:'normal',}}>저장</Text>
                        </TouchableOpacity>
                    </View>
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
        borderColor: '#bae8e8'
    }
});