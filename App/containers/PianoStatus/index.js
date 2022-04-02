import * as React from 'react';
import {
    Image,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';
import WhiteButton from '../../components/WhiteButton';
import {
    Card,
    IconButton,
} from 'react-native-paper';
import Colors from '../../utils/Colors';
import Images from '../../utils/Images';
import {styles} from './styles';
import LabelSwitch from '../../components/LabelSwitch';
import VolumeIndicator from '../../components/VolumeIndicator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DeviceCard from '../../components/DeviceCard';
import BatteryPiano from '../../components/BatteryPiano';
import BatteryPedal from '../../components/BatteryPedal';

const PianoStatusScreen = ({ navigation }) => {
    const [effect1, setEffect1] = React.useState(false);
    const [effect2, setEffect2] = React.useState(false);
    const [effect3, setEffect3] = React.useState(false);
    return (
        <View style={styles.container}>            
            <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />
            <DeviceCard header={false}>
                <View style={styles.mainCard}>
                    <View
                        style={styles.octaveVolume}
                    >
                        <Text style={styles.heading}>
                            OCTAVE
                        </Text>
                        <View style={styles.inline}>
                            <IconButton
                                icon="chevron-left"
                                color={Colors.grey}
                                size={50}
                                onPress={() => console.log('Pressed')}
                            />
                            <Text style={styles.octaveValue}>3</Text>
                            <IconButton
                                icon="chevron-right"
                                color={Colors.grey}
                                size={50}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>
                        <Text style={styles.heading}>
                            Volume
                        </Text>
                        <View style={styles.volumeWrapper}>
                            <VolumeIndicator/>
                        </View>
                    </View>
                    <View style={styles.effects}>
                        <Text style={styles.heading}>EFFECTS</Text>
                        <View style={styles.switchWrapper}>
                            <LabelSwitch
                                title="Effect 1"
                                value={effect1}
                                onValueChange={(v) => {
                                    setEffect1(v);
                                }}
                            />
                            <LabelSwitch
                                title="Effect 2"
                                value={effect2}
                                onValueChange={(v) => {
                                    setEffect2(v);
                                }}
                            />
                            <LabelSwitch
                                title="Effect 3"
                                value={effect3}
                                onValueChange={(v) => {
                                    setEffect3(v);
                                }}
                            />
                        </View>
                    </View>
                </View>
            </DeviceCard>
            <View style={styles.vspace}/>
            <DeviceCard>
                <BatteryPiano
                    level={2}
                />
            </DeviceCard>
            <View style={styles.vspace}/>
            <DeviceCard>
                <BatteryPedal
                    level={2}
                />
            </DeviceCard>
        </View>
    );
};

export default PianoStatusScreen;