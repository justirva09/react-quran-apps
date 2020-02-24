import actionType from './const';

const initialState = {
  data: null,
  isLogin: false,
}


const user = (state = initialState, action) => {
  switch(action.type) {
    case actionType.FETCH_USER_LOGIN:
      return {
        ...state,
      }
    case actionType.SET_USER:
      return {
        ...state,
        data: action.value
      }
    default:
      return state;
  }
}


export default user;