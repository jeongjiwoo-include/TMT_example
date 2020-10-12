import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class ShowComponent extends Component{
    render(){
      return (
        <Card>
          <CardItem button onPress={()=> alert('30일스쿼트챌린지')}>
              <Left>
                <Text>30일 스쿼트 챌린지</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
                </Right>
          </CardItem>
          <CardItem button onPress={()=> alert('매일하는 7분 운동')}>
              <Left>
                <Text>매일하는 7분 운동</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
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