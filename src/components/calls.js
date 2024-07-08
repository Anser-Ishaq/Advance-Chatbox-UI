import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';




const data = [
    { id: '2', name: 'Alex Linderson', image: require('../../assets/bluepic.png'),pic:require('../../assets/green.png'), sub: 'Today, 09:30 AM',call: require('../../assets/call.png'), video : require('../../assets/video.png')},
    { id: '3', name: 'Team Align', image: require('../../assets/3.png'),pic:require('../../assets/green.png'), sub: 'Today, 07:30 AM', call: require('../../assets/call.png'), video : require('../../assets/video.png')},
    { id: '4', name: 'John Abraham', image: require('../../assets/1.png'),pic:require('../../assets/red.png'), sub: 'Yesterday, 07:35 AM', call: require('../../assets/call.png'), video : require('../../assets/video.png') },
    { id: '5', name: 'Sabila Sayma', image: require('../../assets/2.png'),pic:require('../../assets/blue.png'), sub: 'Monday, 09:30 AM',call: require('../../assets/call.png'), video : require('../../assets/video.png')  },
    { id: '6', name: 'John Borino', image: require('../../assets/4.png'),pic:require('../../assets/red.png'), sub: '03/07/22, 09:35 AM',call: require('../../assets/call.png'), video : require('../../assets/video.png')  },
    { id: '7', name: 'Ali Haider', image: require('../../assets/5.png'),pic:require('../../assets/blue.png'), sub: 'Monday, 09:30 AM', call: require('../../assets/call.png'), video : require('../../assets/video.png')},
    { id: '8', name: 'Shehri', image: require('../../assets/1.png'),pic:require('../../assets/red.png'), sub: 'Today, 09:35 AM', call: require('../../assets/call.png'), video : require('../../assets/video.png') },
    { id: '9', name: 'Bilal', image: require('../../assets/3.png'),pic:require('../../assets/green.png'), sub: 'Monday, 09:35 AM',call: require('../../assets/call.png'), video : require('../../assets/video.png') },
    { id: '10', name: 'Izn', image: require('../../assets/5.png'),pic:require('../../assets/blue.png'), sub: 'Today, 09:35 AM',call: require('../../assets/call.png'), video : require('../../assets/video.png')},
];



const Calls = ({ navigation }) => {
    

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
                                <Image source={item.pic}
                                style={{marginRight:10, height:12, width:12,}}

                                />
                                <Text style={{color:'#797C7B', fontSize:12, fontWeight:'450',}}>
                                    {item.sub}
                                </Text>
                            </View>
                        </View>
                        <View style={{top:15, marginLeft: 76, flexDirection: 'row', }}>
                           <TouchableOpacity>
                           <Image source={item.call}
                           style={{height:18, width:18,}}
                           />
                           </TouchableOpacity>
                           <TouchableOpacity>
                           <Image source={item.video}
                           style={{height:16, width:22,left:20,}}
                           />
                           </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
           
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.Homecontainer}>
                    <TouchableOpacity style={styles.search}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.head}>Calls</Text>
                    <TouchableOpacity style={styles.search}>
                    <MaterialIcons name="add-ic-call" size={24} color="white" />
                                        </TouchableOpacity>
                </View>
                
                <View  style={styles.scrollcontainer} contentContainerStyle={styles.scrollContent} >
                    <Text style={{fontSize:16, fontWeight:'500', color:'#000E08',marginBottom:20,}}>
                        Recents
                    </Text>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.bottomcontainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Home')}>
                            <AntDesign name="message1" size={24} color="#797C7B" />
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Calls')}>
                            <Feather name="phone-call" size={24} color="#24786D" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Contacts')}>
                            <MaterialIcons name="contacts" size={24} color="#797C7B" />
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
                            color: '#24786D',
                            fontSize: 16,
                            marginHorizontal: 42,
                            fontWeight: '500',
                        }}>Calls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Contacts')}>
                        <Text style={{
                            color: '#797C7B',
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
        marginHorizontal: 90,
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
});

export default Calls;
