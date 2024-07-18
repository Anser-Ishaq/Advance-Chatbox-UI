import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Modal, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth, createUserWithEmailAndPassword } from '../../firebase';
import { database } from '../../firebase';
import { collection, doc, setDoc } from '@firebase/firestore';


export default function Signup({ navigation }) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [confirm, setconfirm] = useState('');

    const [nameerror, setnameerror] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passerror, setpasserror] = useState('');
    const [confirmerror, setconfirmerror] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const [loading, setLoading] = useState(false); 

    const signup = async (emaill, password) => {
        setLoading(true); 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emaill, password);
            const usercollection = collection(database, 'users');
            if (userCredential) {
                const userdoc = doc(usercollection, userCredential.user.uid)
                await setDoc(userdoc, {
                    uid: userCredential.user.uid,
                    name: name,
                    email: email,
                });
                setModalTitle('Success');
                setModalMessage('Account Successfully Created');
                setModalVisible(true);
            }
        } catch (error) {
            setModalTitle('Error');
            setModalMessage('The email address is already in use by another account.');
            setModalVisible(true);
            console.log("Firebase Error:", error);
        } finally {
            setLoading(false); 
        }
    };

    const handleInputChange = (setter, errorSetter, value) => {
        setter(value);
        if (errorSetter) {
            errorSetter('');
        }
    };

    const validateFields = () => {
        let isValid = true;

        if (!name) {
            setnameerror('Fill this field');
            isValid = false;
        }

        if (!email) {
            setemailerror('Fill this field');
            isValid = false;
        } else if (!email.includes('@gmail.com')) {
            setemailerror('Email should contain "@gmail.com"');
            isValid = false;
        }

        if (!pass) {
            setpasserror('Fill this field');
            isValid = false;
        } else if (pass.length < 6) {
            setpasserror('Password must be at least 6 characters');
            isValid = false;
        }
        if (!confirm) {
            setconfirmerror('Fill this field');
            isValid = false;
        } else if (confirm !== pass) {
            setconfirmerror('Passwords do not match');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async () => {
        if (validateFields()) {
            console.log('Form submitted:', { name, email, pass });
            await signup(email, pass);
        }
    };

    const closeModal = () => {
        setModalVisible(false);
        if (modalTitle === 'Success') {
            navigation.navigate('Login');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 60 }} onPress={() => navigation.navigate('Onboard')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headcontainer}>
                <Text style={styles.Heading}>Sign up with</Text>
                <View style={styles.logincontainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', zIndex: 20, color: '#000E08' }}> Email </Text>
                    <Image source={require('../../assets/greenline.png')}
                        style={{ width: 48, left: 3, height: 10, position: 'absolute', top: 15 }}
                    />
                </View>
            </View>
            <View style={{ position: 'absolute', top: 180 }}>
                <Text style={styles.text}>Get chatting with friends and family today by </Text>
                <Text style={{ alignSelf: 'center', color: '#797C7B' }}>account or email to continue us</Text>
            </View>
            <View style={styles.content}>
                <View>
                    <Text style={[styles.label, nameerror && styles.labelError]}>Your name </Text>
                    <TextInput
                        style={[styles.input, nameerror && styles.inputError]}
                        placeholder='Enter Your Name'
                        onChangeText={(value) => handleInputChange(setname, setnameerror, value)}
                        value={name}
                        placeholderTextColor={'#000E08'}
                    />
                    {nameerror && <Text style={styles.errorText}>{nameerror}</Text>}
                </View>
                <View>
                    <Text style={[styles.label, emailerror && styles.labelError, { marginTop: nameerror ? 0 : 20 }]}>
                        Your email
                    </Text>
                    <TextInput
                        style={[styles.input, emailerror && styles.inputError]}
                        placeholder='Enter Email'
                        onChangeText={(value) => handleInputChange(setemail, setemailerror, value)}
                        value={email}
                        placeholderTextColor={'#000E08'}
                    />
                    {emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
                </View>
                <View>
                    <Text style={[styles.label, passerror && styles.labelError, { marginTop: emailerror ? 0 : 20 }]}>
                        Password
                    </Text>
                    <TextInput
                        style={[styles.input, passerror && styles.inputError]}
                        placeholderTextColor={'#000E08'}
                        onChangeText={(value) => handleInputChange(setpass, setpasserror, value)}
                        value={pass}
                    />
                    {passerror && <Text style={styles.errorText}>{passerror}</Text>}
                </View>
                <View >
                    <Text style={[styles.label, confirmerror && styles.labelError, { marginTop: passerror ? 0 : 20 }]}>
                        Confirm Password
                    </Text>
                    <TextInput
                        style={[styles.input, passerror && styles.inputError]}
                        placeholderTextColor={'#000E08'}
                        onChangeText={(value) => handleInputChange(setconfirm, setconfirmerror, value)}
                        value={confirm}
                    />
                    {confirmerror && <Text style={styles.errorText}>{confirmerror}</Text>}
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttontext}>Create an account</Text>
                </TouchableOpacity>

                {/* Loader/Spinner */}
                {loading &&
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#24786D" />
                    </View>
                }
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
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headcontainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        position: 'absolute',
        top: 140,
    },
    logincontainer: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000E08',
    },
    Heading: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000E08',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'center',
        color: '#797C7B',
    },
    button: {
        backgroundColor: '#24786D',
        width: 327,
        height: 48,
        top: 130,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#CDD1D0',
        height: 40,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#24786D',
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
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
    content: {
        position: 'absolute',
        top: 250,
        height: 450,
        width: 340,
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
    loaderContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
