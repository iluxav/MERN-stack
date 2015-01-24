var React = require('react');
var mui = require('material-ui'),
  Input = mui.Input,
  Toolbar = mui.Toolbar,
  ToolbarGroup = mui.ToolbarGroup,
  RaisedButton = mui.RaisedButton,
  DropDownIcon = mui.DropDownIcon;

var Header = React.createClass({
	getInitialState:function(){
		return {
			menuItems:[
					    { type: mui.MenuItem.Types.NESTED, text: 'Reports', items: [
					      { payload: '1', text: 'Nested Item 1' },
					      { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 2', items: [
					        { payload: '1', text: 'Nested Item 3' },
					        { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 4', items: [
					          { payload: '1', text: 'Nested Item 5' },
					          { payload: '3', text: 'Nested Item 6' }
					        ] },
					        { payload: '3', text: 'Nested Item 7' }
					      ] },
					      { payload: '3', text: 'Nested Item 9' },
					      { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 2', items: [
					        { payload: '1', text: 'Nested Item 3' },
					       { type: mui.MenuItem.Types.NESTED, text: 'Nested Item 4', items: [
					          { payload: '1', text: 'Nested Item 5' },
					          { payload: '3', text: 'Nested Item 6' }
					        ] },
					        { payload: '3', text: 'Nested Item 7' }
					      ] },
					      { payload: '4', text: 'Nested Item 10' }
					    ] },
					    { payload: '1', text: 'Audio Library'},
					    { payload: '2', text: 'Settings'},
					    { payload: '3', text: 'Logout'}
					  ]
		};
	},
	render:function(){
		return (
		<div className="col-group">
			<div className="col-12">
				<Toolbar className="nav">
					<div className="col-group">
						<div className="col-8">
							<h2>React with Material UI</h2>
						</div>	
						<div className="col-4">
							<a href="/">Home</a>
							<a href="about">About</a>
							<a href="register">Register</a>
							<a href="login">Login</a>
						</div>	
					</div>		
				</Toolbar>
			</div> 
	    </div>
		);
	}
});

module.exports = Header;