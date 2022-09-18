import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { REDUCERS_TYPE } from '~/utils';

export interface UserState {
  user: User;
  isSubmitting: boolean;
}

const INITIAL_STATE: UserState = {
  user: { username: '' } as User,
  isSubmitting: false,
};

export const userSlice = createSlice({
  name: REDUCERS_TYPE.USER,
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = { username: action.payload };
    },
    singOut: () => {
      return INITIAL_STATE;
    },
  },
});

export const { setUser, singOut } = userSlice.actions;
export default userSlice.reducer;
