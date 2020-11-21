import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseHeight = 680;

const verticalScale = size => height / guidelineBaseHeight * size;

export const text = {
  mini: {
    fontSize: verticalScale(12),
    color: "#fff",
    fontStyle: 'italic',
    textAlign: 'center',
  },

  small: {
    fontSize: verticalScale(12),
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
  },

  medium: {
    fontSize: verticalScale(18),
    color : "#fff",
    fontWeight: 'bold',
  },

  large: {
    fontSize: verticalScale(40),
    fontWeight: '600',
    color: "#fff",
    fontWeight: 'bold',
  },
};
