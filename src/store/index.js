import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import { loadState } from '../helpers/localStorage';

const store = createStore(rootReducer, loadState(), composeWithDevTools(applyMiddleware(thunk)));

export default store;