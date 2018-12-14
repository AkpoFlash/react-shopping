export const setFilter = (filter) => {
  return dispatch => {
    dispatch({
      type: 'SET_FILTER',
      payload: filter,
    })
  }
}

export const setSearchQuery = (value) => {
  return dispatch => {
    dispatch({
      type: 'SET_QUERY',
      payload: value,
    })
  }
}
