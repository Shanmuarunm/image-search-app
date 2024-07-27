import { combineReducers } from '@reduxjs/toolkit';
import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
