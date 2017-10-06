import React from 'react';

import CampaignTile from '../campaigns/campaign_index_item';
import SearchIcon from './search_icon';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.location.search.slice(3)
    }

    this.performSearch = this.performSearch.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.location.search === undefined) { return }
    this.props.implementSearch(this.state.query);
  }

  componentWillReceiveProps(nextProps) {
    const newQuery = this.props.history.location.search.slice(3);
    if (this.state.query !== newQuery) {
      this.setState({ query: newQuery }, this.performSearch);
    }
  }

  performSearch() {
    return this.props.implementSearch(this.state.query);
  }

  searchResult() {
    return this.props.search.map(campaign =>
      (<CampaignTile key={campaign.id} campaign={campaign} />)
    );
  }

  render() {
    let searchOutput = "Results for ";

    if (this.props.search.length === 0) {
      searchOutput = "Sorry, we couldn't find any campaigns for ";
    }

    return (
      <div className="search-page">
        <div className="cont">
          <div className="search-page-section">
            <div className="search-bar-container">
              <div>
                <p className="search-heading">
                  {searchOutput} <span className="search-query">{this.state.query}</span>
                </p>
              </div>
              <form className="search-bar-form">
                <input className="nav-search-input search-bar-field" placeholder="Search for campaigns"></input>
                <SearchIcon />
              </form>
            </div>
          </div>
          <div className="search-page-section">
            <div className="camp-list">
              {this.searchResult()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
