import React from 'react';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


const CampaignIndexItem = ({ campaign }) => {
  return (
    <div className="camp-tile-layout">
      <div className="camp-tile">
        <Link className="tile-link" to={`/campaigns/${campaign.id}` }>

            <img className="tile-img" src={campaign.image_url}></img>

          <div className="tile-info">
            <div>{campaign.title}</div>
            <div>{campaign.tagline}</div>

          </div>
          <div className="tile-bottom">
            <span>${campaign.goal_amount} </span>
            <span>USD</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CampaignIndexItem;
