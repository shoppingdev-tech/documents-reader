import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
import images from '@src/constants/images';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {styles} from './styles';
import {useAppDispatch} from '@src/redux/hook';
import {handelUserInfo} from '@src/redux/auth/slice';
import auth from '@react-native-firebase/auth';
import {loadingEnd, loadingStart} from '@src/redux/common/slice';

function LoginScreen(): JSX.Element {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      dispatch(loadingStart());
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();
      if (userData) {
        dispatch(handelUserInfo(userData));
      }
      const googleCredential = auth.GoogleAuthProvider.credential(
        userData.idToken,
      );
      dispatch(loadingEnd());
      try {
        return await auth().signInWithCredential(googleCredential);
      } catch (error) {
        console.error('🚀 ~ signIn ~ error:', error);
        dispatch(loadingEnd());
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.info('🚀 ~ signIn ~ SIGN_IN_CANCELLED:', error);
        dispatch(loadingEnd());
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.info('🚀 ~ signIn ~ IN_PROGRESS:', error);
        dispatch(loadingEnd());
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.info('🚀 ~ signIn ~ PLAY_SERVICES_NOT_AVAILABLE:', error);
        dispatch(loadingEnd());
      } else {
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text style={styles.title}>{t('Sign Up with Google')}</Text>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => {
            signIn();
          }}>
          <Image
            source={images.googleLogo} // Make sure to have a Google logo in your assets
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>
            {t('Continue with Google')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
