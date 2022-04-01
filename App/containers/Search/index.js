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
                    ¡Bienvenido!
                </Text>
                <Text style={styles.subHeading}>
                    para comenzar debes vincular primero tus dispositivo/s
                </Text>
                <WhiteButton
                    title='VINCULAR PIANO'
                    rightIcon={Images.ic_key}
                    onPress={() => {
                        navigation.navigate("Link");
                    }}
                />
                <View style={styles.vspace}/>
                <WhiteButton
                    title='VINCULAR PEDAL'
                    rightIcon={Images.ic_pedal}
                    onPress={() => {
                        
                    }}
                />
            </View>
        </View>
    );
};

export default SearchScreen;