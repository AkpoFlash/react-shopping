import React from 'react';
import { List, Button, Image } from 'semantic-ui-react';
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
    <List selection divided verticalAlign='middle'>
      {
        map( uniqBy(props.items, 'id'), book => (
          <List.Item key={ book.id }>
            <List.Content className='card__item'>
              <Image avatar src={ book.image } />
              <List.Content>
                <List.Header>{ book.title }</List.Header>
                <List.Description>{ book.author }</List.Description>
              </List.Content>
              <List.Content>
                <Button
                  className='card__button'
                  color='green'
                  onClick={ handleAddClick.bind(this, book) }>
                  +
                </Button>
                <List.Description className='card__count'>
                  { dublicateBooksCount[book.id] }
                </List.Description>
                <Button
                  className='card__button'
                  color='red'
                  onClick={ handleRemoveClick.bind(this, book) }>
                  -
                </Button>
              </List.Content>
            </List.Content>
          </List.Item>
        ) )
      }
    </List>
  );
}

export default Basket;
