import {View, Text} from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-native-firebase/native';
import {FIREBASE_AUTH} from '../FirebaseConfig.tsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const LandingPage = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const username = user?.email.split("@")[0]; //username is first part of email
    return (
        <View>
            <Text>Welcome {username}!</Text>
        </View>
    )
}

export default LandingPage