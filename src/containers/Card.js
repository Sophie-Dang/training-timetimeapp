import { connect } from 'react-redux';
import Card from '../components/Card/Card';

const mapState = (state) => ({
  cards: state.card.cards,
});

const mapDispatch = (dispatch) => ({
  addCard: (payload) => {
    dispatch({type: 'card/addCard', payload: payload});
  },
  toggleCard: (payload) => {
    dispatch({type: 'card/toggleCard', payload: payload});
  },
});

export default connect(mapState, mapDispatch)(Card);