import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import { textScale } from '../../utils/textUtil';
import { getDeviceHeight } from '../../utils/extension';

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
  },
  containerInner: {
    alignItems: 'center',
    position: 'relative',
    flex: 1,
    minHeight: scale(610)
  },
  background: {
    width: '100%',
    height: scale(230),
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  heading: {
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(24),
    fontWeight: '700',
    color: 'white',
    marginTop: scale(49)
  },
  subHeading: {
    width: scale(200),
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(20),
    fontWeight: '500',
    color: 'white',
    marginTop: scale(10),
    marginBottom: scale(49),
  },
  vspace: {
    height: scale(20)
  }
});
