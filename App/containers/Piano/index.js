import * as React from 'react';
import {
    Image,
    View,
    Text,
    StatusBar
  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../AuthProvider';
import PowerButton from '../../components/PowerButton';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import {styles} from './styles';

const PianoScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>            
            <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
            <KeyboardAwareScrollView style={{flex: 1}} contentContainerStyle={{flex: 1,}}>
                <View style={styles.containerInner}>
                    <PowerButton
                      onPress={() => {
                          
                      }}
                    />
                    <Image            
                        source={Images.ic_keyboard}
                        style={styles.keyboard}
                        resizeMode={'contain'}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default PianoScreen;