import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import index from './reducers/index'

const reducers = combineReducers({
  form: formReducer,
  index: index
})

const store = createStore(
  reducers
)

export default store;
