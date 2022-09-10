export enum USER_ACTIONS_TYPE {
  CREATE_USER_ACCOUNT = 'user/createUserAccount',
  SIGN_IN = 'users/signInWithEmailAndPassword',
  SIGN_IN_ANONYMOUSLY = 'users/signInAnonymously',
  LOGOUT = 'users/logout',
  SIGN_OUT = 'users/signOut',
  FORGOT_PASSWORD = 'users/forgotPassword',
}

export enum CAREERS_ACTIONS_TYPE {
  FETCH_CAREERS = 'careers/fetchCareers',
  CREATE_CAREER = 'careers/createCareers',
  EDIT_CAREER = 'careers/editCareers',
  DELETE_CAREER = 'careers/deleteCareers',
}
