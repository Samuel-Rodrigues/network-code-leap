import * as yup from 'yup';

import { FORM_LOGIN_TYPE } from '~/utils';

export const initialValues: FormLogin = {
  email: '',
  password: '',
  username: '',
  formType: FORM_LOGIN_TYPE.SIGN_UP,
};

const validateEmailField = (formType: string) =>
  formType === FORM_LOGIN_TYPE.GUEST
    ? yup.string()
    : yup
        .string()
        .required('E-mail is required')
        .email('E-mail must be a valid e-mail');

const validatePasswordField = (formType: string) =>
  formType === FORM_LOGIN_TYPE.GUEST
    ? yup.string()
    : yup.string().required('Password is required');

const validateUsernameField = (formType: string) =>
  formType === FORM_LOGIN_TYPE.SIGN_IN
    ? yup.string()
    : yup.string().required('User name is required');

export const validationSchema = yup.object().shape({
  email: yup.string().when('formType', validateEmailField),
  password: yup.string().when('formType', validatePasswordField),
  username: yup.string().when('formType', validateUsernameField),
});

export const formTabs: LoginType[] = [
  { title: 'Create An Account', type: FORM_LOGIN_TYPE.SIGN_UP },
  { title: 'Welcome Back !', type: FORM_LOGIN_TYPE.SIGN_IN },
  { title: 'Guest', type: FORM_LOGIN_TYPE.GUEST },
];
