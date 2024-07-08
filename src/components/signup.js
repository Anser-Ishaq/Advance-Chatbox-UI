import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function Signup({navigation}) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [confirm, setconfirm] = useState('');


    const [nameerror, setnameerror] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [passerror, setpasserror] = useState('');
    const [confirmerror, setconfirmerror] = useState('');

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
        }

        if (!pass) {
            setpasserror('Fill this field');
            isValid = false;
        }
        if (!confirm) {
            setconfirmerror('Fill this field');
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = () => {
        if (validateFields()) {
            // Submit the form
            console.log('Form submitted:', { name, email, pass });
        }
    };


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{position:'absolute', left:20, top:60,}}
            onPress={()=>navigation.navigate('Onboard')}>
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headcontainer}>
                <Text style={styles.Heading}>
                    Sign up with
                </Text>
                <View style={styles.logincontainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', zIndex: 20, color: '#000E08', }}> Email </Text>
                    <Image source={require('../../assets/greenline.png')}
                        style={{ width: 48, left: 3, height: 10, position: 'absolute', top: 15, }}
                    />
                </View>

            </View>
            <View style={{ position: 'absolute', top: 180, }}>
                <Text style={styles.text}>
                    Get chatting with friends and family today by </Text>
                <Text style={{ alignSelf: 'center', color: '#797C7B', }}>account or email to continue us</Text>
            </View>
            <View style={styles.content}>
                <View>
                <Text style={[styles.label, nameerror && styles.labelError, ]}>Your name </Text>
                <TextInput
                    style={[styles.input, nameerror && styles.inputError]}
                    placeholder='Henry'
                    onChangeText={(value) => handleInputChange(setname, setnameerror, value)}
                    value={name}
                    placeholderTextColor={'#000E08'}
                />
                {nameerror && <Text style={styles.errorText}>{nameerror}</Text>}
                </View>
                <View>
                <Text style={[styles.label, emailerror && styles.labelError, {marginTop: nameerror ? 0 : 20}]}>
                    Your email
                </Text>
                <TextInput
                    style={[styles.input, emailerror && styles.inputError]}
                    placeholder='abc@gmail.com'
                    onChangeText={(value) => handleInputChange(setemail, setemailerror, value)}
                    value={email}
                    placeholderTextColor={'#000E08'}
                />
                {emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
                </View>
                <View>
                <Text style={[styles.label, passerror && styles.labelError,  {marginTop: emailerror ? 0 : 20}]}>
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
                <Text style={[styles.label, confirmerror && styles.labelError,  {marginTop: passerror ? 0 : 20}]}>
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
        // marginTop: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#24786D',
        marginTop:20,
        // left: 0,
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
        alignSelf:'flex-end',
        // padding:0,
    },
    content: {
        position: 'absolute',
        top: 280,
        // borderWidth:1,
        // borderColor:'black',
        height: 450,
        width: 340
    },
});
