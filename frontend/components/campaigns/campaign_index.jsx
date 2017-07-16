import React from 'react';
import { withRouter, hashHistory } from 'react-router-dom';
import CampaignTile from './campaign_index_item';

class CampaignIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllCampaigns();
  }

  // selectLaunchedCamps() {
  //   let activeCampaigns = [];
  //   this.props.campaigns.forEach(campaign => {
  //     if (campaign.launch) {
  //       activeCampaigns.push(<CampaignTile
  //       key={campaign.id}
  //       campaign={campaign} />);
  //     }
  //   });
  //   return activeCampaigns;
  // }

  selectLaunchedCamps() {
    return this.props.launchedCamps.map(campaign =>
      (<CampaignTile key={campaign.id} campaign={campaign} />)
    );
  }

  render() {
    const { campaigns } = this.props;
    let launchedCampaigns = this.selectLaunchedCamps();
    debugger;
    return (
      <div className="allcamps-scope">
        <h1 className="all-header">Emerging tech starts here</h1>
        <div className="campaigns">
          <div className="allcamps-text">
            <span>Showing results for:</span>
            <span className="allcamps-span">All Campaigns</span>
          </div>
          <div className="camp-list">
          {launchedCampaigns}
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(CampaignIndex);
