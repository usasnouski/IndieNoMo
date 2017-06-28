import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

class ShowCampaign extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.campaignId
    if (!this.props.campaign[id]) {
      this.props.requestSingleCampaign(id)
        .then(action => this.props.history.push(`/campaigns/${id}`));
    }
  }

  renderImageBox() {
    const { campaign } = this.props
    return (
      <div>

      </div>
    );
  }

  renderCampSummary() {
    const { campaign } = this.props
    return (
      <div className="camp-summary-scope">
        <div className="camp-media-box"></div>
        <div className="camp-summary-cont">
          <div className="camp-show-header">
            <div className="camp-title">{campaign.title}</div>
            <div className="camp-tagline">{campaign.tagline}</div>
            {this.renderCreatorBox()}
            {this.renderCampProgress()}
          </div>
        </div>
      </div>
    );
  }

  renderCreatorBox() {
    return (
      <div className="camp-creator">
        <img src="http://www.avatarsdb.com/avatars/homer_beer_belly.gif"
          className="creator-pic"/>
        <div className="creator-details">
          <div className="details-name">Creator Name</div>
          <div className="details-link">
            <Link to="/">About</Link>
          </div>
        </div>
      </div>
    );
  }

  renderCampProgress() {

  }

  render() {
    return (
      <div className="show-camp-scope">
        {this.renderCampSummary()}
        <div>
          <h1>CAMPAIGN IN DA HOUSE!!!!!!!</h1>
          <div>{this.props.campaign.title}</div>
        </div>
      </div>
    );
  }
}

export default ShowCampaign;
