export const setBooks = (books) => {
  return dispatch => 
    dispatch({
      type: 'SET_BOOKS',
      payload: books,
    });
}
