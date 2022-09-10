import { createAsyncThunk } from '@reduxjs/toolkit';
import { CAREERS_ACTIONS_TYPE } from '~/utils';
import {
  createCareerReq,
  deleteCareerReq,
  editCareerReq,
  getCareersReq,
} from '../api/careers.api';

export const getCareers = createAsyncThunk(
  CAREERS_ACTIONS_TYPE.FETCH_CAREERS,
  async (offset?: number | undefined): Promise<CareersFetchResponse> => {
    return await getCareersReq(offset);
  },
);

export const createCareer = createAsyncThunk(
  CAREERS_ACTIONS_TYPE.CREATE_CAREER,
  async (career: Partial<Career>): Promise<Career> => {
    return await createCareerReq(career);
  },
);

export const editCareer = createAsyncThunk(
  CAREERS_ACTIONS_TYPE.EDIT_CAREER,
  async (career: Partial<Career>): Promise<Career> => {
    return await editCareerReq(career);
  },
);

export const deleteCareer = createAsyncThunk(
  CAREERS_ACTIONS_TYPE.DELETE_CAREER,
  async (id: number): Promise<void> => await deleteCareerReq(id),
);
