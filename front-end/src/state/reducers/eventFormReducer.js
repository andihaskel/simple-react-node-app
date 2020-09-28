import * as types from '../actions/types';
  
export default (state, action) => { // <------ 'account' is name of form given to reduxForm()
      switch(action.type) {
        case types.CREATE_EVENT:
          return undefined;       // <--- blow away form data
        default:
          return state;
      }
    }