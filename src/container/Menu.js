import { connect } from 'react-redux';
import Menu from '../components/Menu';
//import uniqBy from 'lodash/uniqBy';

const mapStateToProps = (state) => ({
  totalPrice: state.card.items.reduce( (total, book) => total + book.price, 0),
  count: state.card.items.length,
  items: state.card.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
