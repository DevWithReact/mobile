import * as React from 'react';
import {
    Image,
    View,
    Text
  } from 'react-native';
import WhiteButton from '../../components/WhiteButton';
import Images from '../../utils/Images';
import {styles} from './styles';

const SearchScreen = ({ navigation }) => {
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
                    title='PIANO LINK'
                    rightIcon={Images.ic_key}
                    onPress={() => {
                        navigation.navigate("Link");
                    }}
                />
                <View style={styles.vspace}/>
                <WhiteButton
                    title='PEDAL LINK'
                    rightIcon={Images.ic_pedal}
                    onPress={() => {
                        
                    }}
                />
            </View>
        </View>
    );
};

export default SearchScreen;