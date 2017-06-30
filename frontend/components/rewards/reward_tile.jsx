import React from 'react';

class RewardTile extends React.Component {
  constructor(props) {
    super(props);

    this.submitPerk = this.submitPerk.bind(this);
  }

  submitPerk() {
    this.props.handleSubmit(this.props.reward.price)
  }

  render() {
    const { reward } = this.props;
    return (
      <div className="camp-perk">
        <div className="camp-perk-box" onClick={this.submitPerk}>
          <div className="perk-body">
            <div className="perk-amount">
              <div className="perk-value">${reward.price}</div>
              <div className="perk-currency">USD</div>
            </div>
            <div className="perk-body-title">{reward.title}</div>
            <div className="perk-meta">
              <div className="perk-description">{reward.description}</div>
            </div>
          </div>
          <div className="perk-get">Get this perk</div>
        </div>
      </div>
    );
  }
}

export default RewardTile;
