import React from 'react';
import { render } from 'enzyme';

import BookPage from '../BookPage';

describe('BookPage', () => {
	const bookPage = render(BookPage);

	it('should BookPage not changed', () => {
		expect(bookPage).toMatchSnapshot();
	});
});
