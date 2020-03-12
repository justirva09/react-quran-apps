import actionType from './const';

const initState = {};

/**
 * @param { initialState } state
 * @param { api, type, value } action
 */

const request = (state = initState, action) => {
  switch(action.type) {
    case actionType.REQUEST_API:
      return {
        ...state,
        [action.api]: {
          ...state[action.api],
          isLoading: true,
          isError: false
        }
      }
    case actionType.REQUEST_API_SUCCESS:
      return {
        ...state,
        [action.api]: {
          ...state[action.api],
          isLoading: false,
          isError: false
        }
      }
    case actionType.REQUEST_API_FAILED:
      return {
        ...state,
        [action.api]: {
          ...state[action.api],
          isLoading: false,
          isError: true
        }
      }
    default:
      return state;
  }
}

export default request;