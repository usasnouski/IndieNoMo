import React from 'react';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';


class CampaignTile extends React.Component {
  constructor(props) {
    super(props);

    this.daysLeft = this.daysLeft.bind(this);
  }

  convertMiliseconds(miliseconds, format) {
  var days, hours, minutes, seconds, total_hours, total_minutes, total_seconds;

  total_seconds = parseInt(Math.floor(miliseconds / 1000));
  total_minutes = parseInt(Math.floor(total_seconds / 60));
  total_hours = parseInt(Math.floor(total_minutes / 60));
  days = parseInt(Math.floor(total_hours / 24));

  seconds = parseInt(total_seconds % 60);
  minutes = parseInt(total_minutes % 60);
  hours = parseInt(total_hours % 24);

  switch(format) {
	case 's':
		return total_seconds;
		break;
	case 'm':
		return total_minutes;
		break;
	case 'h':
		return total_hours;
		break;
	case 'd':
		return days;
		break;
	default:
		return { d: days, h: hours, m: minutes, s: seconds };
  }
};

  daysLeft() {
    const endDate = this.props.campaign.end_date;

    let result;
    if (typeof endDate === 'number') {
      result = endDate - Date.now();
    } else {
      result = Date.parse(endDate) - Date.now();
    }

    const convertedMills = this.convertMiliseconds(result);
    return convertedMills['d'];
  }

  render() {
    const campaign = this.props.campaign;
    const progress = (campaign.current_amount * 100 / campaign.goal_amount)
    const progressPercent = `${Math.round(progress)}%`
    return (

        <div className="camp-tile">
          <Link className="tile-link" to={`/campaigns/${campaign.id}` }>

              <img className="tile-img" src={campaign.image_url}></img>

            <div className="tile-info">
              <div className="tile-title-tagline">
                <div>{campaign.title}</div>
                <div>{campaign.tagline}</div>
              </div>

              <div className="tile-bottom">
                <span>${campaign.goal_amount}</span>
                &nbsp;
                <span>USD</span>
                <div className="progress-bar" style={{width: `${progressPercent}`}} />
                <div className="progress-label">
                  <div className="tile-percent">{progressPercent}</div>
                  <div>{this.daysLeft()} days left</div>
                </div>
              </div>
            </div>
          </Link>
        </div>

    );
  }
};

export default CampaignTile;
