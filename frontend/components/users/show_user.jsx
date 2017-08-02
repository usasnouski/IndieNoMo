import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';

import UserCampaigns from '../users/showpage_body/user_campaigns';
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

  profile(user) {
    if (location.hash === `#/individuals/${user.id}`) {
      return (
        <div className="profile-container user-name-cont">
          <div className="profile-content">
            <div className="prof-img">
              <img src="https://g1.iggcdn.com/assets/individuals/missing/success-cdf0c112abeaf33f41b24d37fe2b9990965bb9d06cb1d6242241c5165b4fdf5e.png"></img>
            </div>
            <div className="user-brief">
              <div className="about-me">
                <img src={user.profile_img} className="user-pic"></img>
                <span>About Me</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    const { user, userInfo } = this.props.user;
    if (!user) {
      return null;
    }

    return(
      <div className="user-show-container">
        <div className="user-name-cont">
          <div className="user-name-wrap">
            <h1 className="account-name">
              {user.first_name} {user.last_name}
            </h1>
          </div>
        </div>
        <ProfileNavbar user={user} />
        <Switch>
          <Route exact path={`/individuals/${user.id}`} />
          <Route path={`/individuals/${user.id}/campaigns`}
            component={() => (<UserCampaigns userInfo={userInfo}/>)}
          />
        </Switch>
        {this.profile(user)}
      </div>
    );
  }
}

export default ShowUser;
