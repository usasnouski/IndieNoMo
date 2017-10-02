import React from 'react';

import CampaignTile from '../campaigns/campaign_index_item';

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

  render() {
    if (this.props.search.length === 0) {
      return null;
    }
    return (
      <div>
      YO {this.searchResult()}
    </div>
  );
  }
}

export default Search;
