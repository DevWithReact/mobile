import * as React from 'react';
import {
    Image,
    TouchableOpacity,
  } from 'react-native';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {scale} from '../../utils/scale';
import Images from '../../utils/Images';

const PowerButton = ({ width=40, height=40, disabled, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            disabled={disabled}
        >
            <Image
                source={Images.ic_power}
                style={[
                    styles.icon,
                    {                    
                        width: scale(width),
                        height: scale(height)
                    }
                ]}
            />
        </TouchableOpacity>
    );
};

PowerButton.propTypes = {
    icon: PropTypes.any,
    width: PropTypes.number,
    height: PropTypes.number,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
}

export default PowerButton;