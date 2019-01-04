import React from 'react';
import { render } from 'enzyme';

import Filter from '../Filter';

describe('Filter', () => {
	const filter = render(Filter);

	it('should Filter not changed', () => {
		expect(filter).toMatchSnapshot();
	});
});