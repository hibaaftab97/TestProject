import React, {useState, useCallback} from 'react';
import {
  View,
  Dimensions,
  LayoutAnimation,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from './styles';
import {vh, vw} from '../../units';
import ScrollWrapper from '../../components/ScrollWrapper';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';
import {getPost} from '../../redux/Api/post';
import TextWrapper from '../../components/TextWrapper';
import SubmitButton from '../../components/Buttons/SubmitButton';
import Header from '../../components/Header';

const PostsScreen = props => {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const [refreshing, setrefreshing] = useState(true);

  useFocusEffect(
    useCallback(() => {
      getPost()
        .then(response => {
          setrefreshing(false);

          setPost(response.data);
        })
        .catch(() => {});
      return () => {};
    }, []),
  );
  const onRefresh = () => {
    setrefreshing(true);
    getPost()
      .then(response => {
        setrefreshing(false);

        setPost(response.data);
      })
      .catch(() => {});
  };

  const renderPost = ({item, index}) => {
    return (
      <View style={styles.postContainer}>
        <TextWrapper style={styles.title}>{item?.title}</TextWrapper>
        <TextWrapper style={styles.body}>{item?.body}</TextWrapper>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <Header title="Home" />
      <FlatList
        data={post}
        contentContainerStyle={{paddingHorizontal: 5 * vw}}
        renderItem={renderPost}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <View style={{paddingBottom: 2 * vh}}>
        <SubmitButton
          onPress={() => props.navigation.navigate('AddPostScreen')}
          style={styles.submitButtonStyle}
          title="Add new Post"
        />
      </View>
    </View>
  );
};
export default PostsScreen;
