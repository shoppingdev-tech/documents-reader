import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const getCurrentLocation = async () => {
  if (Platform.OS !== 'ios') {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            const {latitude, longitude} = position.coords;
            resolve({latitude, longitude});
          },
          e => {
            const error: any = new Error();
            error.code = 'location';
            error.message = e.message;
            reject(error);
          },
        );
      });
    }
  } else {
    return new Promise((resolve, reject) => {
      Geolocation.requestAuthorization('whenInUse');
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          resolve({latitude, longitude});
        },
        e => {
          const error: any = new Error();
          error.code = 'location';
          error.message = e.message;
          reject(error);
        },
      );
    });
  }
};

export function isIOS() {
  return Platform.OS === 'ios';
}
