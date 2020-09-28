import * as types from '../actions/types';

export default (state, action) => { 
      switch(action.type) {
        case types.CREATE_EVENT:
          return undefined;      
        default:
          return { ...state, error: ""};
      }
    }