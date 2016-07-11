var React = require('react'),
	Header = require('../components/Header.jsx'),
	Search = require('../components/Search.jsx'),
	Results = require('../components/Results.jsx'),
	Loading = require('../components/Loading.jsx'),
	SearchAction = require('../actions/SearchAction.jsx'),
	SearchStore = require('../stores/SearchStore.jsx');

	/**
	*	This is my programme finder written in ReactJS.
	* If I had more time I would clean up the styling and the pagination.
	* I would also improve the quality of the CSS and look to
	* optimise bundle.min.js so it is not quite as big.
	* Thank you
	*/

module.exports = React.createClass({
	getInitialState: function() {
		return {
			programmes: [],
			total: 0,
			page: 1,
			limit: 50,
			firstSearch: true,
			loading: false
		}
	},
	componentWillMount: function() {
		SearchStore.on('change', this.updateSearch);
	},
	componentWillUnMount: function() {
		SearchStore.removeEventListener('change', this.updateSearch);
	},
	doSearch: function(e) {
		var query = e.target.value? e.target.value: this.query;
		query = encodeURIComponent(query);
		var page = e.target.innerHTML? e.target.innerHTML: 1;
		var limit = this.state.limit;
		this.query = query;
		this.activePage = page;
		var _this = this;

		clearTimeout(this.timer);
		// Type delay..
		this.timer = window.setTimeout(function() {
			_this.setState({
				loading: true
			});
			SearchAction.doSearch(query, page, limit);
		}, 1000);
	},
	updateSearch: function() {
		var programmes = SearchStore.getProgrammes();
		var total = SearchStore.getTotal();
		var page = SearchStore.getPage();

		this.setState({
			programmes: programmes,
			total: total,
			page: page,
			firstSearch: false,
			loading: false
		});
	},
	render: function() {
		return (
			<html>
				<head>
					<meta name="viewport" content="width=device-width,initial-scale=1" />
					<title>Programme Finder</title>
					<link rel='stylesheet' href='./index.css' />
				</head>
				<body>
					<section className='container'>
						<Header title="Programme Finder" />
						<Search doSearch={this.doSearch} placeholder="Search a programme" />
						{this.state.loading === true? <Loading isLoading={this.state.loading} />: null}
						<Results doSearch={this.doSearch} programmes={this.state.programmes} firstSearch={this.state.firstSearch} page={this.state.page} total={this.state.total} limit={this.state.limit} />
					</section>
					<script src='/bundle.min.js' />
				</body>
			</html>
		);
	}
});
