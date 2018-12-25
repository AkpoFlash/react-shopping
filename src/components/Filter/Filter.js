import React from 'react'
import { connect } from 'react-redux';

import { t } from '../../helpers';
import { setFilter, setSearchQuery } from '../../actions/filter';

const Filter = (props) => {
  const activeItem = props.filterBy;

  const handleItemClick = (e) => {
    props.setFilter( e.target.getAttribute('name') );
  }

  const handleSearchChange = (e) => {
    props.setSearchQuery( e.target.value );
  }

  return (
    <ul className='filter'>
      <li
        name='all'
        onClick={ handleItemClick }
        className={`filter__item ${activeItem === 'all' ? 'filter__item--active': ''}`} >
        {t('All')}
      </li>
      <li
        name='popular'
        onClick={ handleItemClick }
        className={`filter__item ${activeItem === 'popular' ? 'filter__item--active' : ''}`} >
        {t('Popular')}
      </li>
      <li
        name='price_high'
        onClick={ handleItemClick }
        className={`filter__item ${activeItem === 'price_high' ? 'filter__item--active' : ''}`} >
        {t('Price (Expensive)')}
      </li>
      <li
        name='price_low'
        onClick={ handleItemClick }
        className={`filter__item ${activeItem === 'price_low' ? 'filter__item--active' : ''}`} >
        {t('Price (Cheap)')}
      </li>
      <li
        name='author'
        onClick={ handleItemClick }
        className={`filter__item ${activeItem === 'author' ? 'filter__item--active' : ''}`} >
        {t('Author')}
      </li>
      <li>
        <input
          className='filter__search'
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
