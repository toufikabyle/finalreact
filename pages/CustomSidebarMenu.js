import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    
    this.proileImage =
      'http://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        //navOptionThumb: 'facebook',
        navOptionName: 'HOME',
        screenToNavigate: 'NavScreen1',
      },
      {
        //navOptionThumb: ' twitter ',
        navOptionName: 'DEPARTEMENTS',
        screenToNavigate: 'NavScreen2',
      },
      {
        //navOptionThumb: 'image',
        navOptionName: 'DOCTORS',
        screenToNavigate: 'NavScreen3',
      },
      {
        //navOptionThumb: 'build',
        navOptionName: 'PAGES',
        screenToNavigate: 'NavScreen3',
      },
      {
        //navOptionThumb: 'image',
        navOptionName: 'BLOG',
        screenToNavigate: 'NavScreen2',
      },
      {
       // navOptionThumb: 'image',
        navOptionName: 'CONTACT',
        screenToNavigate: 'NavScreen2',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{ uri: this.proileImage }}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'white',
            marginTop: 0,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#ffffff' : '#ffffff',
              }}>
              <View style={{ marginRight: 20, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={22} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  color: global.currentScreenIndex === key ? '#66ccff' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 0,
    marginTop:-60
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
