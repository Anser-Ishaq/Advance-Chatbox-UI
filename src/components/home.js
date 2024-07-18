
import React,{useState,useMemo,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { auth, database } from '../../firebase';
import { collection, doc, getDoc } from '@firebase/firestore';

const images = [
    { id: '2', url: require('../../assets/1.png'), name: 'Adil' },
    { id: '3', url: require('../../assets/2.png'), name: 'Marina' },
    { id: '4', url: require('../../assets/3.png'), name: 'Dean' },
    { id: '5', url: require('../../assets/4.png'), name: 'Max' },
    { id: '6', url: require('../../assets/5.png'), name: 'Kevin' }
];

const data = [
    { id: '2', name: 'Alex Linderson', image: require('../../assets/bluepic.png'), sub: 'How are you today?', time: '2 min ago', msg: '3' },
    { id: '3', name: 'Team Align', image: require('../../assets/3.png'), sub: 'How are you today?', time: '2 min ago', msg: '4' },
    { id: '4', name: 'John Abraham', image: require('../../assets/1.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '5', name: 'Sabila Sayma', image: require('../../assets/2.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '6', name: 'John Borino', image: require('../../assets/4.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '7', name: 'Ali Haider', image: require('../../assets/5.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '8', name: 'Shehri', image: require('../../assets/1.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '9', name: 'Bilal', image: require('../../assets/3.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
    { id: '10', name: 'Izn', image: require('../../assets/5.png'), sub: 'How are you today?', time: '2 min ago', msg: '' },
];

const rightSwipe = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ height: 36, width: 36, marginHorizontal: 20, borderRadius: 18, backgroundColor: '#000E08' }} >
                <Image source={require('../../assets/notifi.png')} style={{ height: 18, width: 14, alignSelf: 'center', top: 8, }} />
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 36, width: 36, marginRight: 15, borderRadius: 18, backgroundColor: '#EA3736' }} >
                <Image source={require('../../assets/delete.png')} style={{ height: 18, width: 14, alignSelf: 'center', top: 8, }} />
            </TouchableOpacity>
        </View>
    )
};

const Home = ({ navigation,route }) => {
    const [name, setName] = useState('');
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userCollection = collection(database, 'users');
                    const userDoc = doc(userCollection, user.uid);
                    const userData = await getDoc(userDoc);

                    if (userData.exists()) {
                        setName(userData.data().name);
                        setImageUri(userData.data().photoURL);
                    } else {
                        console.log('No such document!');
                    }
                } else {
                    console.log('No user found.');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const profilePicture = useMemo(() => (
        <Image source={imageUri ? { uri: imageUri } : require('../../assets/bluepic.png')} style={styles.image}/>
    ), [imageUri]);

    const profilePicture1 = useMemo(() => (
        <Image source={imageUri ? { uri: imageUri } : require('../../assets/bluepic.png')} style={styles.bluepic}/>
    ), [imageUri]);

    const handlePress = (item) => {
        navigation.navigate('Johnchat', { item });
    };

    const renderItem = ({ item, index }) => (
        <GestureHandlerRootView key={index}>
            <Swipeable renderRightActions={rightSwipe}>
                <Animatable.View animation="zoomIn" style={styles.data}>
                    <Image source={item.image}
                        style={{ height: 52, width: 52, }} />
                    <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => handlePress(item)}>
                        <View style={{ flexDirection: 'column', marginLeft: 15, height: 52, width: 150, }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000E08' }}>
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: 12, fontWeight: '450', color: '#797C7B' }}>
                                {item.sub}
                            </Text>
                        </View>
                        <View style={{ marginLeft: 76, flexDirection: 'column', }}>
                            <Text>
                                {item.time}
                            </Text>
                            {item.msg == '' ? null : <View
                                style={{ height: 21, top: 5, left: 20, width: 21, borderRadius: 10, backgroundColor: '#F04A4C', alignSelf: 'center', }}>
                                <Text style={{ alignSelf: 'center', color: 'white' }} >
                                    {item.msg}
                                </Text>
                            </View>}
                        </View>
                    </TouchableOpacity>
                </Animatable.View>
            </Swipeable>
        </GestureHandlerRootView>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.Homecontainer}>
                    <TouchableOpacity style={styles.search}>
                        <AntDesign name="search1" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.head}>Home</Text>
                    {profilePicture}
                </View>
                <View style={styles.listcontainer}>
                    <View style={{ flexDirection: 'column', }}>
                        <View>
                            {profilePicture1}
                            <TouchableOpacity style={{ top: 45, left: 45, height: 16, width: 16, position: 'absolute' }}>
                                <Image source={require('../../assets/plus.png')}
                                /></TouchableOpacity>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: 'white', alignSelf: 'center', top: 8, }}>My Story</Text>
                    </View>
                    <FlatList
                        data={images}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity>
                                    <Image source={item.url} style={styles.image11122} />
                                </TouchableOpacity>
                                <Text style={styles.nameText}>{item.name}</Text></View>
                        )}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.scrollcontainer} contentContainerStyle={styles.scrollContent} >
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.bottomcontainer}>
                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity style={styles.bottombutton}>
                            <AntDesign name="message1" size={24} color="#24786D" onPress={() => navigation.navigate('Home')}/>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.bottombutton} onPress={() => navigation.navigate('Calls')}>
                            <Feather name="phone-call" size={24} color="#797C7B" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={() => navigation.navigate('Contacts')}>
                            <MaterialIcons name="contacts" size={24} color="#797C7B" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottombutton} onPress={() => navigation.navigate('Settings')}>
                            <AntDesign name="setting" size={24} color="#797C7B" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', zIndex: 10, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Text style={{
                                color: '#24786D',
                                fontSize: 16,
                                fontWeight: '500',
                                marginLeft: 10,
                            }}>Messages</Text></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Calls')}>
                            <Text style={{
                                color: '#797C7B',
                                fontSize: 16,
                                marginHorizontal: 42,
                                fontWeight: '500',
                            }}>Calls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
                            <Text style={{
                                color: '#797C7B',
                                fontSize: 16,
                                fontWeight: '500',
                            }}>contacts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
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
        top: 0,
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
        borderRadius:22,
        alignSelf: 'flex-end',
    },
    listcontainer: {
        flexDirection: 'row',
        top: 30,
        width: '100%',
        height: 90,
    },
    image11122: {
        borderWidth: 1,
        height: 58,
        width: 58,
        borderColor: '#FFC746',
        borderRadius: 29,
        marginHorizontal: 10,
    },
    bluepic: {
        borderWidth: 1,
        height: 58,
        width: 58,
        borderColor: '#FFC746',
        borderRadius: 29,
        marginHorizontal: 8,
    },
    nameText: {
        fontSize: 14,
        fontWeight: '500',
        color: 'white',
        alignSelf: 'center',
        top: 10,
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
        height: 460,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'white',
        marginTop: 120,
        paddingLeft: 10,
        paddingTop: 30,
        bottom: 50,
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

export default Home;
