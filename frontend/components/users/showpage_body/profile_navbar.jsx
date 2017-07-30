import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNavbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

   const { id } = this.props.user;
    return (
      <div>
        <Link to={`/individuals/${id}`}>Profile</Link>
        <Link to={`/individuals/${id}/campaigns`}>Campaigns</Link>
      </div>
    );
  }
}

export default ProfileNavbar;
