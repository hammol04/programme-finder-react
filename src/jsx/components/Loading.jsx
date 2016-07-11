var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<section>
				<img className='loading-spinner' src='https://cdnjs.cloudflare.com/ajax/libs/timelinejs/2.25/css/loading.gif' alt='Loading' />
			</section>
		);
	}
});
