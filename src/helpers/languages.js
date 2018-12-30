import LANG from '../configs/languages';

const DetectedLang = (stateLang = '') => {
	const currentLang = stateLang || window.navigator.language;
	switch (currentLang.slice(0, 2).toLowerCase()){
		case 'ru':
			return LANG['ru'];
		case 'en':
			return LANG['en'];
		default:
			return LANG['en'];
	}
}

export default DetectedLang;
