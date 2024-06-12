import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import authSlice from '@redux/auth/slice';
import listSlice from '@redux/list/slice';
import loadingSlice from '@redux/common/slice';

const authPersistConfig = {
  key: 'auth',
  whitelist: ['isLoggedIn', 'userInfo'],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  list: listSlice,
  loading: loadingSlice,
});

export default rootReducer;
