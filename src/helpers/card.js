import findIndex from 'lodash/findIndex';

export const removeBookByID = (books, id) => {
  let firstBookIndex = findIndex(books, item => item.id === id);
  books.indexOf()
  firstBookIndex >= 0 && books.splice(firstBookIndex, 1);
  return books;
}
