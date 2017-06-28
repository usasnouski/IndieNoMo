import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import ContributionReducer from './contribution_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaign: CampaignReducer,
  contribution: ContributionReducer,
});

export default RootReducer;
