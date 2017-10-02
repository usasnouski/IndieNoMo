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

  // renderSearchIcon() {
  //   return (
  //     <svg viewBox="0 0 26 26" width="100%" height="100%">
  //       <path d="M25.48 21.96l-4.693-4.587.107-.107c1.067-1.707 1.813-3.84
  //         1.813-5.973C22.6 5.213 17.587.2 11.507.2 5.32.2.307 5.213.307
  //         11.4c0 6.187 5.013 11.2 11.2 11.2 2.133 0 4.16-.64 5.76-1.707l4.693
  //         4.587a1.16 1.16 0 0 0 1.6 0l1.92-1.92a1.16 1.16 0 0 0 0-1.6zM3.507
  //         11.4c0-4.48 3.52-8 8-8 4.373 0 8 3.52 8 8 0 4.373-3.52 8-8 8-4.48-.107-8-3.627-8-8z"
  //         fillRule="evenodd"></path>
  //     </svg>
  //   );
  // }

  render() {
    debugger;
    let searchOutput = "Results for ";

    if (this.props.search.length === 0) {
      searchOutput = "Sorry, we couldn't find ant campaigns for ";
    }

    return (
      <div className="search-page">
        <div className="cont">
          <div className="search-page-header">
            <div className="search-bar-container">
              <div>
                <p className="search-heading">
                  {searchOutput} <span className="search-query">{this.state.query}</span>
                </p>
              </div>
              <form className="search-bar-form">
                <input className="nav-search-input search-bar-field"></input>
                <SearchIcon />
              </form>
              {this.searchResult()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
