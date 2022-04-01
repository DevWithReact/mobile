import * as React from 'react';
import {
    Image,
    View,
    Text
  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../AuthProvider';
import AuthInput from '../../components/AuthInput';
import LinkButton from '../../components/LinkButton';
import OutlineButton from '../../components/OutlineButton';
import PowerButton from '../../components/PowerButton';
import Images from '../../utils/Images';
import {styles} from './styles';

const PedalScreen = ({ navigation }) => {
    const {loading, login} = React.useContext(AuthContext);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    return (
        <View style={styles.container}>
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

export default PedalScreen;