import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Content, Icon } from 'native-base';

class CircleButton extends Component{
    render(){
        return(
            <TouchableOpacity>
            <Image
              style={styles.button}
              source={require('../../Image/default_profile.png')}
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
                <Text style={{fontSize:35, color:'black'}}>풀업</Text>
            </View>
        )
    }
}



class MainCom extends Component{
    render(){
        return(
            <ScrollView style={styles.main}>
                <Text>PullUp Page</Text>
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


export default class D0_2_PullUp extends Component {
    constructor(props){
        super(props);
        this.state={
            count_per_set: 0,
            uID:0,
            eID:2,
            name:'',
            calorie_consume:6, // 1개당 6kcal
            perform_datetime : '',

        }
    }

    componentDidMount(){
        const Data = this.props.navigation.getParam('data');
        function getTimeStamp() {
            var d = new Date();
            var s =
                leadingZeros(d.getFullYear(), 4) + '-' +
                leadingZeros(d.getMonth() + 1, 2) + '-' +
                leadingZeros(d.getDate(), 2)+ ' ' +
                leadingZeros(d.getHours(),2)+':'+
                leadingZeros(d.getMinutes(),2)+':'+
                leadingZeros(d.getSeconds(),2);
        
            return s;
        }
        
        function leadingZeros(n, digits) {
        
            var zero = '';
            n = n.toString();
        
            if (n.length < digits) {
                for (var i = 0; i < digits - n.length; i++)
                    zero += '0';
            }
            return zero + n;
        }
        var now = getTimeStamp();

        this.setState({
            uID:DB.data.users.uID,
            perform_datetime:now,
            name:DB.data.exercises[1].name,
        });
    }
    render() {
        return (
            <View style={styles.rootcontainer}>
                <View style={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('내정보')}>
                            <Image
                            style={styles.button}
                            source={require('../../Image/default_profile.png')}
                        />
                        </TouchableOpacity>
                    </View>
                    <Title/>
                    <Content>
                        <MainCom/>
                    </Content>
                </View>
                <View style={{height:50, alignItems:'center', marginBottom:10}}>
                        <TouchableOpacity 
                                style={{width: 370,
                                height: 50,
                                borderRadius: 10,
                                backgroundColor:'#272343',
                                justifyContent:'center',  
                                alignItems:'flex-end', 
                                marginBottom:20,
                                alignItems:'center'}} 
                                onPress={()=> {
                                    this.setState({count_per_set:15}); 
                                    setTimeout(() => {
                                        console.log(this.state);
                                        this.props.navigation.navigate('D1_ExerciseResult',{res:this.state});
                                    }, 2000);}
                                    }>
                                <Text style={{color: 'white', fontSize:19, fontStyle:'normal',}}>완료</Text>
                        </TouchableOpacity>
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