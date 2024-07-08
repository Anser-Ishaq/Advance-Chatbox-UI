import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const data = [
    { id: '2', name: 'Account', image: require('../../assets/account.png'), sub: 'Privacy, security, change number',},
    { id: '3', name: 'Chat', image: require('../../assets/msg.png'), sub: 'Chat history,theme,wallpapers', },
    { id: '4', name: 'Notifications ', image: require('../../assets/bell.png'), sub: 'Messages, group and others', },
    { id: '5', name: 'Help', image: require('../../assets/Help.png'), sub: 'Help center,contact us, privacy policy',  },
    { id: '6', name: 'Storage and data', image: require('../../assets/Data.png'), sub: 'Network usage, stogare usage',  },
    { id: '7', name: 'Invite a friend', image: require('../../assets/Users.png'), sub: '', },
   
];


const Settings = ({ navigation }) => {
    

    const renderItem = ({ item }) => (
        
                <Animatable.View animation="zoomIn"  style={styles.data}>
                    <View 
                    style={{height:44,width:44,borderRadius:22,backgroundColor:'#F2F8F7', justifyContent:'center',alignItems:'center',}}>
                    <Image source={item.image}
                        style={{ height: 21, width: 19, }} />
                        </View>
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlePress(item)}>
                        <View style={{ flexDirection: 'column', marginLeft: 15, height: 52, width: 200,top:5, }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000E08' }}>
                                {item.name}
                            </Text>
                            <View style={{ flexDirection:'row',fontSize: 12, fontWeight: '450', color: '#797C7B',width:200, }}>
                               
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


    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.Homecontainer}>
                    <TouchableOpacity style={styles.search} onPress={()=>navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.head}>Settings</Text>
  
                </View>
                
                <View  style={styles.scrollcontainer} contentContainerStyle={styles.scrollContent} >
                    <View style={{flexDirection:'row',marginBottom:50,}}>
                        <Image source={require('../../assets/bluepic.png')} 
                        style={{height:60,width:60,borderRadius:30,}}
                        />
                        <View style={{flexDirection:'column',marginLeft:15,alignSelf:'center',}}>
                            <Text style={{fontSize:20,fontWeight:'bold',}}>
                            Nazrul Islam
                            </Text>
                            <Text style={{fontSize:12,fontWeight:'450',color:'#797C7B'}}>
                            Never give up 💪
                            </Text>
                        </View>
                        <TouchableOpacity style={{alignSelf:'center',left:130,}}>
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="#24786D" />
                        </TouchableOpacity>
                    </View>
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
                            <Feather name="phone-call" size={24} color="#797C7B" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={()=>navigation.navigate('Contacts')}>
                            <MaterialIcons name="contacts" size={24} color="#797C7B" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton}>
                            <AntDesign name="setting" size={24} color="#24786D" />
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
                            color: '#797C7B',
                            fontSize: 16,
                            fontWeight: '500',
                        }}>contacts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                        <Text style={{
                            color: '#24786D',
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
        // borderWidth: 1,
        // borderColor: '#363F3B',
        height: 44,
        width: 44,
        // borderRadius: 22,
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

export default Settings;
