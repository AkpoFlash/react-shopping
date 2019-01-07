import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import find from 'lodash/find';
import PropTypes from 'prop-types';

import { COLOR_WHITE, COLOR_BLACK, COLOR_GRAY, COLOR_TEXT } from '../../constants/styles';

const Book = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	max-width: 200px;
`;

const Title = styled.h1`
	margin: 10px 0 0;
`;

const Author = styled.h2`
	font-size: 1.2rem;
	color: ${ COLOR_GRAY };
	margin: 10px 0 10px;
`;

const Price = styled.div`
	svg {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: ${ COLOR_BLACK };
  }
`;

const Rating = styled.div`

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
				<svg>

				</svg>
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