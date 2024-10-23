import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/Login.tsx';
import List from './app/List.tsx';
// import Details from './app/Details.tsx';
import { FIREBASE_AUTH } from './FirebaseConfig.tsx';
import {useEffect, useState} from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
    return (
        <InsideStack.Navigator>
            <InsideStack.Screen name= "Inside" component={List} />
            <InsideStack.Screen name= "Details" component={Details} />
        </InsideStack.Navigator>
    );
}
export default function App(){
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log('user:', user);
            setUser(user);
        })
    }, []);  

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                {user ? (
                    <Stack.Screen name="Login" component={InsideLayout} options={{headerShown: false}} />
                ) : (
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}