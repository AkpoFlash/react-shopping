import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import * as moment from 'moment';

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
      vertical-align: top;
		}
  }
`;

const SubTitle = styled.div`
  font-size: 0.75rem;
`;

interface Props {
  card: CARD_TYPE;
  languages: LANGUAGES_TYPE;
  count: number,
  totalPrice: number,
  usersLang: string,
}

export const Menu = (props: Props) => {

  // Change
  moment.locale(props.usersLang.slice(0,-1));
  const dateCouldOrderGive = moment().add(7, 'd').startOf('d').add(12, 'h').fromNow();

  const handleItemClick = () => {
    /* TODO setState({ showBasket: !this.state.showBasket }); */
  }

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
          { props.count ?
            <li onClick={ handleItemClick }>
              {t('Basket')}: {props.totalPrice} {t('Currency')} (<b>{props.count}</b>)
              <SubTitle>
                {`${t('You can give book:')} ${dateCouldOrderGive}`}
              </SubTitle>
            </li>
            // <Basket {...props} />
            :
            t('Basket is empty')
          }
          {/* {t('Basket is empty')}
          <Popup
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
