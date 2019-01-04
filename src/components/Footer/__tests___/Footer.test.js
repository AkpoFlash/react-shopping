import React from 'react';
import { render } from 'enzyme';

import Footer from '../Footer';

describe('Footer', () => {
	const footer = render(<Footer />);

	it('should Footer not changed', () => {
		expect(footer).toMatchSnapshot();
	});
});