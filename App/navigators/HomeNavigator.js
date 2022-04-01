import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PianoScreen from '../containers/Piano';
import PedalScreen from '../containers/Pedal';
import Images from '../utils/Images';
import { AuthContext } from '../AuthProvider';
import { styles } from './styles';
import Colors from '../utils/Colors';


const Tab = createMaterialTopTabNavigator();
const HomeNavigator = ({navigation}) => {
    const { user, chatBadge, userProfile } = React.useContext(AuthContext);
    
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    color: Colors.white,
                    fontWeight: '700'
                },
                tabBarIndicatorStyle: {
                    backgroundColor: Colors.white,
                    height: 5
                },
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor,
                }
            }}
            initialRouteName="Piano"
        >
            <Tab.Screen
                name={"Piano"}
                component={PianoScreen}
            />
            <Tab.Screen
                name={"Pedal"}
                component={PedalScreen}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigator;