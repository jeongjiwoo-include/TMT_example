import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class Challenge_ShowComponent extends Component{
    render(){
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../Image/bronze.png')} />
              <Body>
                <Text>챌린지</Text>
                <Text note>Sep 19, 2020</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Text>
                '스쿼트' 5000회를 달성하여 동메달을 땄습니다!
              </Text>
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