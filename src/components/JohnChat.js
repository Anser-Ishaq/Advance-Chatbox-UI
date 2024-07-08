import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Johnchat({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topcontainer}>
                <TouchableOpacity style={{ left: 20, justifyContent: 'center', }} onPress={()=>navigation.navigate('Home')}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Image source={require('../../assets/1.png')} style={styles.image} />
                <View style={{ flexDirection: 'column', left: 50, justifyContent: 'center', }}>
                    <Text style={styles.head}>John Abraham</Text>
                    <Text style={styles.active}>Active Now</Text>
                </View>
                <TouchableOpacity style={{ left: 112, alignSelf: 'center', justifyContent: 'center' }}>
                    <Feather name="phone" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ left: 130, alignSelf: 'center', justifyContent: 'center' }}>
                    <Feather name="video" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.midcontainer}>
                <Text style={styles.today}>
                    Today
                </Text>
                <View style={{ height: 54, width: 141, flexDirection: 'column', alignSelf: 'flex-end', right: 15, }}>
                    <Text style={styles.green}>
                        Hello! Jhon abraham
                    </Text>
                    <Text style={styles.time}>
                        09:25 AM
                    </Text>
                </View>
                <View style={styles.white}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../../assets/1.png')}
                            style={{ height: 40, width: 40, borderRadius: 20, }} />
                        <Text style={styles.name}>
                            John Abraham
                        </Text>
                    </View>
                    <Text style={styles.send}>
                        Hello ! Nazrul How are you?
                    </Text>
                    <Text style={styles.time}>
                        09:25 AM
                    </Text>
                </View>
                <View style={{ height: 54, width: 141, marginTop: 20, flexDirection: 'column', alignSelf: 'flex-end', right: 15, }}>
                    <Text style={styles.green}>
                        You did your job well!
                    </Text>
                    <Text style={styles.time}>
                        09:25 AM
                    </Text>
                </View>
                <View style={styles.white1}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image source={require('../../assets/1.png')}
                            style={{ height: 40, width: 40, borderRadius: 20, }} />
                        <Text style={styles.name}>
                            John Abraham
                        </Text>
                    </View>
                    <Text style={styles.send}>
                        Have a great working week!!
                    </Text>
                    <Text style={styles.send1}>
                        Hope you like it
                    </Text>
                    <Text style={styles.time}>
                        09:25 AM
                    </Text>
                </View>

            </ScrollView>


            <View style={styles.bottomcontainer}>
                <TouchableOpacity style={{ left: 24, }}>
                    <Feather name="paperclip" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder='Write Your Message'
                    placeholderTextColor={'#797C7B'}

                />
                <TouchableOpacity>
                    <Ionicons name="documents-outline" size={24} color="#797C7B" />
                </TouchableOpacity>
                <TouchableOpacity style={{ left: 30, }}>
                    <Feather name="camera" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ left: 50, }}>
                    <SimpleLineIcons name="microphone" size={24} color="black" />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    topcontainer: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
    },
    image: {
        height: 44,
        width: 44,
        borderRadius: 22,
        left: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    head: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000E08',
    },
    active: {
        fontSize: 12,
        fontWeight: '450',
        color: '#797C7B',
    },
    bottomcontainer: {
        flexDirection: 'row',
        height: 90,
        width: '100%',
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#F3F6F6',
        height: 40,
        width: 226,
        left: 32,
        paddingLeft: 10,
        borderRadius: 10,
    },
    midcontainer: {
        flexDirection: 'column',
        width: '100%',

    },
    today: {
        backgroundColor: '#F8FBFA',
        height: 22,
        width: 55,
        fontSize: 12,
        fontWeight: '500',
        borderRadius: 6,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
    green: {
        backgroundColor: '#20A090',
        height: 36,
        width: 141,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        color: '#FFFFFF',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        fontWeight: '450',
        marginBottom:10,
    },
    time: {
        color: '#797C7B',
        fontSize: 12,
        alignSelf: 'flex-end',
        // top: 5,
        fontWeight: '450',
    },
    white: {
        height: 130,
        width: 247,
        left: 24,
        top: 30,
        flexDirection: 'column',
    },
    name: {
        fontSize: 14,
        fontWeight: '500',
        left: 10,
        top: 5,

    },
    send: {
        backgroundColor: '#F2F7FB',
        height: 36,
        width: 180,
        alignSelf: 'flex-end',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom:10,
        textAlign:'center',
        textAlignVertical:'center',
    },
    send1: {
        backgroundColor: '#F2F7FB',
        height: 36,
        width: 112,
        left:68,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom:10,
        textAlign:'center',
        textAlignVertical:'center',
    },
    white1: {
        height: 190,
        width: 247,
        left: 24,
        top: 30,
        flexDirection: 'column',
    },

});
