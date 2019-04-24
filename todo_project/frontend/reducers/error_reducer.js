
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions'

function errorReducer(state=[], action) {

  switch (action.type) {
    case RECEIVE_ERRORS:
      
      return action.errors
  
    case CLEAR_ERRORS:

      return action.errors;

    default:
      return state;
  }
}

export default errorReducer;