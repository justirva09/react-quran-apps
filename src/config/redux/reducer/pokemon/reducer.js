import actionType from './const';

const initialState = {
  data: []
}

const pokemon = (state = initialState, action) => {
  switch(action.type) {
    case actionType.SET_POKEMON:
      return {
        ...state,
        data: action.value
      }
    case actionType.CLEAR_POKEMON:
      return {
        ...state,
        data: []
      }
    default:
      return state;
  }
}


export default pokemon;