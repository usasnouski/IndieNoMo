import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import CampaignReducer from './campaign_reducer';
import CarouselReducer from './carousel_reducer';
import ContributionReducer from './contribution_reducer';
import SearchReducer from './search_reducer';
import UserReducer from './user_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  campaign: CampaignReducer,
  carousel: CarouselReducer,
  contribution: ContributionReducer,
  search: SearchReducer,
  user: UserReducer,
});

export default RootReducer;
