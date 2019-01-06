import React from 'react';

import { ShopWindow } from '../ShopWindow';

describe('Dumb ShopWindow', () => {
	const shopWindow = shallow(<ShopWindow />);

	it('check ShopWindow spapshot', () => {
		expect(shopWindow).toMatchSnapshot();
	});
});

//TODO tests for Connected component