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
            <h1>Campaign /<span>Basics</span></h1>
          </div>
          <div className="control-bar-controls">
            <button className="launch-btn">Review & Launch</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="basics-scope">
        {this.renderControllBar()}
        
      </div>
    );
  }
}

export default Basics;
