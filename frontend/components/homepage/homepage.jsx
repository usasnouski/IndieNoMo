import React from 'react';
// import { Link } from 'react-router';
import { Route, Link } from 'react-router-dom';


class Homepage extends React.Component {
  render() {
    return (
      <div>
      <div className="carousel-img"></div>
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
        </div>
      </div>
      </div>
    );
  }
}

export default Homepage;
