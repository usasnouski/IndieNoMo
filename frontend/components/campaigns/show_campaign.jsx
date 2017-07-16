import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

import RewardTile from '../rewards/reward_tile';

class ShowCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backIt: false,
      amount: 0,
      campaign_id: this.props.campaignId,
    }
    this.renderPerks = this.renderPerks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePerkSubmit = this.handlePerkSubmit.bind(this);
    this.handleOpenContributions = this.handleOpenContributions.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleCampaign(this.props.campaignId);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.campaignId !== nextProps.match.params.campaignId) {
  //     this.props.requestSingleCampaign(this.props.campaignId);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const contribution = Object.assign(
    {},
    {
      amount: this.state.amount,
      campaign_id: this.state.campaign_id
    });

    this.props.createContribution(contribution)
      .then(action => this.props.requestSingleCampaign(this.props.campaignId));
  }

  handlePerkSubmit(price) {
    this.props.createContribution({ amount: price, campaign_id: this.state.campaign_id })
      .then(action => this.props.requestSingleCampaign(this.props.campaignId));
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleOpenContributions() {
    this.setState({ backIt: true });
  }

  renderImageBox() {
    const { image_url } = this.props.campaign
    return (
      <div className="media-box">
        <img className="media-box-img" src={`${image_url}`}/>
      </div>
    );
  }

  renderCampSummary() {
    const { campaign } = this.props
    return (
      <div className="camp-summary-scope">
        <div className="camp-summary-cont">
          {this.renderImageBox()}
          <div className="camp-show-header">
            <div className="camp-title">{campaign.title}</div>
            <div className="camp-tagline">{campaign.tagline}</div>
            {this.renderCreatorBox()}
            {this.renderCampProgress()}
            {this.state.backIt === true ? this.renderContributionReady() : this.renderContributionNotReady()}
          </div>
        </div>
      </div>
    );
  }

  renderCreatorBox() {
    const { creator } = this.props.campaign;
    return (
      <div className="camp-creator">
        <img src="https://avatarko.ru/img/avatar/1/multfilm_gomer.png"
          className="creator-pic"/>
        <div className="creator-details">
          <div className="details-name">{creator.f_name} {creator.l_name}</div>
          Manhattan, NY
          <div className="details-link">
            <Link to="/">About</Link>
          </div>
        </div>
      </div>
    );
  }

  renderCampProgress() {
    const { progress } = this.props.campaign;
    const percentage = `${progress}%`;
    const backersNum = this.props.campaign.backers + '';
    const backersStr = (backersNum === '1' ? 'backer' : 'backers')
    return (
      <div className="camp-progress">
        <div className="progress-raised">
          <span className="total-amount">${this.props.campaign.current_amount} </span>
           USD
          <span> raised by {this.props.campaign.backers} {backersStr}</span>
        </div>
        <div className="camp-goal-bar">
          <div className="camp-prog-bar" style={{ width: `${percentage}`, maxWidth: '100%' }}></div>
        </div>
        <div className="camp-progress-details">
          <em>{percentage}</em> of ${this.props.campaign.goal_amount}
        </div>
      </div>
    )
  }

  renderContributionNotReady() {
    return (
      <div className="contribute-section">
        <div className="contribution-action">
          <div className="contr-non-active">
            <button className="open-contr-btn submit-btn" onClick={this.handleOpenContributions}>
              Back It
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderContributionReady() {
    return (
      <div className="contribute-section">
        <div className="contribution-action">
          <div className="contr-active">
            <form className="contribute-form" onSubmit={this.handleSubmit}>
              <input className="text-field contr-input"
                type="text"
                min="1.00"
                pattern="^\d+([,.][0-9]{1,2})?$"
                onChange={this.update('amount')}
                placeholder="Donation Amount"/>
              <input className="submit-btn cntr-btn" type="submit" value="CHECK OUT" />
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderOverview() {
    return (
      <div className="camp-overview">
        <div className="overview-header">
          <div className="-show-header-title">
            Overview
          </div>
        </div>
        <div className="overview-content">
          {this.props.campaign.overview}
        </div>
      </div>
    );
  }

  renderPerks() {
    const { rewards } = this.props.campaign;
    if (!rewards) { return null }
    const rewardTiles = rewards.map((reward, i) => (
      <RewardTile handleSubmit={this.handlePerkSubmit} key={i} reward={reward} />)
    );
    return rewardTiles;
  }

  render() {
    const { campaign } = this.props;
    if (!campaign) {
      return null;
    }

    return (
      <div className="show-camp-scope">
        {this.renderCampSummary()}
        <div className="show-camp-body">
          <div className="body-lead-section">
            {this.renderOverview()}
          </div>
          <div className="body-final-section">
            <div className="perks-list">
              <div className="perks-title">
                Perks
              </div>
              {this.renderPerks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowCampaign;
