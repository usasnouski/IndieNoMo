import { connect } from 'react-redux';

import { createReward } from '../../actions/reward_actions';
import NewRewardForm from './new_reward_form';

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReward: (reward) => dispatch(createReward(reward)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRewardForm);
