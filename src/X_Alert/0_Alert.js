import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Icon, Fab, Content, Card, CardItem, Left, Right } from 'native-base';

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
                <Text style={{fontSize:35, color:'black'}}>알림</Text>
            </View>
        )
    }
}


class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
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


export default class Alert extends Component {
    constructor(props){
        super(props)
        this.state={
            active: false
        };
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
                        <ScrollView style={styles.main}>
                            <Card>
                                <CardItem style={{borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <Left>
                                        <Text>2020/10/17</Text>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Icon name="alert"/>
                                    </Left>
                                        <Text>챌린지 초대 메시지가 도착했습니다.</Text>
                                </CardItem>
                                <CardItem style={{justifyContent:'space-evenly'}}>
                                        <Button style={{width:100, height:25, justifyContent:'center', backgroundColor:'#bae8e8'}} onPress={()=>alert('수락')}>
                                            <Text style={{color:'white'}}>수락</Text>
                                        </Button>
                                        <Button style={{width:100, height:25, justifyContent:'center', backgroundColor:'#bae8e8'}} onPress={()=>alert('거절')}>
                                            <Text style={{color:'white'}}>거절</Text>
                                        </Button>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem style={{borderBottomColor:'black', borderBottomWidth:0.5}}>
                                    <Left>
                                        <Text>2020/10/10</Text>
                                    </Left>
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Icon name="alert"/>
                                    </Left>
                                        <Text>챌린지 초대 메시지가 도착했습니다.</Text>
                                </CardItem>
                                <CardItem style={{justifyContent:'space-evenly'}}>
                                        <Button style={{width:100, height:25, justifyContent:'center', backgroundColor:'#bae8e8'}} onPress={()=>alert('수락')}>
                                            <Text style={{color:'white'}}>수락</Text>
                                        </Button>
                                         <Button style={{width:100, height:25, justifyContent:'center', backgroundColor:'#bae8e8'}} onPress={()=>alert('거절')}>
                                            <Text style={{color:'white'}}>거절</Text>
                                        </Button>
                                </CardItem>
                            </Card>
                        </ScrollView>             
                    </Content>
                    <Fab 
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#bae8e8', marginBottom:52.5 }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('홈')}>
                        <Icon name="ios-arrow-back"/>
                    </Fab>
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