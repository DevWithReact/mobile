import * as React from 'react';
import {
  View,
	Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import Images from '../../utils/Images';

const BatteryPiano = ({ level = 3}) => {
	const indicators = [
		0,1,2,3,4,5,6,7
	]
	return (
		<View style={styles.container}>
			{
				indicators.map((item, i) => (
					<Image
						key={`${item}`}
						source={i==0 ? Images.ic_battery_st : (i < level ? Images.ic_piano_charge : Images.ic_piano_charge_grey)}
						style={[
							styles.icon
						]}
					/>
				))
			}
		</View>
	);
};

BatteryPiano.propTypes = {
	level: PropTypes.number.isRequired
}

export default BatteryPiano;