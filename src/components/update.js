import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert ,ActivityIndicator} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import { auth, updateProfile, updatePassword, uploadImage } from '../../firebase';
import { database,doc, updateDoc } from '../../firebase';

export default function Update({ navigation }) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [imageUri, setImageUri] = useState(null);

    const [loading, setLoading] = useState(false); 


    const handleUpdate = async () => {
        setLoading(true);
        try {
            const user = auth.currentUser;

            if (user) {
                if (name) {
                    await updateProfile(user, { displayName: name });
                    const userDocRef = doc(database, 'users', user.uid);
                    await updateDoc(userDocRef, { name: name });
                }

                if (password && password === confirmPassword) {
                    await updatePassword(user, password);
                } else if (password !== confirmPassword) {
                    setError('Passwords do not match');
                    return;
                }

                if (imageUri) {
                    console.log(imageUri)
                    try {
                        const profilePictureUrl = await uploadImage(imageUri);
                        await updateProfile(user, { photoURL: profilePictureUrl });
                        const userDocRef = doc(database, 'users', user.uid);
                        await updateDoc(userDocRef, { photoURL: profilePictureUrl });
                    } catch (uploadError) {
                        console.error('Error uploading image:', uploadError);
                        setError('Failed to upload profile picture. Please try again.');
                        return;
                    }
                }

                
                navigation.navigate('Settings', { updatedName: name, updatedImageUri: imageUri });

                setName('');
                setPassword('');
                setConfirmPassword('');
                setImageUri(null);
                setLoading(false);

                // Navigate to Login screen after updating
                navigation.navigate('Login');
            } else {
                console.log('No user found.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(error.message);
        }
    };

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ position: 'absolute', left: 20, top: 60, }} onPress={() => navigation.navigate('Settings')}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.headcontainer}>
                <View style={styles.logincontainer}>
                    <Text style={{ fontSize: 18, fontWeight: '600', zIndex: 20, color: '#000E08', }}> Update Screen </Text>
                    <Image source={require('../../assets/greenline.png')}
                        style={{ width: 122, left: 3, height: 10, position: 'absolute', top: 15, }}
                    />
                </View>
            </View>

            <View style={styles.content}>
                <TouchableOpacity onPress={handleImagePicker}>
                    <View style={styles.imageContainer}>
                        {imageUri ? (
                            <Image source={{ uri: imageUri }} style={styles.image} />
                        ) : (
                            <Text>Select Profile Picture</Text>
                        )}
                    </View>
                </TouchableOpacity>
                <Text style={styles.Email}>Name </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    onChangeText={setName}
                    value={name}
                />
                <Text style={styles.Email}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
                <Text style={styles.Email}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                />
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                    <Text style={styles.buttontext}>Update</Text>
                </TouchableOpacity>
                {loading &&
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#24786D" />
                    </View>
                }
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
    Email: {
        fontSize: 14,
        fontWeight: '500',
        color: '#24786D',
    },
    content: {
        position: 'absolute',
        top: 250,
        height: 450,
        width: 340
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#CDD1D0',
        height: 40,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#24786D',
        width: 327,
        height: 48,
        top: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    imageContainer: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
    },
    loaderContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
