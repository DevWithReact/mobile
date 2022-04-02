import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import { textScale } from '../../utils/textUtil';
import { getDeviceHeight } from '../../utils/extension';

export const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: scale(10),
    paddingHorizontal: scale(15)
  },
  mainCard: {
    width: '100%',
    flexDirection: 'row'
  },
  octaveVolume: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: Colors.greyColor,
  },
  effects: {
    flex: 1
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
    fontSize: textScale(16),
    fontWeight: '700',
    color: Colors.greyColor,
    textAlign: 'center'
  },
  octaveValue: {
    textAlign: 'center',
    fontFamily: Fonts.EpilogueBold,
    fontSize: textScale(45),
    fontWeight: '700',
    color: Colors.greyColor,
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  volumeWrapper: {
    marginTop: scale(10)
  },
  switchWrapper: {
    flex: 1,
    justifyContent: 'space-between'
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
