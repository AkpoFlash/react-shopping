import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { t } from '../../helpers';
import Basket from '../Basket/Basket';

const StyledMenu = styled.nav`
	width: 100%;
	grid-column: 2;
	display: flex;
  justify-content: space-between;
  
	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		height: 100%;

		& li {
			text-align: center;
			box-sizing: border-box;
			display: inline-block;
			padding: 5px 15px;
			height: 100%;
		}
  }
`;

const Menu = (props) => {

  const handleItemClick = (e) => {}

  return(
    <StyledMenu>
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
    </StyledMenu>
  );
}

const mapStateToProps = (state) => ({
  totalPrice: state.card.items.reduce( (total, book) => total + book.price, 0),
  count: state.card.items.length,
  items: state.card.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
