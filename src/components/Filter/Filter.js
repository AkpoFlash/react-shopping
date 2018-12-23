import React from 'react'
import { connect } from 'react-redux';

import { t } from '../../helpers';
import { setFilter, setSearchQuery } from '../../actions/filter';

const Filter = (props) => {
  const activeItem = props.filterBy;

  const handleItemClick = (e) => {
    props.setFilter( e.target.name );
  }

  const handleSearchChange = (e) => {
    props.setSearchQuery( e.target.value );
  }

  return (
    <ul className="filter">
      <li
        name='all'
        active={ activeItem === 'all' }
        onClick={ handleItemClick } >
        {t('All')}
      </li>
      <li
        name='popular'
        active={ activeItem === 'popular' }
        onClick={ handleItemClick } >
        {t('Popular')}
      </li>
      <li
        name='price_high'
        active={ activeItem === 'price_high' }
        onClick={ handleItemClick } >
        {t('Price (Expensive)')}
      </li>
      <li
        name='price_low'
        active={ activeItem === 'price_low' }
        onClick={ handleItemClick } >
        {t('Price (Cheap)')}
      </li>
      <li
        name='author'
        active={ activeItem === 'author' }
        onClick={ handleItemClick } >
        {t('Author')}
      </li>
      <li>
        <input
          name='search'
          icon='search'
          value={ props.searchQuery }
          onChange={ handleSearchChange }
          placeholder={t('Search...')} />
      </li>
    </ul>
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
