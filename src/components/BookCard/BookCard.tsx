import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import { addBookToCard, removeBookFromCard } from '~/actions/cards';
import { t } from '~/helpers';
import { COLOR_WHITE, COLOR_BLACK, COLOR_GRAY, COLOR_TEXT } from '~/constants/styles';

const StyledBookCard = styled.div`
  height: 100%;
	width: 100%;
	border: 1px solid ${ COLOR_GRAY };
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 100%;
	height: 200px;
	margin: 15px 0;
	object-fit: contain;
`;

const Content = styled.div`
	padding: 5px 10px;
	display: flex;
	flex-direction: column;
	border-top: 1px solid ${ COLOR_GRAY };
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${ COLOR_TEXT };
`;

const ContentTitle = styled.h4`
	font-weight: 700;
  font-size: 1rem;
  display: inline-block;
  margin: 0;
  word-wrap: break-word;
`;

const Price = styled.span`
  svg {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: ${ COLOR_BLACK };
  }
`;

const Button = styled.button`
	width: 100%;
	height: 35px;
	background: ${ COLOR_GRAY };
  color: ${ COLOR_WHITE };
  cursor: pointer;
`;

export const BookCard: React.FunctionComponent<any> = (props) => {
  const { id, title, author, price, image } = props;
  
  const handleAddBookToCard = (e) => {
    props.addBookToCard(props);
  }

  return (
    <StyledBookCard>
      <StyledLink to={`/books/${ id }`} >
        <Image src={ image } />
        <Content>
          <ContentTitle>
            { title }
          </ContentTitle>
          <div>
            <span className='date'>
              { author }
            </span>
          </div>
        </Content>
        <Content>
          <Price>
            { price }
            <svg>

            </svg>
          </Price>
        </Content>
      </StyledLink>
      <Button onClick={ handleAddBookToCard }>
        {t('Add to basket')} { props.addedCount > 0 ? `(${ props.addedCount })`: '' }
      </Button>
    </StyledBookCard>
  );
};

const mapStateToProps = ({ card, languages }, props) => ({
  addedCount: card.items.reduce( (count, book) => count + (book.id === props.id ? 1 : 0), 0),
  usersLang: languages.usersLang,
});

const mapDispatchToProps = (dispatch) => ({
  addBookToCard: book => dispatch(addBookToCard(book)),
  removeBookFromCard: book => dispatch(removeBookFromCard(book)),
})

BookCard.propTypes = {
  addedCount: PropTypes.number.isRequired,
  usersLang: PropTypes.string.isRequired,
  addBookToCard: PropTypes.func.isRequired,
  removeBookFromCard: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BookCard));
