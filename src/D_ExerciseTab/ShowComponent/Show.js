import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
 


export default class ShowComponent extends Component{
    render(){
      return (
        <Card>
          <CardItem button onPress={()=> alert('운동1')}>
              <Left>
                <Text>스쿼트</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
                </Right>
          </CardItem>
          <CardItem button onPress={()=> alert('운동2')}>
              <Left>
                <Text>프론트런지</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
                </Right>
          </CardItem>
          <CardItem button onPress={()=> alert('운동3')}>
              <Left>
                <Text>사이드런지</Text>
                </Left>
                <Right>
                    <Icon name="arrow-forward"/>
                </Right>
          </CardItem>
          <CardItem button onPress={()=> alert('운동4')}>
              <Left>
                <Text>플랭크</Text>
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