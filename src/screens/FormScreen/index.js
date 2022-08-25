import React, { useState } from 'react';
import { View, Dimensions, LayoutAnimation, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { vh, vw } from '../../units';
import ScrollWrapper from '../../components/ScrollWrapper';
import SubmitButton from '../../components/Buttons/SubmitButton';
import TextWrapper from '../../components/TextWrapper';
import AuthTextInput from '../../components/TextInputs/AuthTextInput';
// import { userLogin } from '../../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { showToast } from '../../redux/Api/HelperFunction';
import { validateEmail } from '../../utils';
import DatePicker from 'react-native-date-picker'

const FormScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  //   const handleLogin = () => {
  //     const data = {
  //       email: email,
  //       password: password,
  //     };


  //     if (email == '') {
  //       showToast('Enter email');

  //     }
  //     else if (password == '') {
  //       showToast('Enter password');

  //     }
  //     else if (!validateEmail(email)) {
  //       showToast('Please Enter a Valid Email');
  //     }
  //     else {
  //       dispatch(userLogin(data)).then(response => {

  //         console.log('response?.status', response);
  //         if (response?.status) {
  //           // setVisible(!visible);
  //           // props.navigation.navigate('DrawerNavigator')


  //         }
  //       });
  //     }


  //   };
  const renderFields = () => {
    return (

      <View >

        <View style={styles.miniContainer}>


          <View style={styles.fieldsView}>
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your name"
              label="NAME"
            />
            <AuthTextInput
              value={email}
              onChangeText={text => setEmail(text)}
              placeHolder="Enter Your email"
              keyboardType="email-address"

              label="EMAIL"
            />

          </View>
          <TextWrapper style={styles.label}>GENDER</TextWrapper>
          <View style={styles.genderRow}>
            <TouchableOpacity
              onPress={() => setGender(0)}
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.circle}>
                {gender == 0 && <View style={styles.innercircle}>

                </View>}
              </View>
              <TextWrapper style={styles.gender}>Male</TextWrapper>

            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender(1)}
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.circle}>
                {gender == 1 && <View style={styles.innercircle}>

                </View>}
              </View>
              <TextWrapper style={styles.gender}>Female</TextWrapper>

            </TouchableOpacity>
          </View>

          <TextWrapper style={styles.label}>DATE OF BIRTH</TextWrapper>
          <TouchableOpacity style={styles.dateContainer}
          onPress={()=> setOpen(true)}>
            <TextWrapper style={styles.textInputStyle}>Select your date of birth</TextWrapper>
          </TouchableOpacity>
          <SubmitButton
            // onPress={handleLogin}
            style={styles.submitButtonStyle}
            title="Submit"
          />
        </View>

      </View>
    );
  };
  return (
    <ScrollWrapper avoidKeyboard={true}
      contentContainerStyle={styles.content}>
      {/* <ImageBackground
        style={{
          height: 100 * vh, width: 100 * vw,

          justifyContent: 'flex-end'
        }}
        resizeMode='cover'
        imageStyle={styles.scroll}
        source={require('../../../assets/images/aboutus.png')}> */}
      <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      {renderFields()}



      {/* </ImageBackground> */}
    </ScrollWrapper>


  );
};
export default FormScreen;
