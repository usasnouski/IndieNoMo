import React from 'react';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';

import Sidebar from './sidebar';
import Basics from './basics';
import Story from './story';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.campaignId),
      title: 'My Campaign Title',
      goal_amount: 500,
      tagline: ' ',
      description: '',
      overview: '',
      image_url: null,
      imageFile: null,
      end_date: null,
      user_id: null,
      category_id: 86,
      launch: false,
      tab: 'basics'
    }

    this.handleRedirectToBasics = this.handleRedirectToBasics.bind(this);
    this.handleRedirectToStory = this.handleRedirectToStory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.campaignId
    if (this.props.match.params.campaignIdstat) {
      this.props.requestSingleCampaign(parseInt(id));
    }
  }

  componentWillReceiveProps(nextProps) {
    // this.props.path !== nextProps.path
    if (nextProps.campaign && nextProps.campaign.id) {
      this.setState({
        id: nextProps.match.params.campaignId,
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

    this.props.history.push(`/campaigns/${this.state.id}/edit/basics`);
    // <Redirect push to={`campaigns/${this.props.id}/edit/basics`} />
  }

  handleRedirectToStory() {
    this.setState({
      tab: 'story'
    });

    this.props.history.push(`/campaigns/${this.state.id}/edit/story`);
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    }
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, image_url: fileReader.result });
    }

    if (file) { fileReader.readAsDataURL(file); }
  }

  updateDate() {
    return e => {
      this.setState({ ['end_date']: Date.parse(e.currentTarget.value) });
    }
  }

  handleSubmit() {
    // const isValid = this.validate();

    const formData = new FormData();

    this.props.campaign.keys.forEach(key => {
      if (!formData[key]) {
        formData.append(`campaign[${key}]`, this.state[key]);
      }
    });

    this.props.updateCampaign(formData)
      .then(this.props.history.push(`/campaigns/${this.state.id}`));
  }

  validate() {
    for (key in this.props.campaign) {
      if (!this.state[key]) {
        return false;
      }
    }

    this.setState({ launch: true });
    return true;
  }

  renderBasics() {
    return(
      <Basics
        campaign={this.state}
        handleSubmit={this.handleSubmit}
        handleUpdate={this.handleUpdate}
        updateFile={this.updateFile}
        updateDate={this.updateDate} />
    );
  }

  renderStory() {
    return (
      <Story campaign={this.state}
      handleUpdate={this.handleUpdate}
      updateFile={this.updateFile}/>
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
