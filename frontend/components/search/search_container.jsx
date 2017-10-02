import { connect } from 'react-redux';
import { implementSearch } from '../../actions/search_actions';
import { selectSearchedCampaigns } from '../../reducers/selectors';

import Search from './search';

const mapStateToProps = (state) => {
  return ({
    search: selectSearchedCampaigns(state),
  })
};

const mapDispatchToProps = (dispatch) => ({
  implementSearch: (query) => dispatch(implementSearch(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
