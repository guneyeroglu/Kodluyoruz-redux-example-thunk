import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { project } from './reducer';

const store = configureStore({
  reducer: combineReducers({ project }),
  middleware: [thunk],
});

export default store;
