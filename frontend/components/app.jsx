import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from 'react-modal'

// import GreetingContainer from './greeting/greeting_container';
// import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import Homepage from './homepage/homepage_container';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import NewCampaignContainer from './campaigns/new_campaign_container';
import EditCampaignContainer from './campaigns/edit_campaign_container'

const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/campaigns/all" component={CampaignIndexContainer} />
      <Route exact path="/start-a-campaign" component={NewCampaignContainer} />
      <Route exact path="/campaigns/:campaignId/edit/:formType" component={EditCampaignContainer} />
    </div>
  );
}

export default App;
