import * as types from '../actions/types';

  
  const INITIAL_STATE = {};
  
  export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

      case types.CREATE_EVENT: {  
        return { ...state };
      }
        
      default:
        return { ...state, error: ""};
    }
  };