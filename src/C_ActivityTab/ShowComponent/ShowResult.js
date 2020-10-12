import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class ShowComponent extends Component{
    render(){
      return (
        <Card>
          <CardItem>
                <Text>날짜</Text>
          </CardItem>
          <CardItem>
              <Body>
                <Text>
                  운동기록1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  운동기록2
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  운동기록3
                </Text>
              </Body>
            </CardItem>
            <CardItem>
                <Image source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fko%2Ffree-png-zloat&psig=AOvVaw04PJfmTmJjTRKrcHAvL6nz&ust=1602562123162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjK3aSXruwCFQAAAAAdAAAAABAD'}} style={{height: 200, width: null, flex: 1}}/>
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