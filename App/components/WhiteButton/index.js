import * as React from 'react';
import {
  Text,
	Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';

const WhiteButton = ({ title, leftIcon, rightIcon, loading, onPress}) => {
	return (
		<TouchableOpacity
			style={styles.container}
			disabled={loading}
			onPress={onPress}
		>			
				{leftIcon && <Image
						source={leftIcon}
						resizeMode='contain'
						style={styles.lefticon}
				/>}
				{loading ? (
					<ActivityIndicator size="small" color="white" />
				) : (
					<Text style={styles.text}>
						{title}
					</Text>
				)}
				{rightIcon && <Image
						source={rightIcon}
						resizeMode='contain'
						style={styles.righticon}
				/>}
		</TouchableOpacity>
	);
};

WhiteButton.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
	leftIcon: PropTypes.any,
	rightIcon: PropTypes.any,
  onPress: PropTypes.func.isRequired,
}

export default WhiteButton;