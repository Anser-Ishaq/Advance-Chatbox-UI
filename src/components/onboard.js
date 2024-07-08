import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';




export default function Onboardscreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.whitecontainer}>
                <Image source={require('../../assets/WhiteC.png')} style={styles.whiteC} />
                <Text style={styles.chatbox}>Chatbox</Text>
            </View>
            <View style={styles.colorimagecontainer}>
                <ImageBackground source={require('../../assets/color.png')} style={styles.colorimage}
                    resizeMode="stretch"
                />
            </View>
            <View style={styles.headcontainer}>
                <Animatable.Text animation={'slideInLeft'} style={styles.text}>
                     Connect friends</Animatable.Text>
                <Animatable.Text style={styles.text1} animation={'slideInRight'}>
                    easily & quickly</Animatable.Text>
            </View>
            <View style={{ position: 'absolute', height: 52, width: 284, top: 460, left: 45, }} animation="zoomIn">
                <Animatable.Text style={{ fontSize: 16, fontWeight: '400', color: '#B9C1BE' }} animation="zoomIn">
                    Our chat app is the perfect way to stay connected with friends and family.
                </Animatable.Text>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 550, alignItems: 'center', }}>
                <View style={styles.facebook}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/facebook.png')} style={styles.facebookimage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.google}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/google.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.apple}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/apple.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 630, }} >
                <View
                    style={{ color: '#CDD1D0', width: 132, borderBottomWidth: 1, opacity: 0.4, borderBottomColor: '#CDD1D0', bottom: 8, }}>

                </View>
                <Text
                    style={{ fontSize: 14, fontWeight: '450', color: '#D6E4E0', marginHorizontal: 20, }}>
                    OR</Text>
                <View
                    style={{ color: '#CDD1D0', width: 132, borderBottomWidth: 1, opacity: 0.4, borderBottomColor: '#CDD1D0', bottom: 8, }}>

                </View>

            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Signup')}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#000E08' }}> Sign up with an mail</Text>
            </TouchableOpacity>
            <View style={styles.last}>
                <Text style={{ fontSize: 14, fontWeight: '450', color: '#B9C1BE' }}>Existing account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                    <Text style={{ fontSize: 14, fontWeight: '500', color: 'white' }}> Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        height: 812,
        width: 400,
        justifyContent: 'center',
    },
    colorimagecontainer: {
        paddingTop: 70,
        height: 515,
        width: 375,
        marginBottom: 400,
        // transform: [{ rotate: '134deg' }],
    },
    colorimage: {
        height: 515,
        width: 375,
        // transform: [{ rotate: '134deg' }],
        // marginBottom:400,
        // marginLeft:50,
        opacity: 0.8
    },
    whiteC: {
        width: 15,
        height: 18,
    },
    whitecontainer: {
        position: 'absolute',
        top: 55,
        zIndex: 20,
        height: 19,
        width: 77,
        flexDirection: 'row',
    },
    chatbox: {
        fontSize: 14,
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: 10,
    },
    headcontainer: {
        left: 45,
        height: 338,
        width: 312,
        position: 'absolute',
        top: 110,

        // justifyContent:'center',
        // alignItems:'center',
    },
    text: {
        color: 'white',
        fontSize: 68,
        fontWeight: '400',

    },
    text1: {
        position: 'absolute',
        marginTop: 160,
        color: 'white',
        fontSize: 68,
        fontWeight: '700',
    },
    facebook: {
        // backgroundColor: 'red',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#A8B0AF'

    },
    google: {
        // backgroundColor: 'green',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 20,
        borderColor: '#A8B0AF'
    },
    apple: {
        // backgroundColor: 'white',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#A8B0AF'
    },
    image: {
        height: 40,
        width: 30,
        left: 8,
        top: 3,
    },
    facebookimage: {
        height: 30,
        width: 30,
        left: 9,
        top: 8,
    },
    button: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 680,
        width: 327,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    last: {
        flexDirection: 'row',
        top: 770,
        position: 'absolute',
    },

});
