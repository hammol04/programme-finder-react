var Dispatcher = require('../dispatcher/Dispatcher.jsx'),
    Constants = require('../constants/Constants.jsx'),
    SearchAction;

SearchAction = {
  doSearch: function(query, page, limit) {
    Dispatcher.dispatch({
      type: Constants.DO_SEARCH,
      query: query,
      page: page,
      limit: limit
    });
  }
};

module.exports = SearchAction;
