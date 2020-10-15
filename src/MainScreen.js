import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import { Icon } from 'native-base';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import B0_HomeTab from './B_HomeTab/0_HomeTab'

import C0_ActivityTab from './C_ActivityTab/0_ActivityTab'
import C1_ActivityResult from './C_ActivityTab/1_AcitivityResult'

import D0_ExerciseTab from './D_ExerciseTab/0_ExerciseTab'
import D0_1_Squat from './D_ExerciseTab/D_Exercise/D0_1_Squat'
import D0_2_FrontLunge from './D_ExerciseTab/D_Exercise/D0_2_FrontLunge'
import D0_3_SideLunge from './D_ExerciseTab/D_Exercise/D0_3_SideLunge'
import D0_4_Plank from './D_ExerciseTab/D_Exercise/D0_4_Plank'

import E0_ChallengeTab from './E_ChallengeTab/0_ChallengeTab'
import E1_MakeChallenge from './E_ChallengeTab/1_MakeChallenge'

import F0_ProfileTab from './F_ProfileTab/0_ProfileTab'
import F1_ProfileEdit from './F_ProfileTab/1_ProfileEdit'

import A0_LoginTab from './A_Login/0_LoginTab'
import A1_SignupTab from './A_Login/1_SignupTab'


const A_Navigator = createStackNavigator(
  {
    A0_LoginTab,
    A1_SignupTab,
  },
  {
    headerMode: 'none',
  },
); 

const B_Navigator = createStackNavigator(
  {
    홈: {screen : B0_HomeTab},
  },
  {
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
          <Icon name='home' style={{color: tintColor, fontSize: 25, }} />
      )
   },
   headerMode: 'none',
  },
);

const C_Navigator = createStackNavigator(
  {
    활동: {screen: C0_ActivityTab},
    C1_ActivityResult,
  },
  {
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-pulse' style={{color: tintColor, fontSize: 25, }} />
    ) //name = 'ios-stats'/'ios-clipboard'
    },
    headerMode: 'none',
  },
);

const D_Navigator = createStackNavigator(
  {
    운동하기: {screen:D0_ExerciseTab},
    D0_1_Squat,
    D0_2_FrontLunge,
    D0_3_SideLunge,
    D0_4_Plank,
  },
  {
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-scan-sharp' style={{color: tintColor, fontSize: 25, }} />
    ) // 'ios-walk'
    },
    headerMode: 'none',
  },
);

const E_Navigator = createStackNavigator(
  {
    챌린지 : {screen:E0_ChallengeTab},
    E1_MakeChallenge,
  },
  {
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-medal' style={{color: tintColor, fontSize: 25, }} />
    )
    },
    headerMode: 'none',
  },
);

const F_Navigator = createStackNavigator(
  {
    내정보:{screen:F0_ProfileTab},
    F1_ProfileEdit,
  },
  {
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name='person' style={{color: tintColor, fontSize: 25, }} />
    ),
    },
    headerMode: 'none',
  },
);


const AppTabNavigator = createMaterialTopTabNavigator({
  홈: B_Navigator,
  활동: C_Navigator,
  운동하기: D_Navigator,
  챌린지: E_Navigator,
  내정보: F_Navigator,
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
  A_Navigator,
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