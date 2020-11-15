import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Left, Right, Card, CardItem } from 'native-base';


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
                <CircleButton/>
            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>
                <Text style={{fontSize:35, color:'black'}}>내 정보</Text>
            </View>
        )
    }
}



export default class ProfileTab extends Component {
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity>
                            <Image
                              style={styles.button}
                              source={require('../Image/default_profile.png')}
                            />
                         </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                    <View style={styles.main}>
          <Card>
          <CardItem button onPress={()=> {console.log(DB);this.props.navigation.navigate('F1_ProfileEdit',{data:DB})}} style={{height:50}}>
              <Left>
                <Text style={{fontSize:20}}>프로필 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> this.props.navigation.navigate('F2_FriendEdit')} style={{height:50}}>
              <Left>
                <Text style={{fontSize:20}}>친구 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> this.props.navigation.navigate('F3_Setting',{data:DB})} style={{height:50}}>
              <Left>
                <Text style={{fontSize:20}}>설정</Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
          </CardItem>
          <CardItem >
              <Left>
                <Text></Text>
                </Left>
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