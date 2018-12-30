export const setLanguage = (userLang) => {
	return dispatch => dispatch({
		type: 'SET_LANGUAGE',
		payload: userLang,
	})
}