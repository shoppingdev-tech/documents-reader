export type Login = {
  token: string;
};

export type LoginError = {
  error: string | null;
};

export type AuthState = {
  isLoggedIn: boolean;
  loadingStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string;
  userInfo: Object;
};
