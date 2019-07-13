import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

export default function configStore(initialState = {}) {
  return createStore(rootReducer, initialState);
}