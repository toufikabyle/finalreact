import React, {useEffect, useState} from 'react';
import {Image,Modal,Dimensions,AppRegistry, StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Button, View,ImageBackground, TouchableOpacity,contentContainerStyle,Linking,Pressable} from 'react-native';
import { ScaledSheet } from "react-native-size-matters";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { BackgroundImage } from 'react-native-elements/dist/config';

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
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const App = () => {
  
  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");
  const [modalVisible, setModalVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [Height_Layout, setHeight_Layout] = useState();
  const [Width_Layout, setWidth_Layout] = useState();

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode, playing)
    setPlaying(false)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
  
  
  
 
 return (
    
      
      
      
         
        
  <SafeAreaView style={mode === "portrait" ? styles.container : styles.containers}onLayout={(event) => {
    setHeight_Layout(event.nativeEvent.layout.height),
    setWidth_Layout(event.nativeEvent.layout.width)}}> 
    
      <ScrollView style={styles.text} >
      <View style={styles.imagecontainer1}>
        <Image source={require('./test.png')}style={styles.image1} />
      </View>
     <View style={styles.textcen}>
        
        
        <Text style={styles.heading2}>Procedure Category</Text>
          <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          
          </Text>
          <Modal
    animationType="fade"
    transparent={false}
    visible={modalVisible}
    supportedOrientations={['landscape']} 
    onRequestClose={() => {
      Alert.alert("Turned off.");
      setModalVisible(!modalVisible);
    }}
  >
    
    <View style={styles.centeredView}>
        <View style={styles.video2}>
    <WebView
    source={{html: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dRM3Cy5CQI4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}}

    
 />
    </View>

        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Turn Off video</Text>
        </Pressable>
    
    </View>
  </Modal>

          <View style={styles.imagecontainer}>
        <BackgroundImage source={image1} style={styles.image}>
        <Icon name="youtube"  color="red" size={80} onPress={() => setModalVisible(true)} />
        </BackgroundImage>
      </View>
          

          <View style={styles.imagecontainer}>
        <Image source={image2} style={styles.image}>
          
        </Image>
      </View>
          
     

          <View style={styles.imagecontainer}>
        <Image source={image3} style={styles.image}>
          
        </Image>
      </View>
          
     

          <View style={styles.imagecontainer}>
        <Image source={image4} style={styles.image}>
          
        </Image>
      </View>
          
      


          
          
          
          </View>
          <View style={styles.footer}>
          <Text style={styles.headingf}>About Myself</Text>
          <Text style={styles.textf}>
          nappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach.
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
         alignItems: "center", 
         justifyContent: 'center',
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
          color: "#2874A6",
          fontWeight: "700",
          fontSize: "14@s",
          marginLeft: "16@s",
          marginTop: "16@s",
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
        footer: {
          backgroundColor:"#EDF0F6",
          //fontSize: "11@s",
          margin:"10@s",
        },
        textf: {
          color: "black",
          fontSize: "12@s",
          marginLeft: "16@s",
          marginBottom:"26@s",
          
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
        buttonClose: {
          backgroundColor: "red",
          marginTop:"3%",
        },
        button: {
          borderRadius: 5,
          padding: 10,
          elevation: 2,
          marginBottom:20,
        },
         centeredView: {
        flexDirection: "column",
        flex: 1,
        width: "100%",
        backgroundColor: "white",
        marginTop: 0,
        alignItems: "center",
        height: "100%",
      },
    
      video2: {
        flex:1,
        width: "100%",
        backgroundColor: "black",

      },
   });
   AppRegistry.registerComponent('VerticalScrollView', () => VerticalScrollView);
export default App;