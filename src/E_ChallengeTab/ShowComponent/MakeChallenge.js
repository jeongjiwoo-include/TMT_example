import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class MakeChallenge extends Component{
    render(){
      return (
        <Card>
          <CardItem button onPress={()=> alert('make challenge')}>
              <Left>
                <Text>챌린지 만들기</Text>
                </Left>
                <Right>
                    <Icon name="add-circle-outline"/>
                </Right>
          </CardItem>
          </Card>
      );
    }
  }
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});