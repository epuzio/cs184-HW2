import {StyleSheet, View, TextInput, Text, KeyboardAvoidingView, ActivityIndicator, Button} from 'react-native';
import React, { useState} from 'react';
import {FIREBASE_AUTH} from '../FirebaseConfig.tsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error){
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
        }
        catch (error: any){
            console.log(error);
            alert('Sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder="email" autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="password" autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
            </KeyboardAvoidingView>
            { loading ? (<ActivityIndicator size="large" color="#0000ff"/>
            ): (
                <>
                    <Button title="Login" onPress={() => signIn()} />
                    <Button title="Sign Up" onPress={() => signUp()} />
                </>
            )}
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 4,
        borderColor: '#4421ea',
        borderRadius: 6,
        backgroundColor: '#eeeeee',
        color: '#000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'PT Sans',
    },
    text: {
        fontSize: 30,
        color: '#000',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
      },
  });

