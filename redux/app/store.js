import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import counterReducer from '../slices/counterSlice';
import usersReducer from '../slices/userSlice';


export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      users: usersReducer,
    },
    devTools: true,
  });
export const wrapper = createWrapper(makeStore, { debug: true });
