import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';




const data = [
    { id: '2', name: 'Alex Linderson', image: require('../../assets/bluepic.png'), sub: 'Life is beautiful 👌',},
    { id: '3', name: 'Ali Haider', image: require('../../assets/3.png'), sub: 'Be your own hero 💪', },
    { id: '4', name: 'Abraham ', image: require('../../assets/1.png'), sub: 'Keep working ✍', },
    { id: '5', name: 'Bristy Hoque', image: require('../../assets/2.png'), sub: 'Flowers are beautiful 🌸',  },
    { id: '6', name: 'Borino John', image: require('../../assets/4.png'), sub: 'Make yourself proud 😍',  },
    { id: '7', name: 'Sohail Ali', image: require('../../assets/5.png'), sub: 'Keep working ✍', },
    { id: '8', name: 'Shehri', image: require('../../assets/1.png'), sub: 'Life is beautiful 👌',  },
    { id: '9', name: 'Sammar', image: require('../../assets/3.png'), sub: 'Flowers are beautiful 🌸', },
    { id: '10', name: 'Sabila Sayma', image: require('../../assets/2.png'), sub: 'Make yourself proud 😍',},
];
const groupNamesByFirstLetter = (data) => {
    const groupedData = {};
  
    data.forEach((item) => {
      const firstLetter = item.name[0].toUpperCase();
      if (!groupedData[firstLetter]) {
        groupedData[firstLetter] = [];
      }
      groupedData[firstLetter].push(item);
    });
  
    return Object.keys(groupedData)
      .sort()
      .map((letter) => ({
        letter,
        data: groupedData[letter].sort((a, b) => a.name.localeCompare(b.name)),
      }));
  };
  
  const groupedData = groupNamesByFirstLetter(data);




const Contacts = ({ navigation }) => {
    

    const renderItem = ({ item }) => (
        
                <Animatable.View animation="zoomIn"  style={styles.data}>
                    <Image source={item.image}
                        style={{ height: 52, width: 52, }} />
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlePress(item)}>
                        <View style={{ flexDirection: 'column', marginLeft: 15, height: 52, width: 150, }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000E08' }}>
                                {item.name}
                            </Text>
                            <View style={{ flexDirection:'row',fontSize: 12, fontWeight: '450', color: '#797C7B' }}>
                               
                                <Text style={{color:'#797C7B', fontSize:12, fontWeight:'450',}}>
                                    {item.sub}
                                </Text>
                            </View>
                        </View>
                        <View style={{top:15, marginLeft: 76, flexDirection: 'row', }}>
                           
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
           
    );
    const renderGroup = ({ item }) => (
        <Animatable.View animation="zoomIn" duration={2000}>
            <Text style={styles.letterHeader}>{item.letter}</Text>
            <FlatList
                data={item.data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </Animatable.View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.Homecontainer}>
                    <TouchableOpacity style={styles.search}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.head}>Contacts</Text>
                    <TouchableOpacity style={styles.search}>
                    <MaterialIcons name="person-add-alt" size={24} color="white" />
                     </TouchableOpacity>
                </View>
                
                <View  style={styles.scrollcontainer} contentContainerStyle={styles.scrollContent} >
                    <Text style={{fontSize:16, fontWeight:'600', color:'#000E08',marginBottom:20,}}>
                        My contacts
                    </Text>
                    
                        <FlatList
                        data={groupedData}
                        renderItem={renderGroup}
                        keyExtractor={(item) => item.letter}
                    />
                </View>
                <View style={styles.bottomcontainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Home')}>
                            <AntDesign name="message1" size={24} color="#797C7B" />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Calls')}>
                            <Feather name="phone-call" size={24} color="#797C7B" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Contacts')}>
                            <MaterialIcons name="contacts" size={24} color="#24786D" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Settings')}>
                            <AntDesign name="setting" size={24} color="#797C7B" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', zIndex: 10, }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                            <Text style={{
                            color: '#797C7B',
                            fontSize: 16,
                            fontWeight: '500',
                            marginLeft: 10,
                        }}>Messages</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Calls')}>
                        <Text style={{
                            color: '#797C7B',
                            fontSize: 16,
                            marginHorizontal: 42,
                            fontWeight: '500',
                        }}>Calls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Contacts')}>
                        <Text style={{
                            color: '#24786D',
                            fontSize: 16,
                            fontWeight: '500',
                        }}>contacts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <Text style={{
                            color: '#797C7B',
                            fontSize: 16,
                            marginLeft: 35,
                            fontWeight: '500',
                        }}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000E08',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Homecontainer: {
        flexDirection: 'row',
        width: 327,
        height: 44,
        top:80,
        position:'absolute',
    },
    search: {
        borderWidth: 1,
        borderColor: '#363F3B',
        height: 44,
        width: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },
    search1: {
        borderWidth: 1,
        borderColor: '#363F3B',
        height: 44,
        width: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    head: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        alignSelf: 'center',
        marginHorizontal: 80,
    },
    image: {
        height: 44,
        width: 44,
        alignSelf: 'flex-end',
    },
    bottomcontainer: {
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 90,
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    bottombutton: {
        marginHorizontal: 35,
    },
    bottom: {
        color: '#24786D',
        fontSize: 16,
        fontWeight: '500',
    },
    scrollcontainer: {
        height: 560,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        marginTop: 120,
        paddingLeft: 20,
        paddingTop: 30,
        bottom: 30,
    },
    data: {
        flexDirection: 'row',
        height: 74,
        width: '90%',
    },
    scrollContent: {
        alignItems: 'center',
        flexGrow: 1,
        paddingTop: 50,
        width: '100%',
    },
    letterHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        // marginLeft: 10,
    },
});

export default Contacts;
