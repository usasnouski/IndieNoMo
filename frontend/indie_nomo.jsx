import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import { fetchAllCampaigns } from './util/campaign_util';
import { requestAllCampaigns } from './actions/campaign_actions';
window.fetchAllCampaigns = fetchAllCampaigns;
window.requestAllCampaigns = requestAllCampaigns;



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
