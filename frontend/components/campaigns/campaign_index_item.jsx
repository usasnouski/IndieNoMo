import React from 'react';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


const CampaignIndexItem = ({ campaign }) => {
  return (
    <div className="camp-tile-layout">
      <div className="camp-tile">
        <Link to={`/campaigns/${campaign.id}`}>
          <div className="tile-pic">
            <img src={campaign.image_url}></img>
          </div>
          <div className="tile-info">
            <p>{campaign.title}</p>
            <p>{campaign.tagline}</p>

          </div>
          <div className="tile-bottom">
            <span>${campaign.goal_amount} USD</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CampaignIndexItem;
