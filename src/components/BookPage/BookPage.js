import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import find from 'lodash/find';
import PropTypes from 'prop-types';

const Book = styled.div`
	width: 100%;
`;

const Image = styled.header`

`;

const Title = styled.header`

`;

const Author = styled.header`

`;

const Price = styled.header`

`;

const Rating = styled.header`

`;

export const BookPage = (props) => {
	const { id } = props.match.params;
	const book = find( props.books, { 'id': +id } );

	return (
		<Book>
			<Image src={ book.image } />
			<Title>
				{ book.title }
			</Title>
			<Author>
				{ book.author }
			</Author>
			<Price>
				{ book.price }
			</Price>
			<Rating>
				{ book.rating }
			</Rating>
		</Book>
	);
};

const mapStateToProps = ({ books }) => ({
	books: books.items,
});

BookPage.propTypes = {
	books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(React.memo(BookPage));