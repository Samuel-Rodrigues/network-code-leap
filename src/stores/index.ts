import { AnyAction, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';

import { REDUCERS_TYPE } from '~/utils';
import careerReducer from '../redux/careersSlice';
import userReducer from '../redux/usersSlice';

const combine = combineReducers({
  user: userReducer,
  career: careerReducer,
});

const persistConfig = {
  key: 'root-code-leap',
  storage: AsyncStorage,
  blacklist: [REDUCERS_TYPE.CAREER],
};

const persistedReducer = persistReducer(persistConfig, combine);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
