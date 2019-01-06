import React from 'react';
import { render } from 'enzyme';

import { LangSelect } from '../LangSelect';

describe('LangSelect', () => {
	const langSelect = render(<LangSelect />);

	it('check LangSelect snapshot', () => {
		expect(langSelect).toMatchSnapshot();
	});
});