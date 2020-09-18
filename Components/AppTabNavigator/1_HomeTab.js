import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Profile extends Component {
    render(){
        return(
            <View style={styles.profile}>

            </View>
        )
    }
}

class Title extends Component {
    render(){
        return(
            <View style={styles.title}>

            </View>
        )
    }
}

class MainCom extends Component{
    render(){
        return(
            <View style={styles.main}>

            </View>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <View></View>
        )
    }
}


export default class HomeTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Profile />
                <Title/>
                <MainCom/>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
        
    },
    profile: {
        height:106,
        backgroundColor: '#B0B0B0',
    },
    title :{
        height: 50,
        backgroundColor: '#81D4FA',
    },
    main :{
        height: 452,
        backgroundColor: '#FFD54F',
    },
});