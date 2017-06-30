import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendUpdate(e);
  }


  //render header in EditForm!!!!
  renderControllBar() {
    return (
      <div className="control-bar-area">
        <div className="control-bar">
          <div className="control-bar-content">
            <h1>Campaign / <span>Story</span></h1>
          </div>
          <div className="control-bar-controls">
            <button className="launch-btn btn-purple"
              onClick={this.props.handleSubmit}>
              Review & Launch
            </button>
          </div>
        </div>
      </div>
    );
  }


  render() {
    console.log("RENDER STORY");
    return (
      <div className="story-scope">
        {this.renderControllBar()}
        <form onSubmit={this.handleSubmit} className="basics-form story-form camp-form">
            <div className="entre-section">
              <div className="entre-header">Campaign Overview</div>
              <div className="entre-subheader">
                Introduce yourself, your background, your campaign and why
                it’s important to you. Express the magnitude of what contributors
                will help you achieve.
              </div>
              <div className="entre-field">
                <label>Campaign Overview<span> *</span></label>
                <div className="field-sublabel">Lead with a compelling
                  statement that describes your campaign and why it’s i
                  mportant to you, highlight key campaign features, and
                  remember - keep it short!
                 </div>
                <textarea className="text-field text-area-en overview"
                  value={this.props.campaign.overview}
                  onChange={this.props.handleUpdate('overview')}/>
              </div>
            </div>
            <div className="save-n-cont">
              <input type="submit" className="btn-purple launch-btn"
                value="Save & Continue"
              />
            </div>
        </form>
      </div>
    );
  }
}

export default Story;
