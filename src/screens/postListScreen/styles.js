import {StyleSheet} from 'react-native';
import {Fonts} from '../../assets/fonts';
import {vh, vw} from '../../units/index';
import theme from '../../utils/theme';

const styles = StyleSheet.create({
  postContainer: {
    borderColor: theme.primary,
    borderWidth: 0.3 * vh,
    padding: 1.5 * vw,
    marginTop: 1.5 * vh,
  },
  title: {
    fontSize: 2.5 * vh,
    color: theme.primary,
    fontFamily: Fonts.PSB,
  },
  body: {
    fontSize: 2 * vh,
    color: theme.primary,
    fontFamily: Fonts.PSR,
  },
  submitButtonStyle: {
    width: 80 * vw,

    marginTop: 2 * vh,
  },
});
export default styles;
