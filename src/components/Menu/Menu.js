import React from 'react';
import { connect } from 'react-redux';

import { t } from '../../helpers';
import Basket from '../Basket/Basket';

const Menu = (props) => {

  const handleItemClick = (e) => {}

  return(
    <nav className="menu">
      <ul>
        <li name='browse' onClick={handleItemClick}>
          {t('Books shop')}
        </li>
        <li name='browse' onClick={handleItemClick}>
          {t('Books shop')}
        </li>
      </ul>
        

      <ul>
        <li>
          {t('Basket is empty')}
          {/* <Popup
            trigger={
                <li name='help' onClick={ handleItemClick }>
                  {t('Basket')}: { props.totalPrice } {t('Currency')} (<b>{ props.count }</b>)
                </li>
              }
            content={
              props.count
              ?  <Basket { ...props } />
            : <div>{t('Basket is empty')}</div>
            }
            on='click'
            hideOnScroll
          /> */}
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  totalPrice: state.card.items.reduce( (total, book) => total + book.price, 0),
  count: state.card.items.length,
  items: state.card.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
