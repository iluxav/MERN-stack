var React = require('react');
var Header = require('./components/header.jsx');
var Login = require('./components/login.jsx');
var mui = require('material-ui'),
  Input = mui.Input,
  Toolbar = mui.Toolbar;

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	getInitialState:function(){
		return {show:false};
	},
	render:function(){
		return <div className="container">
					<Header />
				   	<div className="content-fix"></div>
				   	<div className="grid">
						<div className="col-1-1">
							<div className="content">
								  <RouteHandler/>
							</div>
						</div>
				   	</div>
				</div>
	}
});


var routes = (
  <Route handler={App} path="/">
    <Route name="login" path="/login" handler={Login} />
  </Route>
);


Router.run(routes,Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

// React.renderComponent(<App/>, document.getElementById('main'));