import React from 'react';
import { render } from 'enzyme';

import ShopWindow from '../ShopWindow';

describe('ShopWindow', () => {
	const shopWindow = render(ShopWindow);

	it('should ShopWindow not changed', () => {
		expect(shopWindow).toMatchSnapshot();
	});
});