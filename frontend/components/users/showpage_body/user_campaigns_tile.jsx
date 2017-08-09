import React from 'react';

import { Link } from 'react-router-dom';

const UserCampaignTile = ({ campaign }) => {
  // debugger;
  return (
   <div className="camps-on">
     <Link className="primary-img" to={`/campaigns/${campaign.id}`}>
       <img src={campaign.image_url} alt="Campaign Image"/>
     </Link>
     <div className="campaigns-content">
       <div className="campaign-title">
         <Link to={`/campaigns/${campaign.id}`}>{campaign.title}</Link>
         </div>
       <div className="campaign-author">
         by <Link to={`/individuals/${campaign.user_id}`}>Vlad</Link>
       </div>
     </div>
   </div>
  );
};

export default UserCampaignTile;
