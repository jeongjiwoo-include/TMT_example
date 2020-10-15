import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class ShowComponent extends Component{
    render(){
      return (
        <Card>
          <CardItem button onPress={()=> this.props.navigation.navigate('C1_ActivityResult')}>
              <Left>
                <Text>날짜</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
                </Right>
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