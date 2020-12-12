import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Challenge from './ShowComponent/Challenge_ShowComponent';
import Stats from './ShowComponent/Stats_ShowComponent';
import { Container, Header, Button, Icon, Fab, Content } from 'native-base';

global.DB = null;

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>홈</Text>
            </View>
        )
    }
}


export default class HomeTab extends Component {
   
    constructor(props){
        super(props)
        this.state={
            active: false
        };
    }
    FriendRequestList = [];
    FriendData = {
        friend_uID: -1,
    }
    componentDidMount() {
        const Data = this.props.navigation.getParam('data');
        DB = Data;
        const friendRequest = DB.data.request;
        friendRequest.map((obj) => {
            this.FriendData.friend_uID = obj.friend_uID;
            this.FriendRequestList.push(this.FriendData);
        }
        )
    }
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>{console.log(DB); this.props.navigation.navigate('내정보')}}>
                            <Image
                            style={styles.button}
                            source={require('../Image/default_profile.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                        <ScrollView style={styles.main}>
                            <Challenge/>
                            <Challenge/>
                            <Stats/>
                        </ScrollView>             
                    </Content>
                    <Fab 
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#bae8e8' }}
                        position="bottomRight"
                        onPress={() => this.props.navigation.navigate('알림',{data:this.FriendRequestList})}>
                        <Icon name="ios-alert"/>
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