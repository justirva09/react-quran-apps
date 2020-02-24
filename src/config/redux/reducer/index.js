import { combineReducers } from 'redux';

//IMPORT REDUCER
import user from './user/reducer';
import pokemon from './pokemon/reducer';


export const reducer = combineReducers ({
  user,
  pokemon
});

// ACTION EXPORT
export * from './pokemon/action';
