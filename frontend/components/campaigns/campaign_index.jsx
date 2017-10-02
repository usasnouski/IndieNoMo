import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import CampaignTile from './campaign_index_item';

class CampaignIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestAllCampaigns();
  }

  // selectLaunchedCamps() {
  //   return this.props.launchedCamps.map(campaign =>
  //     (<CampaignTile key={campaign.id} campaign={campaign} />)
  //   );
  // }



  render() {
    const { campaigns } = this.props;

    const camps = campaigns.map(campaign =>
        (<CampaignTile key={campaign.id} campaign={campaign} />)
      );

    return (
      <div className="allcamps-scope">
        <h1 className="all-header">Emerging tech starts here</h1>
        <div className="campaigns">
          <div className="allcamps-text">
            <span>Showing results for:</span>
            <span className="allcamps-span">All Campaigns</span>
          </div>
          <div className="camp-list">
          {camps}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CampaignIndex);
