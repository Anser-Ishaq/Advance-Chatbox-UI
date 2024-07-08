import React, {useEffect} from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Splash({navigation}) {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.navigate('Onboard');
        }, 3000);
    
        
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/logoo.png')} style={styles.image}/>
        <Text style={styles.text}> ChatBox</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:69,
    width:57,
    alignSelf:'center',
  },
  text:{
    fontSize: 40,
    alignSelf:'center',
    fontWeight:'500',
  },
});
