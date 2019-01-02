import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

import { t } from '../../helpers';
import LANG from  '../../configs/languages';
import { setLanguage } from '../../actions/languages';

const LangSelect = React.memo((props) => {
	
	const handleChangeLang = (e) => {
		props.setLanguage({
			type: e.currentTarget.value,
		});
	}

	return (
		<form >
			<select value={props.usersLang} onChange={ handleChangeLang }>
			{
				map(LANG, (item, i) => {
					return (
						<option 
							value={ item.type } 
							key={ item.type } >
							{t(item.type)}
						</option>
					);
				})
			}
			</select>
		</form>
	);
});

const mapStateToProps = ({ languages }) => ({
	usersLang: languages.usersLang,
});

const mapDispatchToProps = (dispatch) => ({
	setLanguage: ( lang ) => dispatch(setLanguage(lang)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect);
