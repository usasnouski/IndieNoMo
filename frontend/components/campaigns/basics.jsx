import React from 'react';

class Basics extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendUpdate(e);
  }

  renderControllBar() {
    return (
      <div className="control-bar-area">
        <div className="control-bar">
          <div className="control-bar-content">
            <h1>Campaign / <span>Basics</span></h1>
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
    return (
      <div className="basics-scope">
        {this.renderControllBar()}
        <form onSubmit={this.props.goToStory} className="basics-form camp-form">
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
                <textarea className="text-field text-area-en basics-txt"
                  value={this.props.campaign.tagline}
                  onChange={this.props.handleUpdate('tagline')}/>
              </div>
              <div className="entre-field">
                <label>Campaign Card Image<span> *</span></label>
                <div className="field-sublabel">Upload an image that represents your campaign.
                  <br/>
                    640 x 640 recommended resolution, 220 x 220 minimum resolution.
                </div>
                <div className="image-wrapper">
                  <div className="entre-image">
                    <input type="file"
                      className="enter-image-file"
                      onChange={this.props.updateFile} />
                    <img src="http://www.iconsplace.com/icons/preview/7a69b3/slr-camera-256.png"
                      className="camera-img" />
                  </div>
                  <img className="camera-img" src={this.props.campaign.image_url} />
                </div>
              </div>
              <div className="entre-field">
                <label>Category<span> *</span></label>
                <div className="field-sublabel">
                  To help backers find your campaign, select a category
                  that best represents your project.
                </div>
                <select className="select-cat" placeholder="Select a category">
                  <option>Home</option>
                  <option>Phones & Accessories</option>
                  <option>Travel & Outdoors</option>
                  <option>Film</option>
                  <option>Community Projects</option>
                  <option>Health & Fitness</option>
                  <option>Fashion & Wearables</option>
                  <option>Tabletop Games</option>
                  <option>Music</option>
                  <option>Equity</option>
                  <option></option>
                </select>
              </div>
              <div className="entre-field">
                <label>Campaign Duration<span> *</span></label>
                  <div className="field-sublabel">How long will you
                    be running your campaign for?
                  </div>
                  <input type="date"
                    className="entre-duration"
                    onChange={this.props.updateDate()}/>
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

export default Basics;
