import React from 'react';

import { connect } from 'react-redux';
import { requestUserInfo } from '../../../actions/user_actions';

const UserCampaigns = ({userInfo}) => {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   // this.props.requestUserInfo(location.hash.match(/\d+/)[0]);
  // }

    // const { userInfo } = this.props;
    if (!userInfo) {
      return null;
    }
    debugger;
    return (
      <div>{userInfo.created_campaigns[0].title}</div>
    );
};

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
