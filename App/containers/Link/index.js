import * as React from 'react';
import {
    Image,
    View,
    Text
  } from 'react-native';
import WhiteButton from '../../components/WhiteButton';
import Images from '../../utils/Images';
import {styles} from './styles';

const LinkScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
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

                    }}
                />
            </View>
        </View>
    );
};

export default LinkScreen;