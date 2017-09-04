import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    //let urlQuery = this.props.location.query;

    this.state = {
      query: this.props.location.search.slice(3)
    }
  }

  componentDidMount() {
    debugger;
    // let locationQuery = this.props.location.query;
  //   if (locationQuery.q === undefined) {
  //    return;
  //  }

  //  this.props.implementSearch(this.state);
   this.props.implementSearch(this.props.location.search.slice(3));
  }

  render() {
    debugger;
    return (
      <div>
      YO
    </div>
  );
  }
}

export default Search;
