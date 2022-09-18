import * as yup from 'yup';

import { FORM_LOGIN_TYPE } from '~/utils';

export const initialValues: FormLogin = {
  username: '',
};

export const validationSchema = yup.object().shape({
  username: yup.string().required('Your username is a required'),
});

export const formTabs: LoginType[] = [
  { title: 'Guest', type: FORM_LOGIN_TYPE.GUEST },
];
