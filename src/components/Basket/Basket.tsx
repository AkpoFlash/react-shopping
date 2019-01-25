import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { map } from 'lodash';
import { reduce } from 'lodash';
import { uniqBy } from 'lodash';

import t from '~/helpers/translator';
import { COLOR_WHITE, COLOR_GREEN, COLOR_RED } from '~/constants/styles';
import { addBookToCard, removeBookFromCard } from '~/actions/cards';

const List = styled.ul`
  background-color: ${ COLOR_WHITE };
  position: relative;
  z-index: 10;
  display: block;
`;

const Item = styled.li`
  background-color: ${ COLOR_WHITE };
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

interface Props {

}

const Basket = (props: any) => {
  const dublicateBooksCount = reduce(props.items, (result, book) => {
    result.hasOwnProperty(book.id) ? ++result[book.id] : result = { ...result, [book.id]: 1 };
    return result;
  }, {});

  const handleAddClick = (book, event) => {
    console.log(book);
    props.addBookToCard(book);
  }

  const handleRemoveClick = (book, event) => {
    console.log(book);
    props.removeBookFromCard(book.id);
  }
  console.log(props.items);
  return (
    <List>
      { 
        map(uniqBy(props.items, 'id'), (book: any) => (
          <Item key={ book.id }>
            <img src={ book.image } />
            <div>
              <span>{ book.title }</span>
              <span>{ book.author }</span>
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
        ))
    }
    </List>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  addBookToCard: book => dispatch(addBookToCard(book)),
  removeBookFromCard: book => dispatch(removeBookFromCard(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Basket));
