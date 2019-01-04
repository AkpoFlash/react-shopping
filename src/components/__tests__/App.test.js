import React from 'react';
import { render } from 'enzyme';

import App from '../App';

describe('App', () => {
	const app = render(App);

	it('should App not changed', () => {
		expect(app).toMatchSnapshot();
	});
});