import React from 'react';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import uniqBy from 'lodash/uniqBy';

const Basket = (props) => {
  const dublicateBooksCount = reduce(props.items, (result, book) => {
    result.hasOwnProperty(book.id) ? ++result[book.id] : result = { ...result, [book.id]: 1 };
    return result;
  }, {});

  const handleAddClick = (book, event) => {
    book.addBookToCard(book);
  }

  const handleRemoveClick = (book, event) => {
    book.removeBookFromCard(book.id);
  }

  return (
    <ul selection divided verticalAlign='middle'>
      {
        map( uniqBy(props.items, 'id'), book => (
          <li key={ book.id }>
            <div className='card__item'>
              <image avatar src={ book.image } />
              <div>
                <span>{book.title}</span>
                <span>{book.author}</span>
              </div>
              <div>
                <button
                  className='card__button'
                  color='green'
                  onClick={ handleAddClick.bind(this, book) }>
                  +
                </button>
                <span className='card__count'>
                  { dublicateBooksCount[book.id] }
                </span>
                <button
                  className='card__button'
                  color='red'
                  onClick={ handleRemoveClick.bind(this, book) }>
                  -
                </button>
              </div>
            </div>
          </li>
        ) )
      }
    </ul>
  );
}

export default Basket;
