import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../containers/Splash';
import HomeNavigator from './HomeNavigator';
import SearchScreen from '../containers/Search';
import LinkScreen from '../containers/Link';
import PianoStatusScreen from '../containers/PianoStatus';
import { AuthContext } from '../AuthProvider';
import Images from '../utils/Images';
import { styles } from './styles';



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
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            >
            <Stack.Screen
                name="Search"
                component={SearchScreen}
            />
            <Stack.Screen
                name="Link"
                component={LinkScreen}
            />
            <Stack.Screen
                name="PianoStatus"
                component={PianoStatusScreen}
            />
            <Stack.Screen
                name="Home"
                component={HomeNavigator}
                options={{                    
                    title: 'Profile',
                    headerShown: true,
                    header: ({ navigation, route, options, back }) => {                      
                        return (
                            <View style={styles.header}>
                                <Image
                                    source={Images.ic_logo}
                                    style={styles.logo}
                                    resizeMode={"contain"}
                                />
                            </View>
                        );
                      }
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default MainNavigator;