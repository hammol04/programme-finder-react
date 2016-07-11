var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
      <button className='pagination__item' onClick={this.props.doSearch}>
        {this.props.page}
      </button>
		);
	}
});
