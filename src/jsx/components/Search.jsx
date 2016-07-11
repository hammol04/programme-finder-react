var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<form method='get' action='//www.bbc.co.uk/radio/programmes/a-z'>
					<input onChange={this.props.doSearch} name='q' maxLength='128' type='text' autoComplete='off' placeholder={this.props.placeholder} />
					<input type='submit' value='Submit Search' />
				</form>
			</section>
		);
	}
});
