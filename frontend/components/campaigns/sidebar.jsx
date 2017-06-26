import React from 'react';

import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tab, id } = this.props.campaign;
    const className = (tab === 'basics' ? 'active-tab' : 'tab');

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
            <li><div className={className}><Link to={`/campaigns/${id}/edit/basics`}>1. &nbsp;Basics</Link></div></li>
            <li><div className="tab">2. &nbsp;Story</div></li>
            <li><div className="tab">3. &nbsp;Perks</div></li>
            <li><div className="tab">4. &nbsp;Items</div></li>
            <li><div className="tab">5. &nbsp;Team</div></li>
            <li><div className="tab">6. &nbsp;Funding</div></li>
            <li><div className="tab">7. &nbsp;Extras</div></li>
            <li><div className="tab">8. &nbsp;Indemand</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
