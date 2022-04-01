import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import { textScale } from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: Colors.primaryColor
  },
  background: {
    width: '100%',
    height: '100%',
  },
  content: {    
    paddingHorizontal: scale(25),
    paddingVertical: scale(20)
  },
  logo: {
    width: scale(100),
    height: scale(65)
  },
  label: {
    paddingTop: scale(5),
    borderTopColor: Colors.primaryColor,
    borderTopWidth: 2,
    width: scale(110),
    color: 'white',
    fontWeight: '700',
    fontSize: textScale(15)
  }
});
