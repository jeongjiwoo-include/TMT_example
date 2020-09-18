import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class Challenge_ShowCompnent extends Component{
    render(){
      return (
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../Image/example.png')} />
              <Body>
                <Text>운동기록</Text>
                <Text note>Sep 18, 2020</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Text>
                스쿼트:50회
            </Text>
          </CardItem>
          <CardItem>
            <Text>
                런지:50회
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