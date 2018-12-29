import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Menu from './Menu/Menu';
import Filter from './Filter/Filter.js';
import Footer from './Footer/Footer.js';
import { setBooks } from '../actions/books';
import ShopWindow from './ShopWindow/ShopWindow';
import BookPage from './BookPage/BookPage';

const Container = styled.div`
	display: grid;
	grid-template-rows: 50px 25px 1fr 50px;
	grid-template-columns: 25px 1fr 25px;
  grid-row-gap: 20px;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  grid-column: 2;
  grid-row: 3;
  justify-items: center;
`;

class App extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  componentDidMount() {
    fetch('./books.json')
      .then( response => response.json())
      .then(data => this.props.setBooks(data));
  }

  render() {
    return (
      <Container>
        <Menu />
        <Filter />
        <Content>

          <Switch>
            <Route path='/' component={ ShopWindow } exact />
            <Route path='/books/:id' component={ BookPage } />
          </Switch>
          
        </Content>
        <Footer />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setBooks: items => dispatch(setBooks(items)),
})

export default withRouter(connect(null, mapDispatchToProps)(App));
