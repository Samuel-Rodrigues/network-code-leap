declare type LoginType = {
  title: string;
  type: 'Sign In' | 'Sign Up' | 'Guest';
};

declare type FormLogin = {
  email: string;
  password: string;
  username: string;
  formType: 'Sign In' | 'Sign Up' | 'Guest';
};
