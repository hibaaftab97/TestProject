import React, {useState} from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import theme from '../../../utils/theme';
import {vw} from '../../../units';
import TextWrapper from '../../TextWrapper';

const AuthTextInput = props => {
  const [focus, setFocus] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const handlePassword = () => {
    setIsShow(!isShow);
  };
  return (
    <View>
      <TextWrapper style={styles.label}>{props.label}</TextWrapper>
      <View style={[styles.customStyle, props.Viewstyle]}>
        <TextInput
          value={props.value}
          maxLength={props?.maxLength}
          onChangeText={props.onChangeText}
          style={[
            styles.textInputStyle,
            props?.secureTextEntry && {width: 60 * vw},
            props?.textConStyle,
          ]}
          placeholder={props.placeHolder}
          placeholderTextColor={theme.defaultInactiveBorderColor}
          secureTextEntry={props.type ? true : false}
          onFocus={() => setFocus(true)}
          // keyboardType='email-address'
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry && !isShow}
          {...props}
        />
      </View>
    </View>
  );
};

export default AuthTextInput;
