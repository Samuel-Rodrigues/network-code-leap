import { createSlice } from '@reduxjs/toolkit';

import {
  createCareer,
  deleteCareer,
  editCareer,
  getCareers,
  signOut,
} from '~/actions';
import { REDUCERS_TYPE } from '~/utils';

export interface CareerState {
  list: Career[];
  offset: number;
  isSubmitting: boolean;
  isDeleting: boolean;
}

const INITIAL_STATE: CareerState = {
  isSubmitting: false,
  isDeleting: false,
  list: [],
  offset: 0,
};

export const careerSlice = createSlice({
  name: REDUCERS_TYPE.CAREER,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    //GET_CAREERS
    builder.addCase(getCareers.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(getCareers.fulfilled, (state, { payload, meta }) => {
      const { results } = payload;
      state.isSubmitting = false;

      const noDuplicatesItems = [
        ...new Map(
          state.list.concat(results).map((item) => [item['id'], item]),
        ).values(),
      ];

      const offset = meta.arg === 0 ? 10 : state.offset + 10;
      const list = meta.arg === 0 ? results : noDuplicatesItems;

      state.offset = offset;
      state.list = Array.from(new Set(list));
    });
    builder.addCase(getCareers.rejected, (state) => {
      state.isSubmitting = false;
    });

    // CREATE_CAREER
    builder.addCase(createCareer.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(createCareer.fulfilled, (state, { payload }) => {
      state.isSubmitting = false;
      state.list = [payload, ...state.list];
    });
    builder.addCase(createCareer.rejected, (state) => {
      state.isSubmitting = false;
    });

    // EDIT_CAREER
    builder.addCase(editCareer.pending, (state) => {
      state.isSubmitting = true;
    });
    builder.addCase(editCareer.fulfilled, (state, { payload }) => {
      state.isSubmitting = false;
      const updateList = state.list.map((career) => {
        if (career.id === payload.id) {
          return payload;
        }
        return career;
      });

      state.list = updateList;
    });
    builder.addCase(editCareer.rejected, (state) => {
      state.isSubmitting = false;
    });

    // DELETE_CAREER
    builder.addCase(deleteCareer.pending, (state) => {
      state.isDeleting = true;
    });
    builder.addCase(deleteCareer.fulfilled, (state, { meta }) => {
      const idDeleted = meta.arg;
      const updateList = state.list.filter(({ id }) => id !== idDeleted);

      state.isDeleting = false;
      state.list = updateList;
    });
    builder.addCase(deleteCareer.rejected, (state) => {
      state.isDeleting = false;
    });
    builder.addCase(signOut.fulfilled, () => INITIAL_STATE);
  },
});

export default careerSlice.reducer;
