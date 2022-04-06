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
import { styles } from './styles';
import LabelSwitch from '../../components/LabelSwitch';
import VolumeIndicator from '../../components/VolumeIndicator';
import Modal from "react-native-modal";
import DeviceCard from '../../components/DeviceCard';
import BatteryPiano from '../../components/BatteryPiano';
import BatteryPedal from '../../components/BatteryPedal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { scale } from '../../utils/scale';

const PianoStatusScreen = ({ navigation }) => {
    const [effect1, setEffect1] = React.useState(false);
    const [effect2, setEffect2] = React.useState(false);
    const [effect3, setEffect3] = React.useState(false);
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [deviceType, setDeviceType] = React.useState('piano');
    return (        
        <KeyboardAwareScrollView style={{flex: 1}} contentContainerStyle={{flex: 1}}>
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
                                    size={scale(35)}
                                    onPress={() => console.log('Pressed')}
                                />
                                <Text style={styles.octaveValue}>3</Text>
                                <IconButton
                                    icon="chevron-right"
                                    color={Colors.grey}
                                    size={scale(35)}
                                    onPress={() => console.log('Pressed')}
                                />
                            </View>
                            <View style={styles.vspace} />
                            <Text style={styles.heading}>
                                Volume
                            </Text>
                            <View style={[styles.volumeWrapper, styles.inline]}>
                                <IconButton
                                    icon="minus"
                                    color={Colors.grey}
                                    size={scale(18)}
                                    onPress={() => console.log('Pressed')}
                                    style={styles.outlineCircle}
                                />
                                <VolumeIndicator />
                                <IconButton
                                    icon="plus"
                                    color={Colors.grey}
                                    size={scale(18)}
                                    onPress={() => console.log('Pressed')}
                                    style={styles.outlineCircle}
                                />
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
                <View style={styles.vspace} />
                <DeviceCard
                    onLinkPress={() => {
                        setModalVisible(true);
                        setDeviceType('piano');
                    }}
                >
                    <BatteryPiano
                        level={2}
                    />
                </DeviceCard>
                <View style={styles.vspace} />
                <DeviceCard
                    onLinkPress={() => {
                        setModalVisible(true);
                        setDeviceType('pedal');
                    }}
                >
                    <BatteryPedal
                        level={2}
                    />
                </DeviceCard>

                <Modal
                    isVisible={isModalVisible}
                    style={styles.modalStyle}
                    onBackdropPress={() => setModalVisible(false)}
                    onBackButtonPress={()=> setModalVisible(false)}
                    onSwipeComplete={() => setModalVisible(false)}
                    swipeDirection={['down']}
                    backdropColor={'transparent'}
                >
                    <View style={styles.modalContainer}>
                        <Text style={styles.deviceLabel}>Add device:</Text>
                        <View style={styles.deviceWrapper}>
                            <Image
                                source={deviceType == 'piano' ? Images.ic_piano_white : Images.ic_pedal_white}
                                style={styles.deviceIcon}
                            />
                            <Text style={styles.deviceName}>{deviceType == 'piano' ? 'PocketPianoPMV1' : 'PocketPianoPMV2'}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default PianoStatusScreen;