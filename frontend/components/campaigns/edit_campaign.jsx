import React from 'react';
import { Route, withRouter } from 'react-router-dom';

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
      category_id: 86,
      launch: false,
      tab: 'basics'
    }

    this.handleRedirectToBasics = this.handleRedirectToBasics.bind(this);
    this.handleRedirectToStory = this.handleRedirectToStory.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.campaignId
    if (this.props.match.params.campaignIdstat) {
      this.props.requestSingleCampaign(parseInt(id));
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

  handleRedirectToBasics() {
    this.setState({
      tab: 'basics'
    });
  }

  handleRedirectToStory() {
    this.setState({
      tab: 'story'
    });
  }

  render() {
    return (
      <div className="edit-p"><Sidebar
        handleRedirectToBasics={this.handleRedirectToBasics}
        handleRedirectToStory={this.handleRedirectToStory}
        campaign={this.state} />
      <div className="HOLA">"HOLA"</div>
      </div>
    )
  }
}

export default EditForm;
