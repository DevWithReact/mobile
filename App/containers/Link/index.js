import * as React from 'react';
import {
    Image,
    View,
    Text,
    StatusBar
  } from 'react-native';
import WhiteButton from '../../components/WhiteButton';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import {styles} from './styles';

const LinkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>            
            <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
            <Image            
                source={Images.ic_piano_headset}
                style={styles.background}
                resizeMode={'cover'}
            />
            <View
                style={styles.containerInner}
            >
                <Text style={styles.heading}>
                    Welcome!
                </Text>
                <Text style={styles.subHeading}>
                    To start you must first link your device (s)
                </Text>
                <WhiteButton
                    title='Search Device(s)'
                    leftIcon={Images.ic_search}
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                />
            </View>
        </View>
    );
};

export default LinkScreen;