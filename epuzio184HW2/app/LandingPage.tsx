import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-native-firebase/native';
import {FIREBASE_AUTH} from '../FirebaseConfig.tsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LandingPage = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const username = user?.email.split("@")[0]; //username is first part of email
    return (
        <View style={styles.container}>
            <Text>Welcome {username}!</Text>
            <Text>Your top task: Study lecture slides for CS 181 midterm</Text>
            <Text>Due Date: October 30, 2024</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eaeaea',
    },
    text: {
        fontSize: 90,
        color: '#398230',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
      },
  });

export default LandingPage