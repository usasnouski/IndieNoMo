import React from 'react';
import { NavLink } from 'react-router-dom'

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   profile: '',
    //   campaigns: '',
    // }
  }

  // componentDidMount() {
  //   if (location.hash.includes('campaigns')) {
  //     this.setState({ profile: '', campaigns: 'i-tab-selected' });
  //   } else {
  //     this.setState({ profile: 'i-tab-selected', campaigns: '' })
  //   }
  // }

  render() {
   const { id } = this.props.user;
  //  let profile, camps;

  //  if (location.hash.includes('campaigns')) {
  //    camps = 'i-tab-selected';
  //    profile = '';
  //  } else {
  //    profile = 'i-tab-selected';
  //    camps = '';
  //  }

    return (
      <div className="user-name-cont">
        <div className="tab-links">
          <div className="i-tab">
          <NavLink to={`/individuals/${id}`}
            className="i-tab-nonselected"
            exact activeClassName="i-tab-selected">
            Profile
          </NavLink>
            </div>
          <div className="i-tab">
            <NavLink to={`/individuals/${id}/campaigns`}
              className="i-tab-nonselected"
              activeClassName="i-tab-selected">
              Campaigns
            </NavLink>
            </div>
        </div>
      </div>
    );
  }
}

export default ProfileNavbar;
