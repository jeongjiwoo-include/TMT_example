import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Left, Right } from 'native-base';

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

class SubTitle extends Component{
    render(){
        return(
            <View style={styles.subtitle}>
                <Text sytle={{fontSize:20, color:'black'}}></Text>
            </View>
        )
    }
}

class MainCom extends Component{
    render(){
        return(
            <View style={styles.main}>
                <TouchableOpacity style={{flex: 1,justifyContent: 'center'}}>
                    <Text>프로필 편집</Text>
                </TouchableOpacity>
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


export default class ProfileTab extends Component {
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity>
                            <Image
                              style={styles.button}
                              source={require('../Image/example.png')}
                            />
                         </TouchableOpacity>
                             <TouchableOpacity onPress={()=>this.props.navigation.navigate('홈')}>
                                 <Text>X</Text>
                             </TouchableOpacity>
                    </View>
                    <Title/>
                    <SubTitle/>
                    <Content>
                        <MainCom/>                    
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