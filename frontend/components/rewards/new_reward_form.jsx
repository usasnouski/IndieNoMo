import React from 'react';
import { withRouter } from 'react-router-dom';

class NewRewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Perk',
      description: '',
      price: 0,
      campaign_id: this.props.campaign.id
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  handleSubmit(e) {
    this.props.createReward(this.state)

    this.setState( {
      title: 'New Perk',
      description: '',
      price: 0,
      campaign_id: this.props.campaign.id
    } );
  }

  renderControllBar() {
    return (
      <div className="control-bar-area">
        <div className="control-bar">
          <div className="control-bar-content">
            <h1>Campaign / Perks / <span>Create New Perk</span></h1>
          </div>
          <div className="control-bar-controls">
            <button className="launch-btn btn-purple"
              onClick={this.handleSubmit}>
              Save Perk
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
    <div className="basics-scope">
      {this.renderControllBar()}
      <form className="basics-form camp-form">
          <div className="entre-section">
            <div className="entre-header">Perk Details</div>
            <div className="entre-subheader">
              Perks are incentives offered to backers in exchange for
              their support. You may edit your perk details until the
              perk is claimed.
            </div>
            <div className="entre-field">
              <label>Price<span> *</span></label>
              <div className="field-sublabel">
                Set an amount that you want to collect from backers who
                claim this perk. This amount should represent how much
                you want to receive for all the items included in this perk.
              </div>
              <input className="text-field"
                type="number"
                value={this.state.price}
                onChange={this.update('price')}/>
            </div>
            <div className="entre-field">
              <label>Title<span> *</span></label>
              <div className="field-sublabel">
                Set an amount that you want to collect from backers who
                claim this perk. This amount should represent how much
                you want to receive for all the items included in this perk.
              </div>
              <input className="text-field"
                type="text"
                value={this.state.title}
                onChange={this.update('title')}/>
            </div>
            <div className="entre-field">
              <label>Description<span> *</span></label>
              <div className="field-sublabel">Describe the details of this
                perk. Be creative, this is your opportunity to educate
                backers on what they will be receiving after they claim
                this perk.
               </div>
              <textarea className="text-field text-area-en overview"
                value={this.state.description}
                onChange={this.update('description')}/>
            </div>
          </div>
      </form>
    </div>
    );
  }
}

export default withRouter(NewRewardForm);
