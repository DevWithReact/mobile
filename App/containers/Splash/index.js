import * as React from 'react';
import {
    SafeAreaView,
    ImageBackground,
    Image,
    View,
    Text,
    StatusBar
  } from 'react-native';
import Images from '../../utils/Images';
import {styles} from './styles';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground            
                source={Images.ic_splash}
                style={styles.background}
                resizeMode={'cover'}
            >
                <View
                    style={styles.content}
                >
                    <Image
                        source={Images.ic_logo}
                        resizeMode='contain'
                        style={styles.logo}
                    />
                    <Text style={styles.label}>
                        A whole piano in your pocket.
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SplashScreen;