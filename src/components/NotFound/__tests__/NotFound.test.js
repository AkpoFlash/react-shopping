import React from 'react';

import NotFound from '../NotFound';

describe('Dumb NotFound', () => {
	const notFound = shallow(<NotFound />);

	it('check NotFound snapshot', () => {
		expect(notFound).toMatchSnapshot();
	});
});