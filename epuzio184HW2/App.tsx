import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ToDoList from './app/ToDoList.tsx';
import LandingPage from './app/LandingPage.tsx';
import Login from './app/Login.tsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Details from './app/Details.tsx';
import { FIREBASE_AUTH } from './FirebaseConfig.tsx';
import {useEffect, useState} from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InsideLayout(){
    return (
        <Tab.Navigator>
            <Tab.Screen name= "Home" component={LandingPage} />
            <Tab.Screen name= "To Do List" component={ToDoList} />
        </Tab.Navigator>
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
