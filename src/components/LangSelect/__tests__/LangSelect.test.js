import React from 'react';
import { render } from 'enzyme';

import LangSelect from '../LangSelect';

describe('LangSelect', () => {
	const langSelect = render(LangSelect);

	it('should LangSelect not changed', () => {
		expect(langSelect).toMatchSnapshot();
	});
});