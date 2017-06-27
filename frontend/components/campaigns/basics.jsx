import React from 'react';

class Basics extends React.Component {
  constructor(props) {
    super(props);
  }

  renderControllBar() {
    return (
      <div className="control-bar-area">
        <div className="control-bar">
          <div className="control-bar-content">
            <h1>Campaign / <span>Basics</span></h1>
          </div>
          <div className="control-bar-controls">
            <button className="launch-btn btn-purple">
              Review & Launch
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
              <div className="entre-header">Basics</div>
              <div className="entre-subheader">
                Make a good first impression: introduce your campaign
                objectives and entice people to learn more. This basic
                information will represent your campaign on your campaign
                page, on your campaign card, and in searches.
              </div>
              <div className="entre-field">
                <label>Campaign Title<span> *</span></label>
                <div className="field-sublabel">What is the title of your campaign?</div>
                <input className="text-field"
                  value={this.props.campaign.title}
                  onChange={this.props.handleUpdate('title')}/>
              </div>
              <div className="entre-field">
                <label>Campaign Tagline<span> *</span></label>
                <div className="field-sublabel">Provide a short description
                   that best describes your campaign to your audience.
                 </div>
                <textarea className="text-field text-area-en"
                  value={this.props.campaign.tagline}
                  onChange={this.props.handleUpdate('tagline')}/>
              </div>
            </div>
        </form>
      </div>
    );
  }
}

export default Basics;
