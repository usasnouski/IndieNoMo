import React from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

// import GreetingContainer from './greeting/greeting_container';
// import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import Homepage from './homepage/homepage_container';
import Footer from './footer/footer';
import CampaignIndexContainer from './campaigns/campaign_index_container';
import NewCampaignContainer from './campaigns/new_campaign_container';
import EditCampaignContainer from './campaigns/edit_campaign_container';
import ShowCampaignContainer from './campaigns/show_campaign_container';
import ShowUserContainer from './users/show_user_container';
import SearchContainer from './search/search_container';



const App = () => {
  return (
    <div>
      <NavBarContainer />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/campaigns/all" component={CampaignIndexContainer} />
        <ProtectedRoute exact path="/campaigns/:campaignId/edit/:formType" component={EditCampaignContainer} />
        <Route path="/campaigns/:campaignId" component={ShowCampaignContainer} />
        <ProtectedRoute exact path="/start-a-campaign" component={NewCampaignContainer} />
        <Route path="/individuals/:userId" component={ShowUserContainer} />
        <Route path='/search' component={SearchContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
