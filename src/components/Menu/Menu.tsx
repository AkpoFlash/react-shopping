import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import t from '~/helpers/translator';
import Basket from '~/components/Basket/Basket';
import LangSelect from '~/components/LangSelect/LangSelect';
import { CARD_TYPE, LANGUAGES_TYPE } from '~/constants/types';

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

interface Props {
  card: CARD_TYPE;
  languages: LANGUAGES_TYPE;
}

export const Menu = (props: Props) => {
  const handleItemClick = () => {}

  return (
    <StyledMenu>
      <ul>
        <NavLink to='/'>
          <li>
            {t('Home')}
          </li>
        </NavLink>
        <NavLink to='/books'>
          <li>
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
};

const mapStateToProps = ({ card, languages }: Props) => ({
  totalPrice: card.items.reduce( (total, book) => total + book.price, 0),
  count: card.items.length,
  items: card.items,
  usersLang: languages.usersLang,
});

Menu.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  usersLang: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(React.memo(Menu));
