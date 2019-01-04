import React from 'react';
import { render } from 'enzyme';

import Menu from '../Menu';

describe('Menu', () => {
	const menu = render(Menu);

	it('should Menu not changed', () => {
		expect(menu).toMatchSnapshot();
	});
});