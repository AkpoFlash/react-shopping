import React from 'react'
import { connect } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react'

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
        Все
      </Menu.Item>
      <Menu.Item
        name='popular'
        active={ activeItem === 'popular' }
        onClick={ handleItemClick } >
        Популярные
      </Menu.Item>
      <Menu.Item
        name='price_high'
        active={ activeItem === 'price_high' }
        onClick={ handleItemClick } >
        Цена (Дорогие)
      </Menu.Item>
      <Menu.Item
        name='price_low'
        active={ activeItem === 'price_low' }
        onClick={ handleItemClick } >
        Цена (Дешевые)
      </Menu.Item>
      <Menu.Item
        name='author'
        active={ activeItem === 'author' }
        onClick={ handleItemClick } >
        Автор
      </Menu.Item>
      <Menu.Item>
        <Input
          name='search'
          icon='search'
          value={ props.searchQuery }
          onChange={ handleSearchChange }
          placeholder='Поиск...' />
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
