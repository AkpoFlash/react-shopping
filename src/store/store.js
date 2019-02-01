import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/reducers';
import { loadState } from '~/helpers/localStorage';
import { languagesSaga } from '~/sagas/languages';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer, 
	loadState(), 
	composeWithDevTools(
		applyMiddleware(sagaMiddleware, thunk),
	)
);

sagaMiddleware.run(languagesSaga);

export default store;