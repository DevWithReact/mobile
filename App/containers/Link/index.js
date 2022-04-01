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
                    ¡Bienvenido!
                </Text>
                <Text style={styles.subHeading}>
                    para comenzar debes vincular primero tus dispositivo/s
                </Text>
                <WhiteButton
                    title='BUSCAR DISPOSITIVO/S'
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