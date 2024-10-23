import {StyleSheet, View, TextInput, KeyboardAvoidingView} from 'react-native';
import React, { useState} from 'react';
import {FIREBASE_AUTH} from '../FirebaseConfig.tsx';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await auth.signInWithEmailAndPassword(auth, email, password);
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
                <TextInput value={email} style={styles.input}>Login with Firebase</TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input}>password</TextInput>
            </KeyboardAvoidingView>
        </View>
    );
};
export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    input: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: '#20232a',
      borderRadius: 6,
      backgroundColor: '#61dafb',
      color: '#20232a',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

