const initialState = {
	fingerPrint: null,
}

export default (state = initialState, action) => {
	switch( action.type ){
		case 'SET_FINGER_PRINT':
			return {
				...state,
				fingerPrint: action.payload,
			};
		default:
			return state;
	}
} 