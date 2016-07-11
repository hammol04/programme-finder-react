var AjaxPromise = require('ajax-promise'),
    Promise = require('promise'),
    Programme = require('./Programme.jsx');

var Programmes = {
  getProgrammes: function(query, page, limit) {
    var _this = this;
    var url = 'http://www.bbc.co.uk/radio/programmes/a-z/by/' + query + '/current.json?limit='+ limit +'&page=' + page;
    var promise = new Promise(function(resolve, reject) {
      AjaxPromise
        .get(url)
        .then(function (response) {
          resolve({
            'programmes': _this.transform(response),
            'meta': _this.getMetaData(response)
          });
        }).catch(function (error) {
          reject(error);
        });
    });

    return promise;
  },
  transform: function(response) {
    // Transform and pull out what we need
    var programmes = [];
    var filteredProgrammes = [];
    response.atoz.tleo_titles.map(function(tleo) {
      programmes.push(new Programme(tleo.programme));
    });

    programmes.map(function(programme) {
      if (programme.isAvailable()) {
        filteredProgrammes.push(programme);
      }
    });

    return filteredProgrammes;
  },
  getMetaData: function(response) {
    return {
      page: response.atoz.page,
      total: response.atoz.total
    };
  }
};

module.exports = Programmes;
