import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Container, Content, Icon, Left, Right, Card, CardItem, Separator, ListItem, CheckBox, Body } from 'native-base';

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../Image/default_profile.png')}
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
                <Text style={{fontSize:35, color:'black'}}>친구 편집</Text>
            </View>
        )
    }
}


class MainCom extends Component{
    render(){
        return(
            <View style={styles.main}>
          <Card>
          <CardItem button onPress={()=> this.props.navigation.navigate('F1_EditProfile')}>
              <Left>
                <Text>프로필 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> alert('친구편집')}>
              <Left>
                <Text>친구 편집</Text>
                </Left>
          </CardItem>
          <CardItem button onPress={()=> alert('설정')}>
              <Left>
                <Text>설정</Text>
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

const friends = [
    '친구1',
    '친구2',
    '친구3',
    '친구4',
];

const recommedFriend = [
    '추천친구1',
    '추천친구2',
    '추천친구3',
];


export default class FriendEdit extends Component {
    constructor(props){
        super(props);
        this.state={
            friendCheck1:false,
            friendCheck2:false,
            friendCheck3:false,
            friendCheck4:false,
            //친구
            recFriendCheck1:false,
            recFriendCheck2:false,
            recFriendCheck3:false,
            recFriendCheck4:false,
        }
    };
    

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
                            <Separator bordered>
                                <Text style={{fontSize:20}}>친구 목록</Text>
                            </Separator>
                                <ListItem>
                                   <CheckBox checked={this.state.friendCheck1} color={"#272343"} onPress={()=>{this.setState({friendCheck1:!(this.state.friendCheck1)})}}/>
                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                        <Text >친구1</Text>
                                    </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.friendCheck2} color={"#272343"} onPress={()=>{this.setState({friendCheck2:!(this.state.friendCheck2)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>친구2</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.friendCheck3} color={"#272343"} onPress={()=>{this.setState({friendCheck3:!(this.state.friendCheck3)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>친구3</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.friendCheck4} color={"#272343"} onPress={()=>{this.setState({friendCheck4:!(this.state.friendCheck4)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>친구4</Text>
                                        </Body>
                                    </ListItem>
                                    <CardItem style={{justifyContent:'center', backgroundColor:'red'}} button onPress={()=>alert('checked가 true인 친구 삭제')}>
                                        <Text style={{color:'white'}}>삭제</Text>
                                    </CardItem>
                            <Separator bordered>
                                <Text style={{fontSize:20}}>추천 친구</Text>
                            </Separator>
                            <ListItem>
                                   <CheckBox checked={this.state.recFriendCheck1} color={"#272343"} onPress={()=>{this.setState({recFriendCheck1:!(this.state.recFriendCheck1)})}}/>
                                    <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                        <Text >추천 친구1</Text>
                                    </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.recFriendCheck2} color={"#272343"} onPress={()=>{this.setState({recFriendCheck2:!(this.state.recFriendCheck2)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>추천 친구2</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.recFriendCheck3} color={"#272343"} onPress={()=>{this.setState({recFriendCheck3:!(this.state.recFriendCheck3)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>추천 친구3</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <CheckBox checked={this.state.recFriendCheck4} color={"#272343"} onPress={()=>{this.setState({recFriendCheck4:!(this.state.recFriendCheck4)})}}/>
                                        <Body style={{alignItems:'flex-start', marginLeft:5}}>
                                            <Text>추천 친구4</Text>
                                        </Body>
                                </ListItem>
                                <CardItem style={{justifyContent:'center', backgroundColor:'green'}} button onPress={()=>alert('checked가 true인 친구 추가')}>
                                        <Text style={{color:'white'}}>추가</Text>
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