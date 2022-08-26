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
import AuthTextInput from '../../components/TextInputs/AuthTextInput';
import {useDispatch} from 'react-redux';
import {addPost} from '../../redux/Api/post';
import Header from '../../components/Header';

const AddPostScreen = props => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const handleLogin = () => {
    let data = {
      title: title,
      body: description,
      // userId: 1,
    };
    addPost(data)
      .then(response => {
        props.navigation.navigate('postListScreen');
      })
      .catch(() => {});
  };
  const renderFields = () => {
    return (
      <View>
        <View style={styles.miniContainer}>
          <View style={styles.fieldsView}>
            <AuthTextInput
              value={title}
              onChangeText={text => setTitle(text)}
              placeHolder="Enter Title"
              label="TITLE"
            />
            <AuthTextInput
              value={description}
              onChangeText={text => setdescription(text)}
              placeHolder="Enter description"
              label="DESCRIPTION"
              multiline={true}
              textConStyle={{
                width: 85 * vw,
              }}
              Viewstyle={{
                height: 20 * vh,
                alignItems: 'flex-start',
              }}
            />
          </View>

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
      <Header title="Add Post" />

      {renderFields()}

      {/* </ImageBackground> */}
    </ScrollWrapper>
  );
};
export default AddPostScreen;
