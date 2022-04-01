import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import {textScale} from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: scale(20),
    borderColor: Colors.greyColor,
    borderWidth: scale(7),
    borderRadius: scale(50),
  },
  icon: {
    borderRadius: scale(50),
    width: scale(40),
    height: scale(40)
  }
});
