import React from 'react';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';

import Sidebar from './sidebar';
import Basics from './basics';
import Story from './story';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
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
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.campaignId
    if (this.props.match.params.campaignIdstat) {
      this.props.requestSingleCampaign(parseInt(id));
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.props.path !== nextProps.path
    if (nextProps.campaign && nextProps.campaign.title) {
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

    this.props.history.push(`/campaigns/${this.props.id}/edit/basics`);
    // <Redirect push to={`campaigns/${this.props.id}/edit/basics`} />
  }

  handleRedirectToStory() {
    this.setState({
      tab: 'story'
    });

    this.props.history.push(`/campaigns/${this.props.id}/edit/story`);
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  renderBasics() {
    return(
      <Basics campaign={this.state} handleUpdate={this.handleUpdate}/>
    );
  }

  renderStory() {
    return (
      <Story campaign={this.state} handleUpdate={this.handleUpdate}/>
    );
  }

  render() {
    const formType = this.props.match.params.formType;
    let tabPage = '';

    return (
      <div className="edit-p"><Sidebar
        handleRedirectToBasics={this.handleRedirectToBasics}
        handleRedirectToStory={this.handleRedirectToStory}
        campaign={this.state} />
      {formType === 'basics' ? this.renderBasics() : this.renderStory()}
      </div>
    )
  }
}

export default withRouter(EditForm);
