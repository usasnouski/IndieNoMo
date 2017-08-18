import React from 'react';
import { Link } from 'react-router-dom';

export const CarouselTile = ({ campaign, dir, idx, func }) => {
  // debugger;
  const className = (idx === 2 ? "center-tile" : "side-tile");

  const style = {
    backgroundImage: `url(${campaign.image_url})`
  };

  return (
    <div className={`carousel-tile ${dir}`} style={style} onClick={func}>
      <div className={className}>
        <div className="carousel-tile-text">
          <h3>{campaign.title}</h3>
          <p>{campaign.tagline}</p>
        </div>
        <Link to={`/campaigns/${campaign.id}`}>SSSSS</Link>

      </div>
    </div>
  );
}
