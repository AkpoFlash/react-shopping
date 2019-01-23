import * as React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import * as PropTypes from 'prop-types';

import t from '~/helpers/translator';
import LANG from  '~/configs/languages';
import { setLanguage } from '~/actions/languages';
import { LANGUAGES_TYPE, DISPATCH_TYPE } from '~/constants/types';

interface State {
	languages: LANGUAGES_TYPE;
}

interface Props {
	usersLang: string;	
	setLanguage(arg0: object): void;
}

export const LangSelect: React.FunctionComponent<any> = (props: Props) => {
	
	const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
		props.setLanguage({
			type: event.currentTarget.value,
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
};

const mapStateToProps = ({ languages }: State) => ({
	usersLang: languages.usersLang,
});

const mapDispatchToProps = (dispatch: DISPATCH_TYPE) => ({
	setLanguage: ( lang: string ) => dispatch(setLanguage(lang)),
});

LangSelect.propTypes = {
	usersLang: PropTypes.string.isRequired,
	setLanguage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LangSelect));
