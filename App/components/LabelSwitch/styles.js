import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import {textScale} from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scale(10)
  },
  label: {
    color: Colors.greyColor,
    fontFamily: Fonts.EpilogueBold,
    fontWeight: '500',
    fontSize: textScale(14),
  },
  lefticon: {
    position: 'absolute',
    left: -10,
    height: scale(28)
  },
  righticon: {
    position: 'absolute',
    right: 0,
    height: scale(28)
  }
});
