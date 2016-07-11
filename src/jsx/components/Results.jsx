var React = require('react'),
    NoResults = require('./NoResults.jsx'),
    Pagination = require('./Pagination.jsx'),
    ResultItem = require('./ResultItem.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<section className='grid'>
        {this.props.programmes.map(function(programme) {
          return <ResultItem key={programme.getPid()} pid={programme.getPid()} title={programme.getTitle()} short_synopsis={programme.getShortSynopsis()} imagePid={programme.getImagePid()} />
        })}
        {this.props.programmes.length === 0? (this.props.firstSearch === false? <NoResults />: null) : <Pagination doSearch={this.props.doSearch} page={this.props.page} total={this.props.total} limit={this.props.limit} /> }
			</section>
		);
	}
});
