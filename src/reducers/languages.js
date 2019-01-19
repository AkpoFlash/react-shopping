import { default as usersLang } from '~/helpers/languages';

const initialState = {
	usersLang: usersLang().type,
}

export default (state = initialState, action) => {
	switch(action.type){
		case 'SET_LANGUAGE':
			return {
				...state,
				usersLang: action.payload.type,
			}
		default:
			return state;
	}
}