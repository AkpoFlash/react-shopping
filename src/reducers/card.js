import { removeBookByID } from '~/helpers/card';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch ( action.type ) {
    case 'ADD_BOOK':
      return {
        ...state,
        items: [ ...state.items, action.payload ],
      }
    case 'REMOVE_BOOK':
      return {
        ...state,
        items: removeBookByID([...state.items], action.payload),
      }
    default:
      return state;
  }
}
