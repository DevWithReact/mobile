import {StyleSheet} from 'react-native';
import Fonts from '../../utils/Fonts';
import Colors from '../../utils/Colors';
import {scale, scaleVertical} from '../../utils/scale';
import {textScale} from '../../utils/textUtil';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.lightGrayColor,
    borderRadius: scale(6),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    
  },
  header: {
    width: '100%',
    height: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftActions: {
    position: 'absolute',
    left: 10,
  },
  halfCircle: {
    width: scale(80),
    height: scale(80),
    borderRadius: scale(50),
    backgroundColor: '#fefefe',
    position: 'absolute',
    left: scale(-45),
    top: scale(-50)
  },
  rightActions: {
    position: 'absolute',
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(60)
  },
  content: {
    minHeight: scale(100),
    justifyContent: 'center',
    paddingVertical: scale(15),
    paddingHorizontal: scale(15)
  }
});
