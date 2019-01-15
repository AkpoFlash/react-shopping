export const setFingerPrint = (guid) => {
	return dispatch =>
		dispatch({
			type: 'SET_FINGER_PRINT',
			payload: guid,
		});	
};