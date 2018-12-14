export const addBookToCard = (book) => {
  return dispatch =>
    dispatch({
      type: 'ADD_BOOK',
      payload: book,
    });
}

export const removeBookFromCard = (id) => {
  return dispatch =>
    dispatch({
      type: 'REMOVE_BOOK',
      payload: id,
    });
}
