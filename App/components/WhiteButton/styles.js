import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import {textScale} from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    width: scale(260),
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.textInputBackground,
    borderRadius: scale(6),
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.EpilogueBold,
    fontWeight: '700',
    fontSize: textScale(18),
  },
  lefticon: {
    position: 'absolute',
    left: 0,
    height: scale(28)
  },
  righticon: {
    position: 'absolute',
    right: 0,
    height: scale(28)
  }
});
