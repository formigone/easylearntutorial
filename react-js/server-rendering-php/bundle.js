/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);

	var utils = {
		getPath: function getPath() {
			var path = window.location.href.split('/').reduce(function (acc, part) {
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
		onPopState: function onPopState() {
			var path = utils.getPath();

			if (path.length > 0 && path !== 'ready') {
				utils.fetchDetail(path);
			}
		},
		fetchDetail: function fetchDetail(username) {
			var _this = this;

			$.getJSON('/api/users/' + username).then(function (res) {
				_this.dispatch(res, username === '' ? 'users' : 'info');
			});
		},


		subs: [],

		subscribe: function subscribe(cb) {
			this.subs.push(cb);
		},
		dispatch: function dispatch(data, dataType) {
			this.subs.forEach(function (cb) {
				cb(data, dataType);
			});
		}
	};

	global.onpopstate = utils.onPopState;

	var App = React.createClass({
		displayName: 'App',
		getInitialState: function getInitialState() {
			return {
				users: this.props.users || [],
				info: this.props.info
			};
		},
		componentDidMount: function componentDidMount() {
			utils.subscribe(this.onChange);

			if (this.state.users.length === 0) {
				utils.fetchDetail('');
			}

			if (this.state.info === null) {
				utils.onPopState();
			}
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'row' },
				this.state.info && React.createElement(Detail, this.state.info),
				React.createElement(List, { users: this.state.users, active: this.state.info })
			);
		},
		onChange: function onChange(data, dataType) {
			var state = this.state;
			state[dataType] = data;
			this.setState(state);
		}
	});

	var Detail = React.createClass({
		displayName: 'Detail',
		getDefaultProps: function getDefaultProps() {
			return {
				name: '',
				website: '',
				email: '',
				address: {}
			};
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'jumbotron' },
				React.createElement(
					'h1',
					null,
					this.props.name
				),
				React.createElement(
					'p',
					null,
					'Website: ',
					React.createElement(
						'a',
						{ href: '{this.props.website}' },
						this.props.website
					),
					'Email: ',
					React.createElement(
						'a',
						{ href: 'mailto:{this.props.email}' },
						this.props.email
					)
				),
				React.createElement(
					'p',
					null,
					this.props.address.street,
					' ',
					this.props.address.suite,
					', ',
					this.props.address.city,
					' ',
					this.props.address.zipcode
				)
			);
		}
	});

	var UserCell = React.createClass({
		displayName: 'UserCell',
		getDefaultProps: function getDefaultProps() {
			return {
				name: '',
				username: '',
				company: {},
				active: false
			};
		},
		navigateToUsername: function navigateToUsername(e) {
			e.preventDefault();

			utils.fetchDetail(this.props.username);
			window.history.pushState(null, '', '/users/' + this.props.username);
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'col-lg-4 cell', style: { backgroundColor: this.props.active ? '#aaeaea' : 'transparent' } },
				React.createElement(
					'h2',
					null,
					this.props.name
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						this.props.company.name
					)
				),
				React.createElement(
					'p',
					null,
					this.props.company.catchPhrase
				),
				React.createElement(
					'p',
					null,
					React.createElement(
						'a',
						{ className: 'btn btn-default', href: '/users/' + this.props.username, onClick: this.navigateToUsername },
						'View details'
					)
				)
			);
		}
	});

	var List = React.createClass({
		displayName: 'List',
		getDefaultProps: function getDefaultProps() {
			return {
				users: [],
				active: null
			};
		},
		render: function render() {
			var _this2 = this;

			return React.createElement(
				'div',
				{ className: 'row' },
				this.props.users.map(function (user, index) {
					return React.createElement(UserCell, _extends({ key: index }, user, { active: _this2.props.active && user.username === _this2.props.active.username }));
				})
			);
		}
	});

	global.App = App;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);