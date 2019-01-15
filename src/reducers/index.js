import { combineReducers } from 'redux';

import books from './books';
import filter from './filter';
import card from './card';
import languages from './languages';
import fingerPrint from './fingerPrint';

export default combineReducers({
  books,
  filter,
  card,
  languages,
  fingerPrint,
});
