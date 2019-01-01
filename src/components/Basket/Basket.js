import React from 'react';
import styled from 'styled-components';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import uniqBy from 'lodash/uniqBy';

import { COLOR_GREEN, COLOR_RED } from '../../constants/styles';

const Item = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${ props => props.color };
`;

const Counter = styled.span`
  font-weight: bold;
  margin: 5px 0;
`;


const Basket = React.memo((props) => {
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
            <Item>
              <image avatar src={ book.image } />
              <div>
                <span>{book.title}</span>
                <span>{book.author}</span>
              </div>
              <div>
                <Button
                  color={ COLOR_GREEN }
                  onClick={ handleAddClick.bind(this, book) }>
                  +
                </Button>
                <Counter>
                  { dublicateBooksCount[book.id] }
                </Counter>
                <Button
                  color={ COLOR_RED }
                  onClick={ handleRemoveClick.bind(this, book) }>
                  -
                </Button>
              </div>
            </Item>
          </li>
        ) )
      }
    </ul>
  );
});

export default Basket;
