import React from 'react'
import { connect } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react'

import { t } from '../../helpers';
import { setFilter, setSearchQuery } from '../../actions/filter';

const Filter = (props) => {
  const activeItem = props.filterBy;

  const handleItemClick = (e, { name }) => {
    props.setFilter(name);
  }

  const handleSearchChange = (e) => {
    props.setSearchQuery( e.target.value );
  }

  return (
    <Menu secondary>
      <Menu.Item
        name='all'
        active={ activeItem === 'all' }
        onClick={ handleItemClick } >
        {t('All')}
      </Menu.Item>
      <Menu.Item
        name='popular'
        active={ activeItem === 'popular' }
        onClick={ handleItemClick } >
        {t('Popular')}
      </Menu.Item>
      <Menu.Item
        name='price_high'
        active={ activeItem === 'price_high' }
        onClick={ handleItemClick } >
        {t('Price (Expensive)')}
      </Menu.Item>
      <Menu.Item
        name='price_low'
        active={ activeItem === 'price_low' }
        onClick={ handleItemClick } >
        {t('Price (Cheap)')}
      </Menu.Item>
      <Menu.Item
        name='author'
        active={ activeItem === 'author' }
        onClick={ handleItemClick } >
        {t('Author')}
      </Menu.Item>
      <Menu.Item>
        <Input
          name='search'
          icon='search'
          value={ props.searchQuery }
          onChange={ handleSearchChange }
          placeholder={t('Search...')} />
      </Menu.Item>
    </Menu>
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
