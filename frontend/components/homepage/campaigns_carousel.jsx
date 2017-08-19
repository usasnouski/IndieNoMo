import React from 'react';

import { Link } from 'react-router-dom';
import { CarouselTile } from './carousel_tile';

class CampaignsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      campaigns: [],
      direction: 'left',
    };

    this.automaticSlide = this.automaticSlide.bind(this);
    this.performSlide = this.performSlide.bind(this);
  }

  automaticSlide() {
    this.setState({ active: true, direction: 'left' });
  }

  componentDidMount() {
    this.props.requestCarouselCampaigns();

    window.addEventListener('animationend', this.performSlide);
    this.intervalId = setInterval(this.automaticSlide, 7000);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ campaigns: newProps.carouselCampaigns });
  }

  componentWillUnmount() {
    window.removeEventListener('animationend', this.performSlide);
    clearInterval(this.intervalId);
  }

  carouselTiles() {
    return this.state.campaigns.map((campaign, idx) => {
    let tileClass = (idx === 2 ? "center-tile" : "side-tile");
    let movement = (this.state.active ? `slides-${this.state.direction}` : "");

    let style = {
      backgroundImage: `url(${campaign.image_url})`
    };

    return (
      <div key={idx}
           className={`carousel-tile ${movement}`}
           style={style}
           onClick={this.handleClick(idx).bind(this)}>
        <div className={`${tileClass} ${this.detailsVisibility(idx)}`}>
          <div className="carousel-tile-text">
            <h3>{campaign.title}</h3>
            <p>{campaign.tagline}</p>
          </div>
          <Link to={`campaigns/${campaign.id}`}>LEARN MORE</Link>
        </div>
      </div>
    );
    });
  }

  detailsVisibility(idx) {
    if (this.state.active) {
      const { direction } = this.state;

      if ((idx === 1 && direction === 'right') ||
          (idx === 3 && direction === 'left')) {
            return 'details-visible';
          }
      if (idx === 2) { return "details-invisible"; }
    }

    return "";
  }

  handleClick(idx) {
    return () => {
      clearInterval(this.intervalId);

      if (idx === 1) {
        this.setState({ active: true, direction: 'right' });
      } else if (idx === 3) {
        this.setState({ active: true, direction: 'left' });
      }
    }
  }

  performSlide(e) {
    e.stopPropagation();
    if (!this.state.active) return;

    const { direction } = this.state;

    if (e.animationName === 'slide-left' || e.animationName === 'slide-right') {
      if (direction === 'right') {
        this.slideToTheRight();
      } else if (direction === 'left') {
        this.slideToTheLeft();
      }
    }
  }

  slideToTheLeft() {
    const copyCarousel = this.state.campaigns.slice();
    copyCarousel.push(copyCarousel.shift());
    this.setState({ active: false, campaigns: copyCarousel });
  }

  slideToTheRight() {
    const copyCarousel = this.state.campaigns.slice();
    copyCarousel.unshift(copyCarousel.pop());
    this.setState({ active: false, campaigns: copyCarousel });
  }


  render() {
    const carouselTiles = this.carouselTiles();

    return (
      <div className={`carousel-tiles`}>
        {carouselTiles}
      </div>
    )
  }
}

export default CampaignsCarousel;
