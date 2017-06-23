import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  campaign: CampaignReducer,
});

export default RootReducer;
