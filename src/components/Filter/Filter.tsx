import * as React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { debounce } from 'lodash';
import * as PropTypes from 'prop-types';

import { t } from '~/helpers';
import { setFilter, setSearchQuery } from '~/actions/filter';
import { COLOR_GRAY } from '~/constants/styles';

const StyledFilter = styled.ul`
  width: 100%;
  height: 25px;
  grid-column: 1 / 5;
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
  background-color: ${ (props: any) => props['data-active'] ? COLOR_GRAY : 'inherit'};
`;

const Search = styled.input`
  box-sizing: border-box;
  height: 100%;
`;

export const Filter: React.FunctionComponent<any> = (props) => {
  const activeItem = props.filterBy;

  const perfomeChange = debounce(
    (e) => props.setSearchQuery(e.target.value),
    300
  );

  const handleItemClick = (e) => {
    props.setFilter( e.target.getAttribute('data-name') );
  }

  const handleSearchChange = (event) => {
    event.persist();
    perfomeChange(event);
  }


  return (
    <StyledFilter>
      <Item
        data-name='all'
        onClick={ handleItemClick }
        data-active={ activeItem === 'all' } >
        {t('All')}
      </Item>
      <Item
        data-name='popular'
        onClick={ handleItemClick }
        data-active={ activeItem === 'popular' } >
        {t('Popular')}
      </Item>
      <Item
        data-name='price_high'
        onClick={ handleItemClick }
        data-active={ activeItem === 'price_high' } >
        {t('Price (Expensive)')}
      </Item>
      <Item
        data-name='price_low'
        onClick={ handleItemClick }
        data-active={ activeItem === 'price_low' } >
        {t('Price (Cheap)')}
      </Item>
      <Item
        data-name='author'
        onClick={ handleItemClick }
        data-active={ activeItem === 'author' } >
        {t('Author')}
      </Item>
      <Search
        name='search'
        defaultValue={ props.searchQuery }
        onChange={ handleSearchChange }
        placeholder={t('Search...')} />
    </StyledFilter>
  )
};

const mapStateToProps = ({ filter, languages }) => ({
  filterBy: filter.filterBy,
  searchQuery: filter.searchQuery,
  usersLang: languages.usersLang,

});

const mapDispatchToProps = (dispatch) => ({
    setFilter: ( filter ) => dispatch(setFilter(filter)),
    setSearchQuery: ( value ) => dispatch(setSearchQuery(value)),
});

Filter.propTypes = {
  filterBy: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  usersLang: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Filter));