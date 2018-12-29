import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';

import { t } from '../../helpers';
import BookCard from '../BookCard/BookCard';

const StyledShopWindow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  grid-auto-columns: minmax(100px, 20%);
`;

const ShopWindow = (props) => {
	const { books, isReady } = props;

	return (
		<StyledShopWindow>
			{
			!isReady ? t('Loading...') :
				books.map((book, i) => (
					<Link to={`/books/${book.id}`} key={book.id}>
						<BookCard  {...book} />
					</Link>
				))
			}
		</StyledShopWindow>
	);

}

const sortBy = (books, filterBy, searchQuery) => {
	books = filter(books, (item) => isInclude(item, searchQuery));
	switch (filterBy) {
		case 'all':
			return books;
		case 'price_high':
			return orderBy(books, 'price', 'desc');
		case 'price_low':
			return orderBy(books, 'price', 'asc');
		case 'author':
			return orderBy(books, 'author', 'asc');
		default:
			return books;
	}
}

const isInclude = (item, searchQuery) => {
	return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
		item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
}

const mapStateToProps = ({ books, filter }) => ({
	books: sortBy(books.items, filter.filterBy, filter.searchQuery),
	isReady: books.isReady,
})

export default connect(mapStateToProps)(ShopWindow);