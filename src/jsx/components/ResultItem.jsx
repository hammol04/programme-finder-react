var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
      <article className='brand grid'>
				<figure className='grid__item brand__image'>
					<div>
						<img src={'https://ichef.bbci.co.uk/images/ic/160xn/' + this.props.imagePid + '.jpg'} />
					</div>
					<h2 className='brand__title'><a href={'http://www.bbc.co.uk/programmes/'+ this.props.pid}>{this.props.title}</a></h2>
				</figure><section className='grid__item brand__desc'>
					<p>{this.props.short_synopsis}</p>
				</section>
      </article>
		);
	}
});
