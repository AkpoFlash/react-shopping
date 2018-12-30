import DetectedLang from './languages';
import store from '../store';

export default (message) => {
  let localization = DetectedLang(store.getState().languages.usersLang);
  return localization.data[message];
}
