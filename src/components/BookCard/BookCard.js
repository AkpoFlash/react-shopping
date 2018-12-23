import React from 'react';
import { connect } from 'react-redux';
import { addBookToCard, removeBookFromCard } from '../../actions/cards';

import { t } from '../../helpers';
import './BookCard.scss';

const BookCard = (props) => {
  const handleAddBookToCard = (e) => {
    props.addBookToCard(props);
  }
  return (
    <div className='book-card'>
      <img className='book-card__image' src={ props.image } />
      <div className='book-card__content'>
        <header>
          { props.title }
        </header>
        <div>
          <span className='date'>
            { props.author }
          </span>
        </div>
      </div>
      <div className='book-card__content'>
        <span>
          { props.price }
          <svg className='book-card__currency'>
          </svg>
        </span>
      </div>
      <button
        className='book-card__button'
        onClick={ handleAddBookToCard }>
        {t('Add to basket')} { props.addedCount > 0 ? `(${ props.addedCount })`: '' }
      </button>
    </div>
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
