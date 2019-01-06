import React from 'react';

import { Footer } from '../Footer';

describe('Footer', () => {
	const footer = shallow(<Footer />);

	it('check Footer snapshot', () => {
		expect(footer).toMatchSnapshot();
	});
});