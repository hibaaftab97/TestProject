import React, {useState} from 'react';
import {
  View,
  Dimensions,
  LayoutAnimation,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {vh, vw} from '../../units';
import ScrollWrapper from '../../components/ScrollWrapper';
import SubmitButton from '../../components/Buttons/SubmitButton';
import TextWrapper from '../../components/TextWrapper';
import AuthTextInput from '../../components/TextInputs/AuthTextInput';
import {userSignUp} from '../../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {showToast} from '../../redux/Api/HelperFunction';
import {validateEmail} from '../../utils';
import DatePicker from 'react-native-date-picker';
import {IMAGES} from '../../assets/images';
import moment from 'moment';

const FormScreen = props => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [gender, setGender] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectdate, setselectdate] = useState(0);

  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    const data = {
      name: name,
      email: email,
      gender: gender,
      birthday: date,
    };

    if (name == '') {
      showToast('Enter Name');
    } else if (email == '') {
      showToast('Enter email');
    } else if (selectdate == 0) {
      showToast('Select date of birth');
    } else if (!validateEmail(email)) {
      showToast('Please Enter a Valid Email');
    } else {
      dispatch(userSignUp(data));
    }
  };
  const renderFields = () => {
    return (
      <View>
        <View style={styles.miniContainer}>
          <View style={styles.fieldsView}>
            <View style={{alignItems: 'center'}}>
              <Image source={IMAGES.user} style={styles.userImg} />
            </View>
            <AuthTextInput
              value={name}
              onChangeText={text => setName(text)}
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
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.circle}>
                {gender == 0 && <View style={styles.innercircle}></View>}
              </View>
              <TextWrapper style={styles.gender}>Male</TextWrapper>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender(1)}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.circle}>
                {gender == 1 && <View style={styles.innercircle}></View>}
              </View>
              <TextWrapper style={styles.gender}>Female</TextWrapper>
            </TouchableOpacity>
          </View>

          <TextWrapper style={styles.label}>DATE OF BIRTH</TextWrapper>
          <TouchableOpacity
            style={styles.dateContainer}
            onPress={() => setOpen(true)}>
            <TextWrapper style={styles.textInputStyle}>
              {selectdate == 0
                ? 'Select your date of birth'
                : moment(date).format('D MMMM , YYYY')}
            </TextWrapper>
          </TouchableOpacity>
          <SubmitButton
            onPress={handleLogin}
            style={styles.submitButtonStyle}
            title="Submit"
          />
        </View>
      </View>
    );
  };
  return (
    <ScrollWrapper avoidKeyboard={true} contentContainerStyle={styles.content}>
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
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setselectdate(1);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {renderFields()}

      {/* </ImageBackground> */}
    </ScrollWrapper>
  );
};
export default FormScreen;
