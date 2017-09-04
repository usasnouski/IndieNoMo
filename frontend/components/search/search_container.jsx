import { connect } from 'react-redux';
import { implementSearch } from '../../actions/search_actions';

import Search from './search';

const mapStateToProps = ({ search }) => {
  return ({
    search: search,
  })
};

const mapDispatchToProps = (dispatch) => ({
  implementSearch: (query) => dispatch(implementSearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
