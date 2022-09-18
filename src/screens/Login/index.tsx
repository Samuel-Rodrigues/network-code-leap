import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, TypedDispatch } from '~/stores';
import { showAlert } from '~/utils';

import { setUser } from '../../redux/usersSlice';

import { initialValues, validationSchema } from './formConfig';
import Login from './Login';

const LoginContainer = () => {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { user } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<TypedDispatch>();

  const toggleValidateAfterSubmit = () =>
    setValidateAfterSubmit(!validateAfterSubmit);

  const handleSubmit = ({ username }: FormLogin) => {
    let message = '';
    message = 'Welcome! 👋';
    dispatch(setUser(username));
    showAlert(message, 'success', 'Hello =)');
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
        isSubmitting={user.isSubmitting}
        toggleValidateAfterSubmit={toggleValidateAfterSubmit}
      />
    </Formik>
  );
};

export default LoginContainer;
