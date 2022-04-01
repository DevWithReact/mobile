import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../containers/Splash';
import HomeNavigator from './HomeNavigator';
import SearchScreen from '../containers/Search';
import LinkScreen from '../containers/Link';
import { AuthContext } from '../AuthProvider';


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    const { user, userProfile } = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return <SplashScreen/>
    }

    return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="Link" component={LinkScreen}/>
            <Stack.Screen name="Home" component={HomeNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MainNavigator;