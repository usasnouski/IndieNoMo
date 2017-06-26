import React from 'react';

import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tab, id } = this.props.campaign;
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
            <li><div className="{className}"><Link to={`\campaigns\${id}\edit\basics`}>Basics</Link></div></li>
            <li><div className="tab">Story</div></li>
            <li><div className="tab">Perks</div></li>
            <li><div className="tab">Items</div></li>
            <li><div className="tab">Team</div></li>
            <li><div className="tab">Funding</div></li>
            <li><div className="tab">Extras</div></li>
            <li><div className="tab">Indemand</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
