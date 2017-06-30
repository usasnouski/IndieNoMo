import React from 'react';

import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRedirect(tabName) {
    e.preventDefault();
    this.setState({
      tab: tabName
    });
  }

  render() {
    const { tab, id } = this.props.campaign;
    const basicsClass = (tab === 'basics' ? 'active-tab' : 'passive-tab');
    const storyClass = (tab === 'story' ? 'active-tab' : 'passive-tab');
    const perksClass = (tab === 'perks' ? 'active-tab' : 'passive-tab');

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
            <li>
              <div className={basicsClass}>
                <button onClick={this.props.handleRedirectToBasics}>
                  1. &nbsp;Basics
                </button>
              </div>
            </li>
            <li>
              <div className={storyClass}>
                <button onClick={this.props.handleRedirectToStory}>
                  2. &nbsp;Story
                </button>
              </div>
            </li>
            <li>
              <div className={perksClass}>
                <button onClick={this.props.handleRedirectToPerks}>
                  3. &nbsp;Perks
                </button>
              </div>
            </li>
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
