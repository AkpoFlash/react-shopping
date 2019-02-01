import store from '~/store/store';
import DetectedLang from './languages';

export default (message) => {
  let localization = DetectedLang(store.getState().languages.usersLang);
  return localization.data[message];
}
