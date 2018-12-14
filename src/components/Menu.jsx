import React from 'react';
import { Menu as MenuBase, Popup } from 'semantic-ui-react';

import Basket from './Basket';

import './Menu.css';

const Menu = (props) => {

  const handleItemClick = (e) => {}

  return(
    <MenuBase>
      <MenuBase.Item name='browse' onClick={ handleItemClick }>
        Магазин книг
      </MenuBase.Item>

      <MenuBase.Menu position='right'>

        <Popup
          trigger={
              <MenuBase.Item name='help' onClick={ handleItemClick }>
                Корзина: { props.totalPrice } руб. (<b>{ props.count }</b>)
              </MenuBase.Item>
            }
          content={
            props.count
            ?  <Basket { ...props } />
            : <div>Ваша корзина пуста</div>
          }
          on='click'
          hideOnScroll
        />
      </MenuBase.Menu>
    </MenuBase>
  );
}

export default Menu;
