import { connect } from 'react-redux';
import PageTransition from '../components/PageTransition/PageTransition';

const mapState = (state) => ({
  isAnimated: state.toolNav.isAnimated,
});

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(PageTransition);