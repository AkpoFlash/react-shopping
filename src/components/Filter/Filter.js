import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { t } from '../../helpers';
import { setFilter, setSearchQuery } from '../../actions/filter';
import { COLOR_GRAY } from '../../constants/styles';

const StyledFilter = styled.ul`
  width: 100%;
  height: 25px;
  grid-column: 2;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid ${ COLOR_GRAY };
  background-color: ${ props => props.active ? COLOR_GRAY : 'inherit'};
`;

const Search = styled.input`
  box-sizing: border-box;
  height: 100%;
`;

const Filter = (props) => {
  const activeItem = props.filterBy;

  const handleItemClick = (e) => {
    props.setFilter( e.target.getAttribute('name') );
  }

  const handleSearchChange = (e) => {
    props.setSearchQuery( e.target.value );
  }

  return (
    <StyledFilter>
      <Item
        name='all'
        onClick={ handleItemClick }
        active={ activeItem === 'all' } >
        {t('All')}
      </Item>
      <Item
        name='popular'
        onClick={ handleItemClick }
        active={ activeItem === 'popular' } >
        {t('Popular')}
      </Item>
      <Item
        name='price_high'
        onClick={ handleItemClick }
        active={ activeItem === 'price_high' } >
        {t('Price (Expensive)')}
      </Item>
      <Item
        name='price_low'
        onClick={ handleItemClick }
        active={ activeItem === 'price_low' } >
        {t('Price (Cheap)')}
      </Item>
      <Item
        name='author'
        onClick={ handleItemClick }
        active={ activeItem === 'author' } >
        {t('Author')}
      </Item>
      <Search
        name='search'
        value={ props.searchQuery }
        onChange={ handleSearchChange }
        placeholder={t('Search...')} />
    </StyledFilter>
  )
}

const mapStateToProps = (state) => ({
  filterBy: state.filter.filterBy,
  searchQuery: state.filter.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: ( filter ) => dispatch(setFilter(filter)),
    setSearchQuery: ( value ) => dispatch(setSearchQuery(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);