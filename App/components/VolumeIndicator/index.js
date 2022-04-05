import * as React from 'react';
import {
  View,
	Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const VolumeIndicator = ({ volume = 3}) => {
	const indicators = [
		10,15,20,25,30,35,40,45
	]
	return (
		<View style={styles.container}>
			{
				indicators.map((item, i) => (
					<View
						key={`${item}`}
						style={[
							i < volume ? styles.indicator : styles.indicatorDisabled,
							{
								height: item
							}
						]}
					/>
				))
			}
		</View>
	);
};

VolumeIndicator.propTypes = {
	volume: PropTypes.number
}

export default VolumeIndicator;