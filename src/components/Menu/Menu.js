import React from 'react';
import { connect } from 'react-redux';
import { Menu as MenuBase, Popup } from 'semantic-ui-react';

import { t } from '../../helpers';
import Basket from '../Basket/Basket';

import './Menu.css';

const Menu = (props) => {

  const handleItemClick = (e) => {}

  return(
    <MenuBase>
      <MenuBase.Item name='browse' onClick={ handleItemClick }>
        {t('Books shop')}
      </MenuBase.Item>

      <MenuBase.Menu position='right'>

        <Popup
          trigger={
              <MenuBase.Item name='help' onClick={ handleItemClick }>
                {t('Basket')}: { props.totalPrice } {t('Currency')} (<b>{ props.count }</b>)
              </MenuBase.Item>
            }
          content={
            props.count
            ?  <Basket { ...props } />
          : <div>{t('Basket is empty')}</div>
          }
          on='click'
          hideOnScroll
        />
      </MenuBase.Menu>
    </MenuBase>
  );
}

const mapStateToProps = (state) => ({
  totalPrice: state.card.items.reduce( (total, book) => total + book.price, 0),
  count: state.card.items.length,
  items: state.card.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
