import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import CampaignIndexItem from './campaign_index_item';

class CampaignIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllCampaigns();
  }

  render() {
    const { campaigns } = this.props;
    return (
      <div className="campaigns">
          {campaigns.map(campaign => <CampaignIndexItem key={campaign.id} campaign={campaign} />)}
      </div>
    );
  }
}

export default withRouter(CampaignIndex);
