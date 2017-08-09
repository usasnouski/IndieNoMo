import React from 'react';

import { connect } from 'react-redux';
import { requestUserInfo } from '../../../actions/user_actions';

import UserCampaignTile from './user_campaigns_tile';

class UserCampaigns extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   debugger;
  //   // this.props.requestUserInfo(location.hash.match(/\d+/)[0]);
  // }
  createdCampaigns(userInfo) {
    return userInfo.created_campaigns.map(campaign =>
      (
      <UserCampaignTile key={campaign.id} campaign={campaign} />
      )
    );
  }

  render() {
    const { userInfo } = this.props;
    if (!userInfo) {
      return null;
    }
    // debugger;
    console.log(location.hash);
    return (
      <div className="user-name-cont profile-container">
        <div className="prof-campaigns-section">
          <h3>Campaigns I'm On</h3>
          <ul>
            {this.createdCampaigns(userInfo)}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserCampaigns;

// const mapStateToProps = ({ user }) => {
//   return ({
//     user: user
//   });
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestUserInfo: (id) => dispatch(requestUserInfo(id)),
//   }
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(UserCampaigns);
