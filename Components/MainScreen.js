import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { Icon } from 'native-base';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomeTab from './1_HomeTab/1_HomeTab'
import ActivityTab from './2_ActivityTab/2_ActivityTab'
import ExerciseTab from './3_ExerciseTab/3_ExerciseTab'
import ChallengeTab from './4_ChallengeTab/4_ChallengeTab'
import AlertTab from './5_AlertTab/5_AlertTab'
import ProfileTab from './6_ProfileTab/6_ProfileTab'


const Profile_Navigator =createStackNavigator(
  {
    내정보:{screen:ProfileTab},
  },
  {
    headerMode:'none'
  },
)


const AppTabNavigator = createMaterialTopTabNavigator({
  홈: {screen:HomeTab,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
          <Icon name='home' style={{color: tintColor, fontSize: 25, }} />
      )
   }, ProfileTab},
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
    }},
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions:{
      style: {
        ...Platform.select({
          android:{
            backgroundColor:'#bae8e8',
          }
        })
      },
      tabStyle:{height:52},
      pressColor : '#e3f6f5',
      activeTintColor: '#e3f6f5',
      inactiveTintColor: '#272343',
      upperCaseLabel:false,
      showLabel:false,
      showIcon:true,
    }
});


const Navi = createSwitchNavigator({
  AppTabNavigator,
  Profile_Navigator,
},
{
  initialRouteName: 'AppTabNavigator',
},);

const AppTabCotainer = createAppContainer(Navi);

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