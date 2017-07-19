import React from 'react';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';

import Sidebar from './sidebar';
import Basics from './basics';
import Story from './story';
import Perks from '../rewards/create_reward_container';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: parseInt(this.props.match.params.campaignId),
      title: 'My Campaign Title',
      goal_amount: 500,
      tagline: '',
      description: ' ',
      overview: '',
      image_url: null,
      imageFile: null,
      end_date: '',
      category_id: 86,
      launch: false,
      tab: 'basics',
      rewards: []
    }

    this.handleRedirectToBasics = this.handleRedirectToBasics.bind(this);
    this.handleRedirectToStory = this.handleRedirectToStory.bind(this);
    this.handleRedirectToPerks = this.handleRedirectToPerks.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    let id = this.props.match.params.campaignId;
    if (this.props.match.params.campaignId) {
      this.props.requestSingleCampaign(parseInt(id))
      .then(() => {
        this.setState({
          title: this.props.campaign.title,
          goal_amount: this.props.campaign.goal_amount
        });
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

  handleRedirectToStory(e) {
    e.preventDefault();
    this.setState({
      tab: 'story'
    });

    this.props.history.push(`/campaigns/${this.state.id}/edit/story`);
  }

  handleRedirectToPerks(e) {
    e.preventDefault();
    this.setState({
      tab: 'perks'
    });

    this.props.history.push(`/campaigns/${this.state.id}/edit/perks`);
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
      let date = new Date(e.currentTarget.value);
      date = date.toString();
      this.setState({ ['end_date']: date });
    }
  }

  sendUpdate(e) {
    // if (!this.validate()) { return; }

    const formData = new FormData();
    let copyObj = Object.assign(this.state, {['launch']: true});

    Object.keys(copyObj).forEach(key => {
      if (!formData[key] && key !== 'tab') {
        formData.append(`campaign[${key}]`, copyObj[key]);
      }
    });

    this.props.updateCampaign(formData, this.props.campaign.id)
      .then(this.props.history.push(`/campaigns/${this.state.id}`));
  }

  validate() {

    for (let key in this.state) {
      if (!this.state[key] && key !== 'launch') {
        return false;
      }
    }

    return true;
  }

  renderBasics() {
    return(
      <Basics
        campaign={this.state}
        sendUpdate={this.sendUpdate}
        handleUpdate={this.handleUpdate}
        updateFile={this.updateFile}
        updateDate={this.updateDate}
        goToStory={this.handleRedirectToStory}/>
    );
  }

  renderStory() {
    return (
      <Story campaign={this.state}
      sendUpdate={this.sendUpdate}
      handleUpdate={this.handleUpdate}
      updateFile={this.updateFile}
      goToPerks={this.handleRedirectToPerks}/>
    );
  }

  renderPerks() {
    return(
      <Perks campaign={this.state}
        handleUpdate={this.handleUpdate}/>
    );
  }

  renderTab() {
    switch (this.state.tab) {
      case 'basics':
        return this.renderBasics();
      case 'story':
        return this.renderStory();
      case 'perks':
        return this.renderPerks();
      default:
        return this.renderBasics();
    }
  }

  render() {
    window.scrollTo(0, 0);
    const formType = this.props.match.params.formType;
    let tabPage = '';
    return (
      <div className="edit-p"><Sidebar
        handleRedirectToBasics={this.handleRedirectToBasics}
        handleRedirectToStory={this.handleRedirectToStory}
        handleRedirectToPerks={this.handleRedirectToPerks}
        campaign={this.state} />
      {this.renderTab()}
      </div>
    )
  }
}

export default withRouter(EditForm);
