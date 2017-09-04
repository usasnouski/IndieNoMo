export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

import * as SearchAPIUtil from '../util/search_util';

export const receiveSearch = (searchResult) => {
  return {
    type: RECEIVE_SEARCH,
    searchResult
  };
};

export const implementSearch = (query) => (dispatch) => {
  return SearchAPIUtil.sendQuery(query)
  .then(query => dispatch(result => receiveSearch(result)));
}
