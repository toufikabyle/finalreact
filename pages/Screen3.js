import React, {useEffect, useState} from 'react';
import {Image,Dimensions,AppRegistry, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View,ImageBackground, TouchableOpacity} from 'react-native';
import { ScaledSheet } from "react-native-size-matters";

const image = {
  uri:
    "https://colorlib.com/wp/wp-content/uploads/sites/2/hospice-free-template.jpg",
};
const image1 = {
  uri:
    "https://preview.colorlib.com/theme/hospice/img/procedure/xp1.jpg.pagespeed.ic.H2iNAI0AS3.webp",
};
const image2 = {
  uri:
    "https://preview.colorlib.com/theme/hospice/img/procedure/xp2.jpg.pagespeed.ic.NTVDNHoEHM.webp",
};
const image3 = {
  uri:
    "https://preview.colorlib.com/theme/hospice/img/procedure/xp3.jpg.pagespeed.ic.QlSGq7ZihA.webp",
};const image4 = {
  uri:
    "https://preview.colorlib.com/theme/hospice/img/xabout-me.jpg.pagespeed.ic.xzSAvjrmiC.webp",
};

const App = () => {
  
  
  
  
 
 return (
    
      
      
      
         
        
  <SafeAreaView style={styles.container} >
    
      <ScrollView style={styles.text} >
      <View style={styles.imagecontainer1}>
        <Image source={require('./doc.png')}style={styles.image1} />
      </View>
     <View style={styles.textcen}>
        
        
        <Text style={styles.heading2}>Our Offered Services</Text>
          <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          
          </Text>

          <View style={styles.imagecontainer}>
          <Image source={require('./p1.png')}style={styles.image} />
      </View>
          

          <View style={styles.imagecontainer}>
          <Image source={require('./p2.png')}style={styles.image} />
      </View>
          
     

          <View style={styles.imagecontainer}>
          <Image source={require('./p3.png')}style={styles.image} />
      </View>
          
     

          <View style={styles.imagecontainer}>
          <Image source={require('./p4.png')}style={styles.image} />
      </View>
       
          
          
          
          </View>
          <View style={styles.footer}>  
      <Text style={styles.headingf}>Top Products</Text>
          <Text style={styles.textf}>
          Managed Website{"\n"}{"\n"}Manage Reputation{"\n"}{"\n"}Power Tools{"\n"}{"\n"}Marketing Service
          </Text>
          <Text style={styles.headingf}>Contact Us</Text>
          <Text style={styles.textf}>
          56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA
          </Text>
          <Text style={styles.headingf}>012-6532-568-9746{"\n"}012-6532-568-97468{"\n"}{"\n"}Newsletter</Text>
          <Text style={styles.textf}>
          You can trust us. we only send promo offers, not a single spam.{"\n"}{"\n"}
          </Text>
          </View>
      </ScrollView>
      
    </SafeAreaView>
     );
   }
   const styles = ScaledSheet.create({
      container: {
          flex: 1,
          alignItems: "center",
          //flexDirection: "column",
          //height: "100%",
          backgroundColor:"white",
         // paddingTop: StatusBar.currentHeight,
         
         
        },
        image: {
          width: "100%",
          //marginLeft: "5@s",
         // marginRight: "5@s",
          height: "100%",
         resizeMode: "stretch",
          
        },
        image1: {
          width: "100%",
          marginLeft: "5@s",
          marginRight: "5@s",
          height: "100%",
         resizeMode: "stretch",
          
          
          
        },
        
        imagecontainer: {
          alignItems: "center",
          width: "100%",
          height: 260,
          justifyContent: 'center',
          alignItems: "center",
          padding:"3%",
          
          

        },
        imagecontainer1: {
          alignItems: "center",
          width: "120%",
          height: 260,
          
        },
        
        text: {
          //flex: 1,
          width: "100%",
          },
          textcen: {
            //flex: 1,
            width: "100%",
            justifyContent: 'center',
            alignItems: "center",
            
            },
        links: {
          color: "#2874A6",
          fontWeight: "bold",
          marginRight: "9@s",
          marginLeft: "9@s",
          marginTop:"0@s",
          fontSize: "12@s",
          //textDecorationLine: 'underline',
          
          
        },
        
        
        toptext: {
          color: "black",
          fontWeight: "bold",
          marginLeft: "4%",
          marginTop: "0%",
          fontSize: "14@s",
          marginTop:"3%"
        },
        toptextb: {
          color: "#696969",
          fontWeight: "bold",
          marginLeft: "4%",
          marginTop: "0%",
          fontSize: "10@s",
        },
      
        heading2: {
          color: "#2874A6",
          fontWeight: "700",
          fontSize: "14@s",
          margin: "6@s",
        },
        headingf: {
          color: "white",
          fontWeight: "700",
          fontSize: "14@s",
          marginLeft: "6@s",
          marginTop: "14@s",
        },
        title: {
          color: "#01164A",
          fontWeight: "700",
          fontSize: "18@s",
          marginRight: "160@s",
          marginLeft: "0@s",
          marginTop:"0%",
        },
      
        heading: {
          color: "black",
          fontWeight: "bold",
      
          marginBottom: "5@s",
          fontSize: "14@s",
        },
        text2: {
          color: "black",
          fontSize: "12@s",
          margin:"6@s",
          textAlign:"center",
          
        },
        textf: {
          color: "#818387",
          fontSize: "11@s",
          margin:"6@s",
          
        },
        footer: {
          backgroundColor:"#25272B",
          //fontSize: "11@s",
          margin:"6@s",
          
        },
        linkcenter: {
        marginVertical: "4.5@s",
        height: "15%",
        justifyContent: "center",
        },
      
        linkcenter2: {
          height: "100%",
          justifyContent: "center",
          marginTop:0,
        },
        buttonClose: {
          backgroundColor: "#2196F3",
        },
        textStyle: {
          color: "white",
          fontWeight: "bold",
          textAlign: "center"
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2
        },
   });
   AppRegistry.registerComponent('VerticalScrollView', () => VerticalScrollView);
export default App;