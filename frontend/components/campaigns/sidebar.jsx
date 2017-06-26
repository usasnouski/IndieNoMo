import React from 'react';

import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tab } = this.props.campaign;
    const className = (tab === 'basics' ? 'activeTab' : 'tab');

    return (
      <div className="sidebar-layout">
        <div className="sidebar">
          <div className="sidebar-header">
            <div className="sidebar-section">
              <div>Draft Campaign</div>
              <div className="sidebar-camp-title">{this.props.campaign.title}</div>
            </div>
          </div>
          <ul className="sidebar-list">
            <li>
              <div className='sbar-list-head'>Preview Campaign</div>
            </li>
            <li>
              <div className='sbar-list-head'>Campaign Editor</div>
              </li>
            <li><div>Basics</div></li>
            <li><div>Story</div></li>
            <li><div>Perks</div></li>
            <li><div>Items</div></li>
            <li><div>Team</div></li>
            <li><div>Funding</div></li>
            <li><div>Extras</div></li>
            <li><div>Indemand</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
