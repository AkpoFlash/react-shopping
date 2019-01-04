import React from 'react';
import { render } from 'enzyme';

import NotFound from '../NotFound';

describe('NotFound', () => {
	const notFound = render(NotFound);

	it('should NotFound not changed', () => {
		expect(notFound).toMatchSnapshot();
	});
});