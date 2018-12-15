import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addBookToCard, removeBookFromCard } from '../../actions/cards';

const BookCard = (props) => {
  const handleAddBookToCard = (e) => {
    props.addBookToCard(props);
  }
  return (
    <Card>
      <Image src={ props.image } />
      <Card.Content>
        <Card.Header>
          { props.title }
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            { props.author }
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span>
          { props.price }
          <Icon name='rub' />
        </span>
      </Card.Content>
      <Button onClick={ handleAddBookToCard }>Добавить в корзину { props.addedCount > 0 ? `(${ props.addedCount })`: '' }</Button>
    </Card>
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
