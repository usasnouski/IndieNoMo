import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './sidebar';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My campaign title',
      goal_amount: 0,
      tagline: '',
      description: '',
      overview: '',
      end_date: null,
      user_id: null,
      campaign_id: 86,
      launch: false,
      tab: 'basics'
    }
  }

  componentDidMount() {
    let id = this.props.match.params.campaignId
    if (id) {
      this.props.requestSingleCampaign(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event.title) {
      this.setState({
        id: nextProps.match.params.id,
        title: nextProps.campaign.title,
        goal_amount: nextProps.campaign.goal_amount,
        tagline: nextProps.campaign.tagline,
        description: nextProps.campaign.description,
        overview: nextProps.campaign.overview,
        end_date: nextProps.campaign.end_date,
        user_id: nextProps.campaign.user_id,
        category_id: nextProps.campaign.category_id,
        launch: nextProps.campaign.launch,
      });
    }
  }

  render() {
    return (
      <div><Sidebar campaign={this.state} /></div>
    )
  }
}

export default EditForm;
