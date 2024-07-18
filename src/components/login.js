import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth, signInWithEmailAndPassword, } from '../../firebase';






export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const [emailerror, setemailerror] = useState('');
    const [passerror, setpasserror] = useState('');


    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            return userCredential;
        } catch (error) {
            console.log(error.message);
            setModalTitle('Error');
            setModalMessage('Invalid Email or Password');
            setModalVisible(true);
        }
        return null;
    }



    const handleLogin = async () => {
        // if (validateForm()) {
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const userCredential = await login(email, password);
            if (userCredential != null) {
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log(error);
        }

    };
    const closeModal = () => {
        setModalVisible(false);
    };
    const validateFields = () => {
        let isValid = true;

        if (!email) {
            setemailerror('Fill this field');
            isValid = false;
        } else if (!email.includes('@gmail.com')) {
            setemailerror('Email should contain "@gmail.com"');
            isValid = false;
        }

        if (!password) {
            setpasserror('Fill this field');
            isValid = false;
        } else if (password.length < 6) {
            setpasserror('Password must be at least 6 characters');
        }


        return isValid;
    };
    const handleInputChange = (setter, errorSetter, value) => {
        setter(value);
        if (errorSetter) {
            errorSetter('');
        }
    };

    const handleForgetPass = () => {
        navigation.navigate('Forgetpass')
    };
    const handleSubmit = () => {
        if (validateFields()) {
            console.log('Form submitted:', { email, password });
            handleLogin();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 60, }}
                onPress={() => navigation.navigate('Onboard')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headcontainer}>
                <View style={styles.logincontainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', zIndex: 20, color: '#000E08', }}> Log in </Text>
                    <Image source={require('../../assets/greenline.png')}
                        style={{ width: 53, left: 3, height: 10, position: 'absolute', top: 15, }}
                    />
                </View>
                <Text style={styles.Heading}>
                    to Chatbox
                </Text>
            </View>
            <View style={{ position: 'absolute', top: 180 }}>
                <Text style={styles.text}>
                    Welcome back! Sign in using your social </Text>
                <Text style={{ alignSelf: 'center', color: '#797C7B', }}>account or email to continue us</Text>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 250, alignItems: 'center', }}>
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
                        <Image source={require('../../assets/blackapple.png')} style={styles.appleimage} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', top: 330, }} >
                <View
                    style={{ color: '#CDD1D0', width: 132, borderBottomWidth: 1, opacity: 1, borderBottomColor: '#CDD1D0', bottom: 8, }}>

                </View>
                <Text
                    style={{ fontSize: 14, fontWeight: '450', color: '#797C7B', marginHorizontal: 20, }}>
                    OR</Text>
                <View
                    style={{ color: '#CDD1D0', width: 132, borderBottomWidth: 1, opacity: 1, borderBottomColor: '#CDD1D0', bottom: 8, }}>

                </View>

            </View>
            <View style={styles.content}>
                <Text style={[styles.Email, emailerror && styles.labelError,]}>Your email </Text>
                <TextInput
                    style={[styles.input, emailerror && styles.inputError]}
                    onChangeText={(value) => handleInputChange(setEmail, setemailerror, value)}
                    value={email}
                    placeholder='abc@gmail.com'
                    placeholderTextColor={'#000E08'}
                />
                {emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
                <Text style={[styles.Email, passerror && styles.labelError, { marginTop: emailerror ? 0 : 20 }]}>
                    Password
                </Text>
                <TextInput
                    style={[styles.input, passerror && styles.inputError]}
                    placeholder='* * * * * * * * *'
                    placeholderTextColor={'#000E08'}
                    value={password}
                    onChangeText={(value) => handleInputChange(setPassword, setpasserror, value)}
                    secureTextEntry={true}
                />
                {passerror && <Text style={styles.errorText}>{passerror}</Text>}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttontext}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.forgot} onPress={handleForgetPass}>
                    <Text >Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>{modalTitle}</Text>
                        <Text style={styles.modalMessage}>{modalMessage}</Text>
                        <Pressable style={styles.modalButton} onPress={closeModal}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    Heading: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000E08',


    },
    logincontainer: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000E08',
    },
    headcontainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 140,
    },
    text: {
        alignSelf: 'center',
        color: '#797C7B',

    },
    facebook: {
        // backgroundColor: 'red',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000E08'

    },
    google: {
        // backgroundColor: 'green',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 20,
        borderColor: '#000E08'
    },
    apple: {
        // backgroundColor: 'white',
        height: 50,
        width: 50,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#000E08'
    },
    appleimage: {
        height: 27,
        width: 22,
        left: 11,
        top: 8,
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
    Email: {
        fontSize: 14,
        fontWeight: '500',
        color: '#24786D',
        // left: 0,
    },
    content: {
        position: 'absolute',
        top: 380,
        // borderWidth:1,
        // borderColor:'black',
        height: 450,
        width: 340
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#CDD1D0',
        height: 40,
        // marginBottom: 20,
    },
    button: {
        backgroundColor: '#24786D',
        width: 327,
        height: 48,
        top: 170,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',

    },
    forgot: {
        fontSize: 14,
        fontWeight: '500',
        color: '#24786D',
        alignSelf: 'center',
        top: 185,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: '#24786D',
        padding: 10,
        borderRadius: 5,
        width: 60,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
    },
    labelError: {
        color: 'red',
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        alignSelf: 'flex-end',
    },
});
