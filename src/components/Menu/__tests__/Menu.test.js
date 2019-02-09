import React from 'react';

import { Menu } from '../Menu';

describe('Dumb Menu', () => {
	const menu = shallow(<Menu usersLang='En' />);

	it('check Menu snapshot', () => {
		expect(menu).toMatchSnapshot();
	});
});