import React from 'react';
// import { Link } from 'react-router';
import { Route, Link } from 'react-router-dom';
import CampaignTile from '../campaigns/campaign_index_item';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCampaigns()
      .then(action => this.props.history.push('/'));
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  renderTiles() {
    let tilesArr = Object.values(this.props.campaign);

    let shufTiles = this.shuffle(tilesArr);
    let mappedArr = [];


    for (let i = 0; i <= 3; i++) {
      let campaign = tilesArr[i];
      mappedArr.push(<CampaignTile
      key={campaign.id}
      campaign={campaign} />);
    }


    return mappedArr;
  }


  render() {
    if (Object.keys(this.props.campaign).length === 0) { return null }

    return (
      <div>
      <div className="carousel-img">

      </div>
      <div className="homepage-discovery">
        <div className="camps-discover-bar">
          <div className="discovery-tabs">
            <Link to="/campaigns/all" className="see-all">See all</Link>
            <Link to="/">Top picks for you</Link>
            <Link to="/">Popular near you</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Tech & Innovation</Link>
            <Link to="/">Creative Works</Link>
          </div>
          <ul className="projects">{this.renderTiles()}</ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Homepage;
