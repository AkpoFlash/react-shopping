import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { t } from '../../helpers';
import Basket from '../Basket/Basket';
import LangSelect from '../LangSelect/LangSelect';

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

  return (
    <StyledMenu>
      <ul>
        <NavLink to='/'>
          <li name='browse' onClick={handleItemClick}>
            {t('Home')}
          </li>
        </NavLink>
        <NavLink to='/books'>
          <li name='browse' onClick={handleItemClick}>
            {t('Books shop')}
          </li>
        </NavLink>
      </ul>
        

      <ul>
        <li>
          <LangSelect />
        </li>
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

const mapStateToProps = ({ card, languages }) => ({
  totalPrice: card.items.reduce( (total, book) => total + book.price, 0),
  count: card.items.length,
  items: card.items,
  usersLang: languages.usersLang,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
