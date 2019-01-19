import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { setBooks } from '~/actions/books';
import { setFingerPrint } from '~/actions/fingerPrint';
import Menu from '~/components/Menu/Menu';
import Footer from '~/components/Footer/Footer';
import ShopWindow from '~/components/ShopWindow/ShopWindow';
import BookPage from '~/components/BookPage/BookPage';
import NotFound from '~/components/NotFound/NotFound';
import getFingerPrint from '~/helpers/fingerPrint';
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  GRID_SIDE_COLUMNS,
  GRID_GAP
} from '~/constants/styles';

const Container = styled.div`
	display: grid;
	grid-template-rows: ${ HEADER_HEIGHT } 1fr ${ FOOTER_HEIGHT };
	grid-template-columns: ${ GRID_SIDE_COLUMNS} 1fr ${ GRID_SIDE_COLUMNS };
  grid-row-gap: ${ GRID_GAP };
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  grid-column: 2;
  grid-row: 2;
  justify-items: center;
`;

export class App extends PureComponent {
  componentDidMount() {
    fetch('./books.json')
      .then( response => response.json() )
      .then( data => this.props.setBooks(data) );

    getFingerPrint()
      .then( response => this.props.setFingerPrint(response) );
  }

  render() {
    return (
      <Container>
        <Menu />
        <Content>

          <Switch>
            <Route path='/books' component={ ShopWindow } exact />
            <Route path='/books/:id' component={ BookPage } />
            <Route path='*' component={ NotFound } />
          </Switch>
          
        </Content>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = ({ languages }) => ({
  usersLang: languages.usersLang,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: items => dispatch(setBooks(items)),
  setFingerPrint: items => dispatch(setFingerPrint(items)),
});

App.propTypes = {
  usersLang: PropTypes.string.isRequired,
  setBooks: PropTypes.func.isRequired,
  setFingerPrint: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
