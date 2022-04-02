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

const DeviceCard = ({ children, header = true, onLink, active}) => {
	return (
		<View style={styles.container}>
			{header && <View style={styles.header}>
				<View style={styles.leftActions}>
					<FeatherIcon
							name="link-2"
							color={Colors.black}
							size={25}
							style={{zIndex: 10}}
							onPress={() => {

							}}
					/>
					<View style={styles.halfCircle}/>
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
							onPress={() => {

							}}
					/>
					<FontAwesome
							name="minus"
							color={Colors.mediumGrayColor}
							size={25}
							onPress={() => {
								
							}}
					/>
				</View>
			</View>}
			<View style={styles.content}>
				{children}
			</View>
		</View>
	);
};

DeviceCard.propTypes = {
  children: PropTypes.string,
  header: PropTypes.bool,
	active: PropTypes.any,
  onLink: PropTypes.func
}

export default DeviceCard;