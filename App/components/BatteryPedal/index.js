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

const BatteryPedal = ({ level = 3}) => {
	const indicators = [
		0,1,2
	]
	return (
		<View style={styles.container}>
			{
				indicators.map((item, i) => (
					<Image
						key={`${item}`}
						source={i < level ? Images.ic_pedal_charge : Images.ic_pedal_charge_grey}
						style={[
							styles.icon
						]}
					/>
				))
			}
		</View>
	);
};

BatteryPedal.propTypes = {
	level: PropTypes.number.isRequired
}

export default BatteryPedal;