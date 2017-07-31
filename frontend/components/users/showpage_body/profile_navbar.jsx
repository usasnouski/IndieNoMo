import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: '',
      campaigns: '',
    }
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
   let profile, camps;

   if (location.hash.includes('campaigns')) {
     camps = 'i-tab-selected';
     profile = '';
   } else {
     profile = 'i-tab-selected';
     camps = '';
   }

    return (
      <div className="user-name-cont">
        <div className="tab-links">
          <div className={`i-tab ${profile}`}>
          <Link to={`/individuals/${id}`}>Profile</Link>
            </div>
          <div className={`i-tab ${camps}`}>
            <Link to={`/individuals/${id}/campaigns`}>Campaigns</Link>
            </div>
        </div>
      </div>
    );
  }
}

export default ProfileNavbar;
