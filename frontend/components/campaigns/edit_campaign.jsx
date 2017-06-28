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
      tagline: '',
      description: ' ',
      overview: '',
      image_url: null,
      imageFile: null,
      end_date: '',
      category_id: 86,
      launch: false,
      tab: 'basics'
    }

    this.handleRedirectToBasics = this.handleRedirectToBasics.bind(this);
    this.handleRedirectToStory = this.handleRedirectToStory.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    let id = this.props.match.params.campaignId
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
      let date = new Date(e.currentTarget.value);
      date = date.toString();
      this.setState({ ['end_date']: date });
    }
  }

  sendUpdate(e) {
    e.preventDefault();

    if (!this.validate()) { return; }
    debugger;
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
    debugger;
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
        updateDate={this.updateDate} />
    );
  }

  renderStory() {
    // debugger;
    return (
      <Story campaign={this.state}
      sendUpdate={this.sendUpdate}
      handleUpdate={this.handleUpdate}
      updateFile={this.updateFile}/>
    );
  }

  render() {
    const formType = this.props.match.params.formType;
    let tabPage = '';
    // debugger;
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
