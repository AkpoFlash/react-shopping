import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addBookToCard, removeBookFromCard } from '../../actions/cards';
import { t } from '../../helpers';
import { COLOR_WHITE, COLOR_BLACK, COLOR_GRAY } from '../../constants/styles';

const StyledBookCard = styled.div`
	width: 170px;
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

const BookCard = (props) => {
  
  const handleAddBookToCard = (e) => {
    props.addBookToCard(props);
  }

  return (
    <StyledBookCard>
      <Image src={ props.image } />
      <Content>
        <ContentTitle>
          { props.title }
        </ContentTitle>
        <div>
          <span className='date'>
            { props.author }
          </span>
        </div>
      </Content>
      <Content>
        <Price>
          { props.price }
          <svg>

          </svg>
        </Price>
      </Content>
      <Button onClick={ handleAddBookToCard }>
        {t('Add to basket')} { props.addedCount > 0 ? `(${ props.addedCount })`: '' }
      </Button>
    </StyledBookCard>
  );
};

const mapStateToProps = (state, props) => ({
  addedCount: state.card.items.reduce( (count, book) => count + (book.id === props.id ? 1 : 0), 0),
});

const mapDispatchToProps = (dispatch) => ({
  addBookToCard: book => dispatch(addBookToCard(book)),
  removeBookFromCard: book => dispatch(removeBookFromCard(book)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
