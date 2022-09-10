import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  createUserAccount,
  signInAnonymously,
  signInWithEmailAndPassword,
} from '~/actions';
import { RootState, TypedDispatch } from '~/stores';
import { FORM_LOGIN_TYPE, getAuthError, rangeScroll, showAlert } from '~/utils';

import { initialValues, validationSchema } from './formConfig';
import Login from './Login';
import { DIMENSION_WIDTH } from './styles';

const LoginContainer = () => {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const [formSelected, setFormSelected] = useState<string>(
    FORM_LOGIN_TYPE.SIGN_UP,
  );

  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<TypedDispatch>();

  const toggleValidateAfterSubmit = () =>
    setValidateAfterSubmit(!validateAfterSubmit);

  const handleSubmit = async (form: FormLogin) => {
    let message = '';

    try {
      if (formSelected === FORM_LOGIN_TYPE.SIGN_UP) {
        await dispatch(createUserAccount(form)).unwrap();
        message = 'Account created! 🎉';
      }

      if (formSelected === FORM_LOGIN_TYPE.SIGN_IN) {
        message = 'Welcome back! 👋';
        await dispatch(signInWithEmailAndPassword(form)).unwrap();
      }

      if (formSelected === FORM_LOGIN_TYPE.GUEST) {
        message = 'Welcome! 👋';
        await dispatch(signInAnonymously(form)).unwrap();
      }

      showAlert(message, 'success', 'Hello =)');
    } catch (error) {
      showAlert(getAuthError(error), 'error', '❌ :`(');
    }
  };

  const hasChangeSelectedForm = (scrollPosition: number, setErrors: any) => {
    if (scrollPosition == 0 && formSelected !== FORM_LOGIN_TYPE.SIGN_UP) {
      setFormSelected(FORM_LOGIN_TYPE.SIGN_UP);
      setErrors(initialValues);
    }

    if (
      rangeScroll(scrollPosition, DIMENSION_WIDTH) &&
      formSelected !== FORM_LOGIN_TYPE.SIGN_IN
    ) {
      setFormSelected(FORM_LOGIN_TYPE.SIGN_IN);
      setErrors(initialValues);
    }

    if (
      rangeScroll(scrollPosition, DIMENSION_WIDTH * 2) &&
      formSelected !== FORM_LOGIN_TYPE.GUEST
    ) {
      setFormSelected(FORM_LOGIN_TYPE.GUEST);
      setErrors(initialValues);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={validateAfterSubmit}
      enableReinitialize
    >
      <Login
        hasChangeSelectedForm={hasChangeSelectedForm}
        isSubmitting={user.isSubmitting}
        toggleValidateAfterSubmit={toggleValidateAfterSubmit}
      />
    </Formik>
  );
};

export default LoginContainer;
