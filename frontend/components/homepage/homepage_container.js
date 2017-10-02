import { connect } from 'react-redux';
import { requestAllCampaigns } from '../../actions/campaign_actions';
import { selectAllCampaigns } from '../../reducers/selectors';

import Homepage from './homepage.jsx';

const mapStateToProps = (state) => {
  return {
    campaigns: selectAllCampaigns(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllCampaigns : () => dispatch(requestAllCampaigns()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
