import Axios from 'axios';
import {Config} from 'react-native-config';

export function unAuthenticatedInstance() {
  return Axios.create({
    baseURL: Config.API_URL,
  });
}

interface AuthenticatedParamType {
  headersProps?: object;
  params?: object;
}

export function authenticatedInstance({
  headersProps,
  params,
}: AuthenticatedParamType) {
  const headers = {
    ...headersProps,
  };

  const axios = Axios.create({
    baseURL: Config.API_URL,
    headers: headers,
    params,
  });
  return axios;
}

interface PostParamsType {
  headersProps?: object;
  body: object;
  route: string;
  isAuthenticated?: boolean;
  params?: object;
}
export function callPostAPI({
  route,
  body,
  isAuthenticated = true,
  headersProps = {},
  params,
}: PostParamsType) {
  if (isAuthenticated) {
    const requestInstance = authenticatedInstance({headersProps, params});
    return requestInstance.post(route, body);
  }
  const requestInstance = unAuthenticatedInstance();
  return requestInstance.post(route, body);
}

interface GetParamsType {
  route: string;
  isAuthenticated: boolean;
  params: object;
}
export function callGetAPI({
  route,
  params,
  isAuthenticated = true,
}: GetParamsType) {
  if (isAuthenticated) {
    const requestInstance = authenticatedInstance({params});
    return requestInstance.get(route);
  }
  const requestInstance = unAuthenticatedInstance();
  return requestInstance.get(route);
}
