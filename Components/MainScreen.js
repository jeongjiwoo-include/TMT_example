import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { Icon } from 'native-base';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import HomeTab from './AppTabNavigator/1_HomeTab'
import ActivityTab from './AppTabNavigator/2_ActivityTab'
import ExerciseTab from './AppTabNavigator/3_ExerciseTab'
import ChallengeTab from './AppTabNavigator/4_ChallengeTab'
import AlertTab from './AppTabNavigator/5_AlertTab'

const AppTabNavigator = createMaterialTopTabNavigator({
  홈: {screen:HomeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
          <Icon name='home' style={{color: tintColor, fontSize: 25, }} />
      )
   }},
  활동: {screen:ActivityTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-pulse' style={{color: tintColor, fontSize: 25, }} />
    ) //name = 'ios-stats'/'ios-clipboard'
    }},
  운동하기: {screen:ExerciseTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-scan-sharp' style={{color: tintColor, fontSize: 25, }} />
    ) // 'ios-walk'
    }},
  챌린지: {screen:ChallengeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-medal' style={{color: tintColor, fontSize: 25, }} />
    )
    }},
  알림: {screen:AlertTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-notifications' style={{color: tintColor, fontSize: 25, }} />
    )
    }}
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions:{
      style: {
        ...Platform.select({
          android:{
            backgroundColor:'white',
          }
        })
      },
      tabStyle:{height:52},
      pressColor : '#e3f6f5',
      activeTintColor: '#272343',
      inactiveTintColor: '#bae8e8',
      upperCaseLabel:false,
      showLabel:false,
      showIcon:true,
    }
});

const AppTabCotainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {
   
    render() {
    return (
        <AppTabCotainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});