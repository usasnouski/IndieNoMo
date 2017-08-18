import React from 'react';

import { Link } from 'react-router';
import { CarouselTile } from './carousel_tile';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CampaignsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { campaigns: [], direction: 'left' };

    // this.slideToTheLeft = this.slideToTheLeft.bind(this);
    // this.slideToTheRight = this.slideToTheRight.bind(this);
  }

  componentDidMount() {
    // debugger;
    this.props.requestCarouselCampaigns()
      .then(() => {
        this.setState({ campaigns: this.props.carouselCampaigns });
      });

      window.addEventListener('animationend', this.slide.bind(this));
      this.intervalId = setInterval((e) => this.slideToTheLeft(), 7000);
  }

  componentWillUnmount() {
    window.removeEventListener('animationend', this.slide);
    clearInterval(this.intervalId);
  }

  carouselTiles() {

    return this.state.campaigns.map((campaign, idx) => {
    let className = (idx === 2 ? "center-tile" : "side-tile");

    let style = {
      backgroundImage: `url(${campaign.image_url})`
    };

    return (
      // <CarouselTile key={idx}
      //              campaign={campaign}
      //              idx={idx}
      //              func={this.handleClick}
      //              dir={this.state.direction} />
      // <div key={this.state.campaigns[idx]} className="carousel-tile" onClick={this.slideToTheLeft}>GOGA</div>

      <div key={idx} className={`carousel-tile ${this.state.direction}`} style={style} onClick={this.handleClick(idx)}>
        <div className={className}>
          <div className="carousel-tile-text">
            <h3>{campaign.title}</h3>
            <p>{campaign.tagline}</p>
          </div>

        </div>
      </div>
               );
    }
    );

    // return (<div>{b}</div>);
  }

  classDirection() {
    const { direction } = this.state;

    return (direction === 'left' ? 'sliding-left' : 'sliding-right');
  }

  handleClick(idx) {
    debugger;
    return (e) => {
      clearInterval(this.intervalId);
      if (idx === 1) {
        debugger;
        this.setState({ direction: 'left' });
      } else if (idx === 3) {
        this.setState({ direction: 'right' });
      }
    }
  }

  slide(e) {
    debugger;
    // if (e.animationName === '')
    const { direction } = this.state;
    if (direction === 'right') {
      this.slideToTheRight();
    } else if (direction === 'left') {
      this.slideToTheLeft();
    }
  }

  slideToTheLeft() {
    // debugger;
    const copyCarousel = this.state.campaigns.slice();
    copyCarousel.push(copyCarousel.shift());
    // debugger;
    this.setState({ campaigns: copyCarousel, direction: 'left' });
  }

  slideToTheRight() {
    const copyCarousel = this.state.campaigns.slice();
    copyCarousel.unshift(copyCarousel.pop());
    // debugger;
    this.setState({ campaigns: copyCarousel, direction: 'right' });
  }


  render() {
    // debugger;
    if (!this.props.carouselCampaigns[0] || this.state.campaigns === '') {
      return (<div>b </div>);
    }
    const items = this.carouselTiles();
    // debugger;
    return (
      <div className={`carousel-tiles ${this.classDirection()}`}>

          {items}

      </div>
    )
  }
}

export default CampaignsCarousel;
