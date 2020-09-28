import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import eventFormReducer from './reducers/eventFormReducer.js'
import index from './reducers/index'
import * as types from './actions/types';


const reducers = combineReducers({
  // form: formReducer,
  form: formReducer.plugin({
    eventForm: eventFormReducer
  }),
  index: index
})

const store = createStore(
  reducers
)

export default store;
