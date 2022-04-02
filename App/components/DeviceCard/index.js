import * as React from 'react';
import {
  Text,
	Image,
  TouchableOpacity,
  ActivityIndicator,
	View,
} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from '../../utils/Colors';

const DeviceCard = ({ children, onLink, active}) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.leftActions}>
					<FeatherIcon
							name="link-2"
							color={Colors.black}
							size={25}
					/>
				</View>
				<FontAwesome
						name="battery"
						color={Colors.mediumGrayColor}
						size={25}
				/>
				<View style={styles.rightActions}>
					<FontAwesome
							name="plus"
							color={Colors.mediumGrayColor}
							size={25}
					/>
					<FontAwesome
							name="minus"
							color={Colors.mediumGrayColor}
							size={25}
					/>
				</View>
			</View>
			<View style={styles.content}>
				{children}
			</View>
		</View>
	);
};

DeviceCard.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
	leftIcon: PropTypes.any,
	rightIcon: PropTypes.any,
  onPress: PropTypes.func.isRequired,
}

export default DeviceCard;