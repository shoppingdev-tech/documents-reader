import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '@src/redux/hook';
import {fetchUserDetail, handleLogout} from '@src/redux/auth/slice';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getUserAvatarLetter, isEmpty} from '@src/utils/native';
import {styles} from './styles';

const ProfileScreen = () => {
  const user = useAppSelector(fetchUserDetail);
  const dispatch = useAppDispatch();

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(handleLogout());
    } catch (error) {
      console.error(error);
    }
  };

  const nameInitials =
    !isEmpty(user) &&
    !isEmpty(user.user.givenName) &&
    getUserAvatarLetter(user.user.givenName);

  return (
    <View style={styles.container}>
      <Text style={styles.profileName}>{nameInitials}</Text>
      <Text style={styles.username}>{user.user.name}</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
