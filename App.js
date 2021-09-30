import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text,  View } from 'react-native';
import Profile1 from './assets/profile1.JPG'; 

export default function App() {
  return (
    <View style={styles.container}>
      
     
      <View style={styles.blue}>
        <Text   style={{color: '#888', fontSize: 18}}>Home</Text>
        <Text style={{color: '#888', fontSize: 18}}>About</Text>
        <Text style={{color: '#888', fontSize: 18}}>contact</Text>
        
      </View>
      <View style={styles.red}>
        <Text style={{ fontSize: 36}}>Hiwot Beshe</Text>
        <Image source={Profile1} style={{ width: 50, height: 50 }} /> 
        
      </View>
      <View style={styles.black}>
        <Text  style={{color: 'gray', fontSize: 18}}>Hiwot</Text>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'',
    backgroundColor: '#fff',
    
    
  },
  blue: {
    flex: 1,
    flexDirection:'row',
    width:'100%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    alignContent:'space-between',
    justifyContent: "space-evenly",
    
   
    
  },
  red: {
    flex: 5,
    backgroundColor: 'darkblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  black: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontStyle:'italic',
  
   
  },
 

});
