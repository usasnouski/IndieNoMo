import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { UserCampaigns } from '../users/showpage_body/user_campaigns';
import ProfileNavbar from '../users/showpage_body/profile_navbar';

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestUser(this.props.match.params.userId)
    .then(this.props.requestUserInfo(this.props.match.params.userId));
  }

  render() {
    const { user, userInfo } = this.props.user;
    if (!user) {
      return null;
    }
    
    return(
      <div className="user-show-container">
        <div className="user-name-cont">
          <div className="user-name">
            <h1>{user.first_name} {user.last_name}</h1>
            </div>
        </div>
        <ProfileNavbar user={user} />
        <Switch>
          <Route exact path={`/individuals/${user.id}`} />
          <Route path={`/individuals/${user.id}/campaigns`}
            component={() => (<UserCampaigns userInfo={userInfo}/>)}
          />

        </Switch>
      </div>
    );
  }
}

export default ShowUser;
