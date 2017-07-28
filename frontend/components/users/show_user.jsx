import React from 'react';

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
    const { user } = this.props.user;

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
      </div>
    );
  }
}

export default ShowUser;
