import React from 'react';

import { BookPage } from '../BookPage';
import { props } from '../__mocks__/BookPage.js';

describe('Dumb BookPage', () => {

	const bookPage = shallow(<BookPage {...props} />);

	it('check BookPage snapshot', () => {
		expect(bookPage).toMatchSnapshot();
	});
});
