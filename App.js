import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';

import {
  
  createAppContainer,
  createSwitchNavigator
  
} from 'react-navigation';

import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';


import CustomSidebarMenu from './pages/CustomSidebarMenu';

global.currentScreenIndex = 0;


class NavigationDrawerStructure extends Component {
  
  toggleDrawer = () => {
    
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./image/drawer.png')}
            style={{ width: 22, height: 25, marginLeft: 10 }}
          />
          
        </TouchableOpacity>
        <Image
            source={require('./image/logo.png')}
            style={{ width: 36, height: 25,marginLeft:6}}
          />
        
      </View>
      
    );
  }
}




const FirstActivity_StackNavigator = createStackNavigator({
 
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospice',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
      backgroundColor: 'white',
        
      },
      headerTintColor: 'black',
      
    }),
  },
});


const Screen2_StackNavigator = createStackNavigator({
  
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospice',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({
  
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Hospice',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
    }),
  },
});


const DrawerNavigatorExample = createDrawerNavigator(
  {
    
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Hospice',
        
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Hospice',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Hospice',
      },
    },
  },
  {
   
    contentComponent: CustomSidebarMenu,
   
    drawerWidth: Dimensions.get('window').width - 200,
    drawerPosition: 'right',
    
  }
);

const BottomNav = createBottomTabNavigator({
  Entrantes: Screen3_StackNavigator,
});

const switchNavigator = createSwitchNavigator(
  {
    Bottom: BottomNav,
    Drawler:DrawerNavigatorExample
  },
  {
    initialRouteName: 'Bottom',
  }
);
export default createAppContainer(DrawerNavigatorExample);
