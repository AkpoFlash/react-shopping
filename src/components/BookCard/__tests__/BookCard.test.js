import React from 'react';

import { BookCard } from '../BookCard';

describe('Dumb BookCard', () => {
	const bookCard = shallow(<BookCard />);

	it('check BookCard snapshot', () => {
		expect(bookCard).toMatchSnapshot();
	});
});