import React from 'react';

import { Link } from 'react-router';

class CampaignsCarousel extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestCarouselCampaigns();
  }

  render() {
    if (!this.props.carouselCampaigns[0]) {
      return (<div>b </div>);
    }

    return (
      <div>{this.props.carouselCampaigns[0].title}</div>
    )
  }
}

export default CampaignsCarousel;
