var React = require('react');
var mui = require('material-ui');
var Input = mui.Input;
var RaisedButton = mui.RaisedButton;

var Login = React.createClass({
	getInitialState:function(){
		return {show:false};
	},
	render:function(){
		return (
			<div className="col-group">
				<div className="col-4">
					<div className="content">
						<h3>Login with 3rd party</h3>
						<RaisedButton label="Login with Facebook" secondary={true}/>
					</div>
				</div>
				<div className="col-8">
		    	 	<div className="content">
			    	 	<h1>Login</h1>
			    	 	<p>Login with your credentials</p>
			    	 	<Input type="text" placeholder="Email" description="Please enter your email address" />

			    	 	<Input type="text" placeholder="Password" description="Please enter your password address" />
			    	 	<RaisedButton label="Login" secondary={true}/>
		    	 	</div>
		    	</div>
			</div>
		);
	}
});

module.exports = Login;