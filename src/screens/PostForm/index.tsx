import React from 'react';
import { Formik } from 'formik';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RouteProp } from '@react-navigation/native';

import { createCareer, deleteCareer, editCareer } from '~/actions';
import { NavigationActions } from '~/services';
import { RootState, TypedDispatch } from '~/stores';
import { ROUTES_TYPE, showAlert, useRoute } from '~/utils';

import { initialValues, validationSchema } from './formConfig';
import PostForm from './PostForm';

const PostFormContainer = () => {
  const { params } =
    useRoute<RouteProp<RootParamList, ROUTES_TYPE.POST_FORM>>();
  const { navigate } = NavigationActions;

  const {
    user: { user },
    career: { isSubmitting, isDeleting },
  } = useSelector((store: RootState) => store);
  const dispatch = useDispatch<TypedDispatch>();

  const initialDataValues = !!params?.career ? params.career : initialValues;

  const handleSubmit = async (form: Partial<Career>) => {
    const isCreate = !form?.id;

    try {
      if (isCreate) {
        await dispatch(
          createCareer({ ...form, username: user.username }),
        ).unwrap();
      } else {
        await dispatch(editCareer(form)).unwrap();
      }
      showAlert(`Successfully ${isCreate ? 'created 🎉' : 'edited'}`);
      navigate(ROUTES_TYPE.HOME);
    } catch ({ message }) {
      showAlert(message as string, 'error');
    }
  };

  const handleDelete = async () => {
    Alert.alert('Are you sure you want to delete this item?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'ok', onPress: deletePost },
    ]);
  };

  const deletePost = async () => {
    try {
      await dispatch(deleteCareer(params.career.id)).unwrap();
      navigate(ROUTES_TYPE.HOME);
      showAlert('Successfully deleted');
    } catch ({ message }) {
      showAlert(message as string, 'error');
    }
  };

  return (
    <Formik
      initialValues={initialDataValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <PostForm
        isSubmitting={isSubmitting}
        isDeleting={isDeleting}
        handleDelete={handleDelete}
      />
    </Formik>
  );
};

export default PostFormContainer;
