import {StyleSheet, Platform} from 'react-native';
import Fonts from '../utils/Fonts';
import Colors from '../utils/Colors';
import {scale, scaleVertical} from '../utils/scale';
import { textScale } from '../utils/textUtil';
import { isAndroid } from '../utils/extension';

export const styles = StyleSheet.create({
  badgeWrapper: {
    position: 'relative'
  },
  badge: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(3.5),
    backgroundColor: Colors.badgeColor,
    position: 'absolute',
    left: scale(0),
    top: scale(0)
  },
  header: {
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    paddingVertical: scale(5),
    paddingTop: isAndroid() ? scale(5) : scale(40)
  },
  logo: {
    width: scale(100),
    height: scale(40)
  }
});
