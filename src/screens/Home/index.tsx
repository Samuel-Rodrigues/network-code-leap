import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

import { getCareers } from '~/actions';
import { NavigationActions } from '~/services';
import { RootState } from '~/stores';
import { ROUTES_TYPE, showAlert } from '~/utils';
import Home from './Home';

const HomeContainer = () => {
  const { navigate } = NavigationActions;

  const dispatch = useDispatch<any>();
  const {
    career: { isSubmitting, list, offset },
    user: { user },
  } = useSelector((state: RootState) => state);

  const hasData = list.length > 0;

  const handleGetCareers = useCallback(async () => {
    try {
      await dispatch(getCareers(offset)).unwrap();
    } catch ({ message }) {
      showAlert(message as string, 'error');
    }
  }, [offset, dispatch]);

  const handleRefreshCareers = useCallback(async () => {
    try {
      await dispatch(getCareers(0)).unwrap();
    } catch ({ message }) {
      showAlert(message as string, 'error');
    }
  }, [dispatch]);

  const handleEditCareer = (career: Career) => {
    navigate(ROUTES_TYPE.POST_FORM, { career });
  };

  useFocusEffect(
    useCallback(() => {
      if (!hasData) {
        handleRefreshCareers();
      }
    }, [hasData, handleRefreshCareers]),
  );

  return (
    <Home
      handleEditCareer={handleEditCareer}
      handleGetCareers={handleGetCareers}
      handleRefreshCareers={handleRefreshCareers}
      hasData={hasData}
      list={list}
      isSubmitting={isSubmitting}
      offset={offset}
      user={user}
    />
  );
};

export default HomeContainer;
