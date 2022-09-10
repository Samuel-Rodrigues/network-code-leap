import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_ACTIONS_TYPE } from '~/utils';

import {
  createUserAccountReq,
  signInAnonymouslyReq,
  signInReq,
  signOutReq,
} from '../api/user.api';

export const createUserAccount = createAsyncThunk(
  USER_ACTIONS_TYPE.CREATE_USER_ACCOUNT,
  async (formLogin: FormLogin) => {
    return await createUserAccountReq(formLogin);
  },
);

export const signInWithEmailAndPassword = createAsyncThunk(
  USER_ACTIONS_TYPE.SIGN_IN,
  async (formLogin: FormLogin) => {
    return await signInReq(formLogin);
  },
);

export const signInAnonymously = createAsyncThunk(
  USER_ACTIONS_TYPE.SIGN_IN_ANONYMOUSLY,
  async (formLogin: FormLogin) => {
    return await signInAnonymouslyReq(formLogin);
  },
);

export const signOut = createAsyncThunk(
  USER_ACTIONS_TYPE.SIGN_OUT,
  async () => await signOutReq(),
);
