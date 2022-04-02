import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import {textScale} from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  indicator: {
    width: scale(5),
    height: scale(0),
    backgroundColor: Colors.black,
    marginRight: scale(2)
  },
  indicatorDisabled: {
    width: scale(5),
    height: scale(0),
    backgroundColor: Colors.greyColor,
    marginRight: scale(2)
  },
});
