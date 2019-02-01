import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// Logger saga for testing 
function* loggerSaga(action) {
	try {
		const lang = yield call(() => console.log('Saga: language changed'), action.payload);
		//yield put({ type: "SET_LANGUAGE", lang: lang });
	} catch (e) {
		//yield put({ type: "SET_LANGUAGE", message: e.message });
	}
}

export function* languagesSaga() {
	yield takeEvery("SET_LANGUAGE", loggerSaga);
}