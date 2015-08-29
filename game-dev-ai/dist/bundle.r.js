/******/ (function(modules) { // webpackBootstrap
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		if(typeof XMLHttpRequest === "undefined")
/******/ 			return callback(new Error("No browser support"));
/******/ 		try {
/******/ 			var request = new XMLHttpRequest();
/******/ 			var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 			request.open("GET", requestPath, true);
/******/ 			request.timeout = 10000;
/******/ 			request.send(null);
/******/ 		} catch(err) {
/******/ 			return callback(err);
/******/ 		}
/******/ 		request.onreadystatechange = function() {
/******/ 			if(request.readyState !== 4) return;
/******/ 			if(request.status === 0) {
/******/ 				// timeout
/******/ 				callback(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 			} else if(request.status === 404) {
/******/ 				// no update available
/******/ 				callback();
/******/ 			} else if(request.status !== 200 && request.status !== 304) {
/******/ 				// other failure
/******/ 				callback(new Error("Manifest request to " + requestPath + " failed."));
/******/ 			} else {
/******/ 				// success
/******/ 				try {
/******/ 					var update = JSON.parse(request.responseText);
/******/ 				} catch(e) {
/******/ 					callback(e);
/******/ 					return;
/******/ 				}
/******/ 				callback(null, update);
/******/ 			}
/******/ 		};
/******/ 	}

/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "a4b9f41ec6c4152dcf16"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				fn[name] = __webpack_require__[name];
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}

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
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

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

/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };

/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);

	var game = new Phaser.Game(800, 450, Phaser.AUTO, 'gdc221Container', null, false, false);

	//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

	game.state.add('Placeholder', __webpack_require__(2));
	game.state.add('Intro', __webpack_require__(3));
	game.state.add('Falling', __webpack_require__(4));
	game.state.add('Main', __webpack_require__(7));

	game.state.add('Map', __webpack_require__(8));

	window.kickStart = function () {
	   if (!window.didKickStart) {
	      window.didKickStart = true;
	      game.state.start('Intro');
	   }
	};

	game.state.start('Map');

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Phaser;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * @inherits Phaser.Game
	 * @constructor
	 */
	'use strict';

	function Placeholder() {
	    this.style = {
	        font: '2em "Press Start 2P"',
	        fill: '#fff',
	        align: 'center'
	    };

	    this.text = {};
	    this.textSize = 1;
	    this.dir = 1;
	}

	Placeholder.prototype.create = function () {
	    this.text = this.add.text(this.world.centerX, this.world.centerY, 'PLACEHOLDER SCENE', this.style);
	    this.text.anchor.set(0.5);
	};

	Placeholder.prototype.update = function () {
	    this.text.scale.set(this.textSize, this.textSize);
	    this.textSize += 0.03 * this.dir;

	    if (this.textSize > 1.75 || this.textSize < 0.5) {
	        this.dir *= -1;
	    }
	};

	module.exports = Placeholder;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @inherits Phaser.Game
	 * @constructor
	 */
	'use strict';

	function Copyright() {
	    this.style = {
	        font: '2em "Press Start 2P"',
	        fill: '#fff',
	        align: 'center'
	    };

	    this.styleSub = {
	        font: '1.25em "Press Start 2P"',
	        fill: '#555',
	        align: 'center'
	    };

	    this.text = [];
	    this.delayBeforeFadeout_ms = 1000;
	    this.fullyLoaded = false;
	    this.startFadingOut = false;
	    this.fadeRate = 0.008;
	    this.done = false;
	}

	Copyright.prototype.create = function () {
	    this.text.push(this.add.text(this.world.centerX, 80, 'GAME DEVELOPMENT COURSE: GDC 221', this.style));
	    this.text.push(this.add.text(this.world.centerX, 120, 'FREE GAME DEVELOPMENT LESSONS', this.style));
	    this.text.push(this.add.text(this.world.centerX, 240, '(C) EASY LEARN TUTORIAL  2015.', this.style));
	    this.text.push(this.add.text(this.world.centerX, 280, 'ALL RIGHTS RESERVED.', this.style));
	    this.text.push(this.add.text(this.world.centerX, 320, 'WWW.EASYLEARNTUTORIAL.COM.', this.style));
	    this.text.push(this.add.text(this.world.centerX, 400, 'MEGA MAN AND ALL RELATED ITEMS ARE COPYRIGHT OF CAPCOM.', this.styleSub));

	    this.text.forEach(function (txt) {
	        txt.anchor.set(0.5);
	        txt.alpha = 0;
	    });
	};

	Copyright.prototype.update = function () {
	    var _this = this;

	    if (this.done) {
	        this.state.start('Main');
	    }

	    this.text.forEach(function (txt) {
	        if (!_this.startFadingOut && txt.alpha < 1.0) {
	            txt.alpha += _this.fadeRate;
	        } else if (!_this.fullyLoaded) {
	            _this.fullyLoaded = true;
	            setTimeout(function (_) {
	                _this.startFadingOut = true;
	            }, _this.delayBeforeFadeout_ms);
	        }

	        if (_this.startFadingOut && txt.alpha > 0.0) {
	            txt.alpha -= _this.fadeRate;
	        }

	        if (_this.startFadingOut && txt.alpha <= 0.0) {
	            _this.done = true;
	        }
	    });
	};

	module.exports = Copyright;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);
	var MegaMan = __webpack_require__(5);

	/**
	 * @inherits Phaser.Game
	 * @constructor
	 */
	function Falling() {
	    this.keys = {};
	    this.done = false;

	    this.player = null;
	    this.npcs = [];
	    this.filters = null;
	}

	Falling.prototype.preload = function () {
	    //this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
	    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', '/asset/sprites/megaman.json');
	};

	Falling.prototype.create = function () {
	    //this.add.audio('bgMusic').play();

	    this.world.setBounds(0, 0, 1000, 1000);

	    for (var i = 0; i < 10; i++) {
	        this.npcs.push(new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', { scale: { x: 1.1, y: 1.1 } }));
	    }

	    for (var i = 0; i < 10; i++) {
	        this.npcs.push(new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', { scale: { x: 1.75, y: 1.75 } }));
	    }

	    this.player = new MegaMan(this, this.world.centerX / 2, this.world.centerY / 2, 'mm', { scale: { x: 2, y: 2 } });
	    //this.player.sprite.fixedToCamera = true;

	    for (var i = 0; i < 10; i++) {
	        var npc = new MegaMan(this, this.rnd.between(-200, 1000), this.rnd.between(-500, 500), 'mm', { scale: { x: 2.25, y: 2.25 } });
	        npc.speed = Math.random() * 5 + 3 | 0;
	        this.npcs.push(npc);
	    }

	    this.keys['jump'] = this.input.keyboard.addKey(Phaser.Keyboard.A);
	    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
	    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	    this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	};

	Falling.prototype.update = function () {
	    var _this = this;

	    if (this.done) {}
	    // this.state.start('Placeholder');

	    //mm.update(this);
	    this.player.update(this, this.keys);
	    if (this.keys.right.isDown) {
	        this.player.sprite.x += 3.5;
	        this.world.camera.x += 3.5;
	    } else if (this.keys.left.isDown) {
	        this.player.sprite.x -= 3.5;
	        this.world.camera.x -= 3.5;
	    }

	    this.npcs.forEach(function (npc, index) {
	        //npc.sprite.tint = Number('0x' + Number(555555 + index * index * index).toString(16));
	        if (index < 10) {
	            npc.sprite.y += 3;
	        } else if (index < 20) {
	            npc.sprite.y += 4.5;
	        } else {
	            npc.sprite.y += npc.speed;
	        }

	        if (npc.sprite.y > 1000) {
	            npc.sprite.y = -100;
	        }

	        npc.update(_this, {
	            jump: {
	                isDown: true
	            },
	            right: {},
	            left: {}
	        });
	    });
	};

	module.exports = Falling;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);
	var animMM = __webpack_require__(6);

	function MegaMan(game, x, y, texture, opt) {
	    this.sprite = game.add.sprite(x, y, texture);
	    this.states = animMM.states;
	    this.anim = animMM.anim;
	    this.facingRight = true;
	    this.jumping = false;

	    this.init(opt);
	}

	MegaMan.prototype.init = function (opt) {
	    var sprite = this.sprite;
	    var states = this.states;
	    var anim = this.anim;
	    opt = opt || {};

	    sprite.animations.add(states.standingRight, anim.standingRight.frames, anim.standingRight.rate, anim.standingRight.loop, false);
	    sprite.animations.add(states.runningRight, anim.runningRight.frames, anim.runningRight.rate, anim.runningRight.loop, false);
	    sprite.animations.add(states.jumpingRight, anim.jumpingRight.frames, anim.jumpingRight.rate, anim.jumpingRight.loop, false);

	    sprite.animations.add(states.standingLeft, anim.standingLeft.frames, anim.standingLeft.rate, anim.standingLeft.loop, false);
	    sprite.animations.add(states.runningLeft, anim.runningLeft.frames, anim.runningLeft.rate, anim.runningLeft.loop, false);
	    sprite.animations.add(states.jumpingLeft, anim.jumpingLeft.frames, anim.jumpingLeft.rate, anim.jumpingLeft.loop, false);

	    if (opt.scale) {
	        sprite.scale.x = opt.scale.x || 1.0;
	        sprite.scale.y = opt.scale.y || 1.0;
	    }

	    sprite.anchor.set(0.5, 0.5);

	    sprite.animations.play(states.standingRight);
	};

	MegaMan.prototype.update = function (game, keys) {
	    var sprite = this.sprite;
	    var states = this.states;
	    keys = keys || {
	        jump: {},
	        right: {},
	        left: {}
	    };

	    if (keys.jump.isDown || this.jumping) {
	        sprite.animations.play(this.facingRight ? states.jumpingRight : states.jumpingLeft);
	    } else if (keys.right.isDown && !this.jumping) {
	        sprite.animations.play(states.runningRight);
	    } else if (keys.left.isDown && !this.jumping) {
	        sprite.animations.play(states.runningLeft);
	    } else {
	        sprite.animations.play(this.facingRight ? states.standingRight : states.standingLeft);
	    }

	    if (keys.right.isDown && !this.facingRight) {
	        this.facingRight = true;
	    }

	    if (keys.left.isDown && this.facingRight) {
	        this.facingRight = false;
	    }
	};

	module.exports = MegaMan;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var frameKeys = {
	    runningRight0: 'runningRight0',
	    runningRight1: 'runningRight1',
	    runningRight2: 'runningRight2',

	    standingRightBlink: 'standingRightBlink',
	    standingRight: 'standingRight',

	    jumpingRight: 'jumpingRight',

	    runningLeft0: 'runningLeft0',
	    runningLeft1: 'runningLeft1',
	    runningLeft2: 'runningLeft2',

	    standingLeftBlink: 'standingLeftBlink',
	    standingLeft: 'standingLeft',

	    jumpingLeft: 'jumpingLeft'
	};

	module.exports = {
	    states: {
	        standingRight: 'standingRight',
	        runningRight: 'runningRight',
	        jumpingRight: 'jumpingRight',

	        standingLeft: 'standingLeft',
	        jumpingLeft: 'jumpingLeft'
	    },
	    anim: {
	        standingRight: {
	            frames: [frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRight, frameKeys.standingRightBlink],
	            rate: 16,
	            loop: true
	        },
	        runningRight: {
	            frames: [frameKeys.runningRight0, frameKeys.runningRight1, frameKeys.runningRight2],
	            rate: 10,
	            loop: true
	        },
	        jumpingRight: {
	            frames: [frameKeys.jumpingRight],
	            rate: 1,
	            loop: true
	        },
	        standingLeft: {
	            frames: [frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeft, frameKeys.standingLeftBlink],
	            rate: 16,
	            loop: true
	        },
	        runningLeft: {
	            frames: [frameKeys.runningLeft0, frameKeys.runningLeft1, frameKeys.runningLeft2],
	            rate: 10,
	            loop: true
	        },
	        jumpingLeft: {
	            frames: [frameKeys.jumpingLeft],
	            rate: 100,
	            loop: false
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);

	/**
	 * @inherits Phaser.Game
	 * @constructor
	 */
	function Main() {
	    this.sprites = [];
	    this.keys = {};
	    this.options = {};
	    this.optionArrow = {};
	    this.selectedOption = 0;

	    this.delayBeforeFadeout_ms = 1000;
	    this.fullyLoaded = false;
	    this.startFadingOut = false;
	    this.fadeRate = 0.008;
	    this.done = false;
	}

	Main.prototype.preload = function () {
	    this.load.audio('bgMusic', ['asset/audio/mm3-intro-yt.HeVva6ddNAc.danielsymphonies.mp3']);
	    this.load.atlasJSONHash('atlas', 'asset/img/main-screen-0.0.3.png', 'asset/sprites/main-screen.json');
	};

	Main.prototype.create = function () {
	    this.add.audio('bgMusic').play();

	    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
	    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);

	    this.optionArrow = this.add.sprite(185, 285, 'atlas', 'arrow');
	    this.options.startLearning = this.add.sprite(210, 284, 'atlas', 'startLearning');
	    this.options.aboutElt = this.add.sprite(210, 320, 'atlas', 'aboutElt');

	    this.sprites.push(this.add.sprite(this.world.centerX, 125, 'atlas', 'logo'));
	    this.sprites.push(this.add.sprite(556, 300, 'atlas', 'mascot'));
	    this.sprites.push(this.optionArrow);
	    this.sprites.push(this.options.startLearning);
	    this.sprites.push(this.options.aboutElt);

	    this.sprites.forEach(function (sprite) {
	        sprite.anchor.set(0.5, 0.5);
	        sprite.alpha = 0;
	    });

	    this.options.startLearning.anchor.set(0, 0.5);
	    this.options.aboutElt.anchor.set(0, 0.5);
	};

	Main.prototype.update = function () {
	    var _this = this;

	    if (this.done) {
	        // this.state.start('Placeholder');
	    }

	    if (!this.startFadingOut) {
	        this.sprites.forEach(function (sprite) {
	            if (sprite.alpha < 1.0) {
	                sprite.alpha += _this.fadeRate;
	            }
	        });
	    }

	    if (this.keys.up.isDown) {
	        this.selectedOption = 0;
	    } else if (this.keys.down.isDown) {
	        this.selectedOption = 1;
	    }

	    this.optionArrow.y = this.selectedOption === 0 ? 285 : 321;
	};

	module.exports = Main;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Phaser = __webpack_require__(1);
	var MegaMan = __webpack_require__(5);

	var tileKeys = {
	    spike: 0,
	    bgHorHighlight: 1,
	    bgSolid: 2,
	    bgHorLowlight: 3,
	    bgRand_1: 4,
	    bgRand_2: 6,
	    bgRand_3: 7,
	    solid_1: 5,
	    solid_2: 8,
	    solid_3: 9,
	    solid_4: 10,
	    bgSolidTop: 12
	};

	var mapTmpl = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], [1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1], [1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1], [1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1], [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 9, 0, 0, 0, 0, 0, 0, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

	var mapTmplSize = {
	    width: 25,
	    height: 25
	};

	var mapIndexToTile = {
	    1: [tileKeys.solid_1, tileKeys.solid_2, tileKeys.solid_3, tileKeys.solid_4],
	    0: [tileKeys.bgSolid, tileKeys.bgRand_1, tileKeys.bgRand_1, tileKeys.bgRand_2, tileKeys.bgRand_2, tileKeys.bgRand_2, tileKeys.bgRand_3, tileKeys.bgRand_3],
	    9: [tileKeys.spike]
	};

	/**
	 * @inherits Phaser.Game
	 * @constructor
	 */
	function Map() {
	    this.done = false;
	    this.map = null;
	    this.keys = {};
	    this.worldSize = {
	        width: 25,
	        height: 300
	    };
	    this.stage = [];
	    this.player = null;
	    this.init();
	}

	Map.prototype.init = function () {
	    this.stage = [];

	    for (var y = 0; y < this.worldSize.height; y++) {
	        var index = y > 15 ? y > 20 ? parseInt(Math.random() * mapTmplSize.height - 1, 10) + 1 : 1 : 0;
	        var stageRow = mapTmpl[index].map(function (cell) {
	            return mapIndexToTile[cell][parseInt(Math.random() * mapIndexToTile[cell].length, 10)];
	        });

	        this.stage.push(stageRow);
	    }
	};

	Map.prototype.preload = function () {
	    this.load.spritesheet('mm3-wily-02', 'asset/img/mm3-wily-02.png', 32, 32);
	    this.load.atlasJSONHash('mm', 'asset/img/megaman.gif', '/asset/sprites/megaman.json');
	};

	Map.prototype.create = function () {
	    this.stage.backgroundColor = '#fff';

	    var map = this.add.tilemap();
	    map.addTilesetImage('mm3-wily-02');
	    var layer = map.create('test', this.worldSize.width, this.worldSize.height, 32, 32);
	    layer.resizeWorld();

	    this.stage.forEach(function (row, y) {
	        row.forEach(function (cell, x) {
	            map.putTile(cell, x, y, layer);
	        });
	    });

	    this.keys['jump'] = this.input.keyboard.addKey(Phaser.Keyboard.A);
	    this.keys['up'] = this.input.keyboard.addKey(Phaser.Keyboard.UP);
	    this.keys['down'] = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	    this.keys['left'] = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	    this.keys['right'] = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

	    this.player = new MegaMan(this, this.world.centerX, -32, 'mm', { scale: { x: 2, y: 2 } });
	    this.player.jumping = true;
	    this.camera.follow(this.player.sprite);
	};

	Map.prototype.update = function () {
	    if (this.done) {}
	    // this.state.start('Placeholder');

	    //this.camera.y += 5;
	    this.player.update(this, this.keys);

	    if (this.keys['left'].isDown) {
	        this.player.sprite.x -= 3;
	    } else if (this.keys['right'].isDown) {
	        this.player.sprite.x += 3;
	    }

	    this.player.sprite.y += 5;
	};

	module.exports = Map;

/***/ }
/******/ ]);