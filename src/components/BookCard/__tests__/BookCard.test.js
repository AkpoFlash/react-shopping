import React from 'react';
import { render } from 'enzyme';

import BookCard from '../BookCard';

describe('BookCard', () => {
	const bookCard = render(BookCard);

	it('should BookCard not changed', () => {
		expect(bookCard).toMatchSnapshot();
	});
});