var Dispatcher = require('../dispatcher/Dispatcher.jsx'),
    Constants = require('../constants/Constants.jsx'),
    Programmes = require('../programmes/Programmes.jsx'),
    assign = require('object-assign'),
    EventEmitter = require('events').EventEmitter;

// Extend EventEmitter
var SearchStore = assign({}, EventEmitter.prototype, {
  total: 0,
  page: 0,
  programmes: [],
  doSearch: function(query, page, limit) {
    var _this = this;
    // Do the programmes search
    Programmes.getProgrammes(query, page, limit).then(function(response) {
      _this.programmes = response.programmes;
      _this.total = response.meta.total;
      _this.page = response.meta.page;
      _this.emit('change');
    }).catch(function(err) {
      _this.programmes = [];
      _this.total = 0;
      _this.page = 0;
      _this.emit('change');
      throw new Error('Unable to fetch Programmes');
    });
  },
  getProgrammes: function() {
    return this.programmes;
  },
  getTotal: function() {
    return this.total;
  },
  getPage: function() {
    return this.page;
  },
  handleActions: function(action) {
    switch(action.type) {
      case Constants.DO_SEARCH:
        this.doSearch(action.query, action.page, action.limit);
        return;
      default:
        throw new Error('Don\'t know what to do here, sorry');
    }
  }
});

// Always run in the context of SearchStore
Dispatcher.register(SearchStore.handleActions.bind(SearchStore));

module.exports = SearchStore;
