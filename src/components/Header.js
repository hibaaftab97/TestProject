import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Fonts} from '../assets/fonts';
import {vh, vw} from '../units';
import theme from '../utils/theme';
import TextWrapper from './TextWrapper';

function Index({title}) {
  return (
    <View style={styles.container}>
      <TextWrapper style={styles.header}>{title}</TextWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10 * vh,
    width: 100 * vw,

    backgroundColor: theme.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontFamily: Fonts.PSB,
    color: theme.whiteBackground,
    fontSize: 3 * vh,
  },
});

export default Index;
