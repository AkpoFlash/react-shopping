import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { orderBy, filter} from 'lodash';

import t from '~/helpers/translator';
import Filter from '~/components/Filter/Filter';
import BookCard from '~/components/BookCard/BookCard';
import { BOOK_TYPE, FILTER_TYPE } from '~/constants/types';

const StyledShopWindow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 25px 1fr;
  grid-gap: 25px;
  grid-auto-columns: minmax(100px, 20%);
`;

interface State {
	books: {
		items: Array<BOOK_TYPE>;
		isReady: boolean;
	}
	filter: FILTER_TYPE;
}

interface Props {
	books: Array<BOOK_TYPE>;
	isReady: boolean;
	filter: FILTER_TYPE;
}

export const ShopWindow = ({ books, isReady }: Props) => {
	return (
		<StyledShopWindow>
			<Filter />
			{
			!isReady ? t('Loading...') :
				books.map((book, i) => (
					<BookCard key={ book.id } book={ book } />
				))
			}
		</StyledShopWindow>
	);
};

const sortBy = (books: Array<BOOK_TYPE>, filterBy: string, searchQuery: string): Array<BOOK_TYPE> => {
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

const isInclude = (item: BOOK_TYPE, searchQuery: string): boolean => {
	return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
		item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
}

const mapStateToProps = ({ books, filter }: State) => ({
	books: sortBy(books.items, filter.filterBy, filter.searchQuery),
	isReady: books.isReady,
})

export default connect(mapStateToProps)(React.memo(ShopWindow));