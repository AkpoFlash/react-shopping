import { connect } from 'react-redux';
import BookCard from '../components/BookCard';
import { addBookToCard, removeBookFromCard } from '../actions/cards';

const mapStateToProps = (state, props) => ({
  addedCount: state.card.items.reduce( (count, book) => count + (book.id === props.id ? 1 : 0), 0),
});

const mapDispatchToProps = (dispatch) => ({
  addBookToCard: book => dispatch(addBookToCard(book)),
  removeBookFromCard: book => dispatch(removeBookFromCard(book)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
