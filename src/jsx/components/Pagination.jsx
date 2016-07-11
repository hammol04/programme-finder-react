var React = require('react'),
		PaginationItem = require('./PaginationItem.jsx');

module.exports = React.createClass({
	getPagination: function() {
		var pagination = [];
		var totalPages = (this.props.total/(this.props.limit));
		for (var i = 1; i < totalPages; i++) {
			pagination.push(
				<PaginationItem key={i} doSearch={this.props.doSearch} page={i} />
			);
		}
		return pagination;
	},
	render: function() {
		return (
			<section className='pagination'>
				{this.getPagination().map(function(page) {
					return page;
				})}
			</section>
		);
	}
});
