import React from 'react';

import { BookCard } from '../BookCard';

const book = {
	"id": 0,
	"test": 0,
	"title": "Происхождение",
	"author": "Дэн Браун",
	"image": "https://cv7.litres.ru/sbc/33231270_cover_185-elektronnaya-kniga-den-braun-proishozhdenie-27624091.jpg",
	"price": 710,
	"rating": 3
}

describe('Dumb BookCard', () => {
	const bookCard = shallow(<BookCard key={ book.id } book={ book } />);

	it('check BookCard snapshot', () => {
		expect(bookCard).toMatchSnapshot();
	});
});