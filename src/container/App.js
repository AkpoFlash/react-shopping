import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import orderBy from 'lodash/orderBy';
import filter from 'lodash/filter';

import Menu from '../container/Menu';
import BookCard from '../container/BookCard';
import Filter from './Filter.js';
import { setBooks } from '../actions/books';

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount(){
    fetch('/books.json')
      .then( response => response.json())
      .then( data => this.props.setBooks(data));
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <div className="App">
          <Card.Group itemsPerRow={4}>
            { !isReady ? 'Загрузка...' :
              books.map( ( book, i ) => (
                <BookCard key={i} { ...book } />
              ))
            }
          </Card.Group>
        </div>
      </Container>
    );
  }
}

const sortBy = (books, filterBy, searchQuery) => {
  books = filter(books, (item) => isInclude(item, searchQuery));
  switch (filterBy) {
    case 'all':
      return books;
    case 'price_high':
      return orderBy(books, 'price', 'desc');
    case 'price_low':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author', 'asc');
    default:
      return books;
  }
}

const mapStateToProps = ({ books, filter }) => ({
  books: sortBy(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
})

const mapDispatchToProps = (dispatch) => ({
  setBooks: items => dispatch(setBooks(items)),
})

const isInclude = (item, searchQuery) => {
  return item.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    item.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
