import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
//const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

//https://medium.com/soluto-engineering/size-matters-5aeeb462900a

export const text = {
 

    mini: {
      fontSize: moderateScale(12),
      color: "#fff",
      fontStyle: 'italic',
      textAlign: 'center',
    },

    small: {
      fontSize: moderateScale(15),
      color: "#fff",
      fontWeight: 'bold',
      textAlign: 'center',
    },

    medium: {
      fontSize: moderateScale(20),
      color : "#fff",
      fontWeight: 'bold',
      // textAlign: 'center',
    },

    large: {
      fontSize: moderateScale(40),
      fontWeight: '600',
      color: "#fff",
      fontWeight: 'bold',
    },

  };
