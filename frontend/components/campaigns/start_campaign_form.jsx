import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class StartCampaignForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My campaign title...',
      goal_amount: 500,
      user_id: null,
      category_id: 86,
      launch: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field] : e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCampaign(this.state)
      .then(data => this.props.history.push(`campaigns/${data.campaign.id}/edit/`));
  }

  render() {
    return (
      <div className="start-camp-main">
        <div className="start-header">
          <h1>Start a campaign</h1>
          <div>Raise funds for creative, entrepreneurial, or other passion projects.</div>
        </div>
        <form className="start-camp-form" onSubmit={this.handleSubmit}>
          <div className="start-camp-section">
            <label>How much money would you like to raise?</label>
            <div className="goal-input">
              <span className="dollar-sign">$</span>
              <input
                type="text"
                min="500.0"
                pattern="\d+(\.\d{2})?"
                placeholder={this.state.goal_amount}

                onChange={this.update("target-amount")}/>
              <span className="usd">USD</span>
            </div>
            <div className="camp-start-undertext">Minimum $500.</div>
          </div>

          <div className="start-camp-section">
            <label>What is the title of your campaign?</label>
              <input className="start-camp-title"
                type="text"
                placeholder={this.state.title}
                onChange={this.update("title")}/>
              <div className="camp-start-undertext">
                50 characters maximum.
              </div>
          </div>

          <div className="start-camp-btn">
            <input type="submit" value="Create My Campaign"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(StartCampaignForm);
