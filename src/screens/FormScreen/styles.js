import { StyleSheet } from 'react-native';
import { Fonts } from '../../assets/fonts';
import { vh, vw } from '../../units/index';
import theme from '../../utils/theme';

const styles = StyleSheet.create({

  submitButtonStyle: {
    width: 80 * vw,
    marginTop: 2 * vh,
  },

  fieldContainer: {
    backgroundColor: theme.whiteBackground,
    paddingVertical: 6 * vh,
    width: 100 * vw,
    borderTopRightRadius: 15 * vw,
  },
  fieldsView: {
    marginTop: 2 * vh,
    marginBottom: 2 * vh,

  },
  gender:{
    color: theme.primary,
    fontSize: 2* vh,
    textAlign: 'center',
    fontFamily: Fonts.PSR,
    marginLeft:vw
  },
  genderRow:{
    flexDirection: 'row',justifyContent:'space-around',
    marginTop: 1 * vh,
    
    alignItems:'center'
  },
  label:{
    marginLeft: 2 * vw,
    color: theme.primary,
    fontFamily:Fonts.PSB,
    marginTop: 2 * vh,
   fontSize:1.7*vh
  },
  dateContainer:{
    width: 90 * vw,
    height: 7 * vh,
    backgroundColor: theme.defaultBackgroundColor,
    flexDirection: 'row',
    alignItems:'center',
    borderRadius: 1.5* vw,
    marginTop: 1 * vh,
  },
  
  circle: {
    borderColor: theme.primary,
    borderWidth: 0.3 * vh,
    width: 3 * vh,
    alignItems:'center',
    justifyContent:'center',
    height: 3 * vh,
    borderRadius: 1.5 * vh
  },
  innercircle:{
    backgroundColor: theme.primary,
    width: 1.5 * vh,
    height: 1.5 * vh,
    borderRadius: 1 * vh
  },
  scroll: {
    flex: 1,
    opacity: 0.5,
  },
  content: {
    // alignItems: 'flex-end',
    // justifyContent:'flex-end'
    flex: 1
  },
  shortdes: {
    color: theme.black,
    fontSize: 3 * vh,
    textAlign: 'center',
    fontFamily: Fonts.PSR

  },
  fpw: {
    color: theme.primary,
    fontSize: 2 * vh,
    textAlign: 'center',
    fontFamily: Fonts.PSR

  },
  des: {
    color: theme.black,
    fontSize: 2 * vh,
    textAlign: 'center',
    marginTop: 2 * vh,
    fontFamily: Fonts.PSR

  },
  miniContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
    // width: 80 * vw,
    alignSelf: 'center',
  },
  textInputStyle: {
    marginLeft: 2 * vw,
    color: theme.defaultInactiveBorderColor,
    fontFamily:Fonts.PSR,
    width: 66 * vw,
    fontSize: 1.7 * vh,

  },
});
export default styles;
