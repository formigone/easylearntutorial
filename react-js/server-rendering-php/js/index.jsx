const React = require('react');

const utils = {
	getPath(){
		const path = window.location.href.split('/').reduce((acc, part) => {
				if (acc === 'ready') {
					acc = part;
				}

				if (part === 'users') {
					acc = 'ready';
				}

				return acc;
			}, '');

		return path;
	},

	onPopState(){
		const path = utils.getPath();

		if (path.length > 0 && path !== 'ready') {
			utils.fetchDetail(path);
		}
	},

	fetchDetail(username){
		$.getJSON('/api/users/' + username)
			.then(res => {
				this.dispatch(res, username === '' ? 'users' : 'info');
			});
	},

	subs: [],

	subscribe(cb){
		this.subs.push(cb);
	},

	dispatch(data, dataType){
		this.subs.forEach(cb => {
			cb(data, dataType);
		})
	}
};

global.onpopstate = utils.onPopState;

const App = React.createClass({
	getInitialState(){
		return {
			users: this.props.users || [],
			info: this.props.info
		};
	},

	componentDidMount(){
		utils.subscribe(this.onChange);

		if (this.state.users.length === 0) {
			utils.fetchDetail('');
		}

		if (this.state.info === null) {
			utils.onPopState();
		}
	},

	render(){
		return (
			<div className="row">
				{this.state.info && (
					<Detail {...this.state.info}/>
				)}
				<List users={this.state.users} active={this.state.info}/>
			</div>
		);
	},

	onChange(data, dataType){
		const state = this.state;
		state[dataType] = data;
		this.setState(state);
	}
})

const Detail = React.createClass({
	getDefaultProps(){
		return {
			name: '',
			website: '',
			email: '',
			address: {}
		};
	},

	render(){
		return (
			<div className="jumbotron">
            <h1>{this.props.name}</h1>
            <p>
            	Website: <a href="{this.props.website}">{this.props.website}</a>
            	Email: <a href="mailto:{this.props.email}">{this.props.email}</a>
            </p>
            <p>
            	{this.props.address.street} {this.props.address.suite}, {this.props.address.city} {this.props.address.zipcode}
            </p>
          </div>
		);
	}
});

const UserCell = React.createClass({
	getDefaultProps(){
		return {
			name: '',
			username: '',
			company: {},
			active: false
		};
	},

	navigateToUsername(e){
		e.preventDefault();

		utils.fetchDetail(this.props.username);
		window.history.pushState(null, '', '/users/' + this.props.username);
	},

	render(){
		return (
			<div className="col-lg-4 cell" style={{backgroundColor: this.props.active ? '#aaeaea' : 'transparent'}}>
              <h2>{this.props.name}</h2>
              <p><strong>{this.props.company.name}</strong></p>
              <p>{this.props.company.catchPhrase}</p>
              <p>
              	<a className="btn btn-default" href={'/users/' + this.props.username} onClick={this.navigateToUsername}>View details</a>
              </p>
            </div>
		);
	}
})

const List = React.createClass({
	getDefaultProps(){
		return {
			users: [],
			active: null
		};
	},

	render(){
		return (
			<div className="row">
				{this.props.users.map((user, index) => <UserCell key={index} {...user} active={this.props.active && user.username === this.props.active.username}/>)}
			</div>
		);
	}
});

global.App = App;
