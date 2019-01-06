import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';

import { t } from '../../helpers';
import Filter from '../Filter/Filter.js';
import BookCard from '../BookCard/BookCard';

const StyledShopWindow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 25px 1fr;
  grid-gap: 25px;
  grid-auto-columns: minmax(100px, 20%);
`;

export const ShopWindow = (props) => {
	const { books, isReady } = props;

	return (
		<StyledShopWindow>
			<Filter />
			{
			!isReady ? t('Loading...') :
				books.map((book, i) => (
					<BookCard key={ book.id } { ...book } />
				))
			}
		</StyledShopWindow>
	);

};

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

ShopWindow.propTypes = {
	books: PropTypes.array.isRequired,
	isReady: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(React.memo(ShopWindow));