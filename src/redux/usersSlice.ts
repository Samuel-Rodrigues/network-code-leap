import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { REDUCERS_TYPE } from '~/utils';

import {
  createUserAccount,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from '../actions/user.thunk';

export interface UserState {
  user: User;
  isSubmitting: boolean;
}

const INITIAL_STATE: UserState = {
  user: { username: '', email: '' } as User,
  isSubmitting: false,
};

export const userSlice = createSlice({
  name: REDUCERS_TYPE.USER,
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    setAnonymousUser: (state, action: PayloadAction<string>) => {
      state.user = { username: action.payload };
    },
  },
  extraReducers: (builder) => {
    //CREATE
    builder.addCase(createUserAccount.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(createUserAccount.fulfilled, (state, { payload }) => {
      state.isSubmitting = false;
      state.user = payload;
    });
    builder.addCase(createUserAccount.rejected, (state) => {
      state.isSubmitting = false;
    });
    //SIG_IN_WITH_EMAIL
    builder.addCase(signInWithEmailAndPassword.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(
      signInWithEmailAndPassword.fulfilled,
      (state, { payload }) => {
        state.isSubmitting = false;
        state.user = payload;
      },
    );
    builder.addCase(signInWithEmailAndPassword.rejected, (state) => {
      state.isSubmitting = false;
    });
    //SIG_IN_ANONYMOUSLY
    builder.addCase(signInAnonymously.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(signInAnonymously.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isSubmitting = false;
    });
    builder.addCase(signInAnonymously.rejected, (state) => {
      state.isSubmitting = false;
    });
    //SIGN_OUT
    builder.addCase(signOut.fulfilled, () => {
      return INITIAL_STATE;
    });
  },
});

export const { setUser, setAnonymousUser } = userSlice.actions;
export default userSlice.reducer;
