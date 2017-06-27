import React from 'react';

class Story extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HOLA">STORY
        <form>
          <input type="text"
            placeholder={this.props.campaign.overview}
            onChange={this.props.handleUpdate('overview')}>
          </input>
        </form>
      </div>
    );
  }
}

export default Story;
