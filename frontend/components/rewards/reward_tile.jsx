import React from 'react';

class RewardTile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="camp-perk">
        <div className="camp-perk-box" onClick={this.props.handleSubmit}>
          <div className="perk-body">
            <div className="perk-amount">
              <div className="perk-value">${this.reward.price}</div>
              <div className="perk-currency"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
