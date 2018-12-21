/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/index.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app-config.js":
/*!***********************!*\
  !*** ./app-config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const cfg = {\r\n\tport: 3000,\r\n\thost: 'localhost',\r\n\tifServer(yes = true, no = false){\r\n\t\treturn cfg.side == 'server' ? yes : no;\r\n\t},\r\n\tifClient(yes = true, no = false){\r\n\t\treturn cfg.side != 'server' ? yes : no;\r\n\t},\r\n};\r\n\r\ncfg.appRoot = `http://localhost:${cfg.port}`;\r\ncfg.apiRoot = cfg.appRoot + '/api';\r\n\r\nmodule.exports = cfg;\r\n\n\n//# sourceURL=webpack:///./app-config.js?");

/***/ }),

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var backbone_marionette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/backbone.marionette.esm.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./app/router.js\");\n\r\n\r\n\r\n\r\nconst App = backbone_marionette__WEBPACK_IMPORTED_MODULE_0__[\"Application\"].extend({\r\n\r\n\tregion:{ el: '#application' },\r\n\r\n\tonBeforeStart(){\r\n\t\tthis.router = new _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\t\tthis.listenTo(this.router, 'route', this.onRoute);\r\n\t},\r\n\tonRoute(view){\r\n\t\tthis.showView(view);\r\n\t},\r\n\tonStart(){\r\n\t\tbackbone__WEBPACK_IMPORTED_MODULE_1__[\"history\"].start({ pushState: true });\r\n\t}\r\n\t\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new App());\r\n\n\n//# sourceURL=webpack:///./app/app.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./app/app.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _intercept_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intercept-links */ \"./app/intercept-links.js\");\n\r\n\r\n\r\n\r\nwindow.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {\r\n\r\n\t//prevents links hrefs and calling history.navigate instead\r\n\tObject(_intercept_links__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\t_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start()\r\n\r\n\tconsole.warn('history', backbone__WEBPACK_IMPORTED_MODULE_2__[\"history\"]);\r\n\tconsole.warn('router', _app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].router);\r\n});\r\n\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/intercept-links.js":
/*!********************************!*\
  !*** ./app/intercept-links.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(){\r\n\t$(document).on('click', 'a[href]', event => {\r\n\t\tconst $a = $(event.target).closest('a');\r\n\t\tlet href = $a.attr('href') || '';\r\n\t\t// skiping hrefs like \"#..\", \"file:\", \"mailto:\", \"http:\"\r\n\t\tif (/^(\\/\\/)|(\\w+?:)|#/.test(href)) {\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tevent.preventDefault();\r\n\t\tevent.stopPropagation();\r\n\r\n\t\tif(href.startsWith('/'))\r\n\t\t\thref = href.substring(1);\r\n\r\n\t\tbackbone__WEBPACK_IMPORTED_MODULE_0__[\"history\"].navigate(href, { trigger: true });\r\n\r\n\t});\r\n});\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./app/intercept-links.js?");

/***/ }),

/***/ "./app/router.js":
/*!***********************!*\
  !*** ./app/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\");\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router_routes_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/routes-table */ \"./router/routes-table.js\");\n/* harmony import */ var _router_routes_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_router_routes_table__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nlet routeDefaults = _router_routes_table__WEBPACK_IMPORTED_MODULE_1___default.a.getDefaults();\r\nlet routes = {};\r\n\r\n_.each(_router_routes_table__WEBPACK_IMPORTED_MODULE_1___default.a.routes, (route) => {\r\n\t_.defaults(route, routeDefaults);\r\n\r\n\r\n\t//by default we are taking only GET routes marked as clientSide\r\n\tif (route.method != 'get' || !route.clientSide)\r\n\t\treturn;\r\n\r\n\troutes[route.url] = route.handler;\r\n\r\n});\r\n\r\n\r\nfunction createRequest({ args = [], route = '' } = {}) {\r\n\r\n\tconst params = {};\r\n\tconst paramReg = /:\\w+/g;\r\n\tlet index = 0;\r\n\tlet m;\r\n\tdo {\r\n\t\tm = paramReg.exec(route);\r\n\t\tif (m) {\r\n\t\t\tlet name = \tm[0].substring(1);\r\n\t\t\tparams[name] = args[index];\r\n\t\t}\r\n\t\tindex++;\r\n\t} while (m);\r\n\r\n\treturn {\r\n\t\tparams\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (backbone__WEBPACK_IMPORTED_MODULE_0__[\"Router\"].extend({\r\n\troutes,\r\n\r\n\t// there ar trhee reasons for overriding this method\r\n\t// 1: access history.route registration\r\n\t// 2: expose original route and provide fake request object\r\n\t// 3: make it async\r\n\troute: function (route, name, callback) {\r\n\t\tlet originalRoute = route;\r\n\t\tif (!_.isRegExp(route)) route = this._routeToRegExp(route);\r\n\r\n\t\tif (_.isFunction(name)) {\r\n\t\t\tcallback = name;\r\n\t\t\tname = '';\r\n\t\t}\r\n\t\tif (!callback) callback = this[name];\r\n\r\n\t\tvar router = this;\r\n\r\n\t\t\r\n\r\n\t\t// i think this should be refactored out in original router\r\n\t\tbackbone__WEBPACK_IMPORTED_MODULE_0__[\"history\"].route(route, async function (fragment) {\r\n\t\t\t\r\n\t\t\tif (!router.firstEntry) {\r\n\t\t\t\trouter.firstEntry = true;\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tvar args = router._extractParameters(route, fragment);\r\n\r\n\t\t\tvar req = createRequest({ route: originalRoute, args });\t\t\t\r\n\t\t\t\r\n\t\t\tconst callbackResult = await router.execute(callback, [ req ], name);\r\n\r\n\t\t\tif (callbackResult !== false) {\r\n\t\t\t\trouter.trigger.apply(router, ['route:' + name].concat(args));\r\n\r\n\t\t\t\t//in this example we actually need only callback result\r\n\t\t\t\trouter.trigger('route', callbackResult);\t\t\t\t\r\n\r\n\t\t\t\tbackbone__WEBPACK_IMPORTED_MODULE_0__[\"history\"].trigger('route', router, name, args);\r\n\t\t\t}\r\n\r\n\t\t});\r\n\t\treturn this;\r\n\t},\r\n    execute: async function(callback, args, name) {\r\n\t\tif (callback) \r\n\t\t\treturn await callback.apply(this, args);\r\n\t},\t\r\n}));\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\")))\n\n//# sourceURL=webpack:///./app/router.js?");

/***/ }),

/***/ "./backbone/collection.js":
/*!********************************!*\
  !*** ./backbone/collection.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Collection = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\").Collection;\r\n\r\nmodule.exports = Collection;\r\n\n\n//# sourceURL=webpack:///./backbone/collection.js?");

/***/ }),

/***/ "./backbone/index.js":
/*!***************************!*\
  !*** ./backbone/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\r\n\tCollection: __webpack_require__(/*! ./collection */ \"./backbone/collection.js\"),\r\n\tModel: __webpack_require__(/*! ./model */ \"./backbone/model.js\"),\t\r\n}\r\n\n\n//# sourceURL=webpack:///./backbone/index.js?");

/***/ }),

/***/ "./backbone/model.js":
/*!***************************!*\
  !*** ./backbone/model.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Model = __webpack_require__(/*! backbone */ \"./node_modules/backbone/backbone.js\").Model;\r\n\r\nmodule.exports = Model;\r\n\n\n//# sourceURL=webpack:///./backbone/model.js?");

/***/ }),

/***/ "./resources/contacts.js":
/*!*******************************!*\
  !*** ./resources/contacts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\r\n\r\nconst cfg = __webpack_require__(/*! ../app-config */ \"./app-config.js\");\r\n\r\nconst contactsUrl = cfg.apiRoot + '/contacts';\r\n\r\nconst { Model, Collection } = __webpack_require__(/*! ../backbone */ \"./backbone/index.js\");\r\nconst { View, CollectionView } = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/backbone.marionette.esm.js\");\r\n\r\n\r\nconst Contact = Model.extend({\r\n\turlRoot: contactsUrl\r\n});\r\n\r\nconst Contacts = Collection.extend({\r\n\turl: contactsUrl,\r\n\tmodel: Contact\r\n});\r\n\r\nconst ContactView = View.extend({\r\n\ttemplate: _.template('<a href=\"/contacts/<%= id %>\"><small><%= id %></small> &mdash; <big><%= name %></big></a>')\r\n});\r\n\r\nconst ContactsView = CollectionView.extend({\r\n\tchildView: ContactView,\r\n});\r\n\r\nmodule.exports = {\r\n\tContact,\r\n\tContacts,\r\n\tContactView,\r\n\tContactsView\r\n}\r\n\n\n//# sourceURL=webpack:///./resources/contacts.js?");

/***/ }),

/***/ "./router/body-view.js":
/*!*****************************!*\
  !*** ./router/body-view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\r\nconst Mn = __webpack_require__(/*! backbone.marionette */ \"./node_modules/backbone.marionette/lib/backbone.marionette.esm.js\");\r\nconst { View } = Mn;\r\n\r\nconst { ContactsView } = __webpack_require__(/*! ../resources/contacts */ \"./resources/contacts.js\");\r\n\r\nmodule.exports = View.extend({\r\n\ttemplate: _.template('<h1><%= name %></h1><a href=\"/<%= goto %>\">go to <%= goto || \"home\" %></a><section></section>'),\r\n\tregions:{\r\n\t\titems:'section',\r\n\t},\r\n\tonRender(){\r\n\t\tthis.renderItems();\r\n\t},\r\n\trenderItems(){\r\n\t\tif (!this.collection) return;\r\n\r\n\t\tlet items = new ContactsView({ \r\n\t\t\tcollection: this.collection,\r\n\t\t});\r\n\t\t\r\n\t\tthis.showChildView('items', items);\r\n\t}\t\r\n});\r\n\n\n//# sourceURL=webpack:///./router/body-view.js?");

/***/ }),

/***/ "./router/fake-async.js":
/*!******************************!*\
  !*** ./router/fake-async.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = async function(data, delay = 30){\r\n\treturn new Promise((resolve, reject) => {\r\n\t\tsetTimeout(() => {\r\n\t\t\tresolve(data);\r\n\t\t}, delay)\r\n\t});\r\n}\r\n\n\n//# sourceURL=webpack:///./router/fake-async.js?");

/***/ }),

/***/ "./router/routes-table.js":
/*!********************************!*\
  !*** ./router/routes-table.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const _ = __webpack_require__(/*! underscore */ \"./node_modules/underscore/underscore.js\");\r\nconst cfg = __webpack_require__(/*! ../app-config */ \"./app-config.js\");\r\nconst fakeAsync = __webpack_require__(/*! ./fake-async */ \"./router/fake-async.js\");\r\n\r\nconst Body = __webpack_require__(/*! ./body-view */ \"./router/body-view.js\");\r\n\r\nconst { Contact, Contacts } = __webpack_require__(/*! ../resources/contacts */ \"./resources/contacts.js\");\r\n\r\nconst fakeContacts = [\r\n\t{ id: 1, name: 'contacts-first', goto: 'contacts' },\r\n\t{ id: 2, name: 'contacts-second', goto: 'contacts' },\r\n];\r\n\r\nmodule.exports = exports = {\r\n\t\r\n\tclientSide: true,\r\n\tcontentType: 'text/html',\r\n\tdataType: 'view',\r\n\r\n\tgetDefaults(){\r\n\t\treturn _.pick(exports, 'clientSide', 'contentType', 'dataType');\r\n\t},\r\n\r\n\troutes: [\r\n\t\t{\r\n\t\t\tmethod: 'get',\r\n\t\t\turl: '',\r\n\t\t\tasync handler(){\r\n\t\t\t\tlet model = new Contact({ name: 'root', goto: 'contacts' });\r\n\t\t\t\treturn new Body({ model });\r\n\t\t\t}\r\n\t\t},\r\n\t\t{\r\n\t\t\tmethod: 'get',\r\n\t\t\turl: 'contacts',\r\n\t\t\tasync handler(){\r\n\t\t\t\tlet model = new Contact({ name: 'contacts', goto: '' });\r\n\t\t\t\tlet collection = new Contacts();\r\n\t\t\t\tcollection.url = cfg.apiRoot + '/contacts';\r\n\t\t\t\tawait collection.fetch();\r\n\t\t\t\treturn new Body({ model, collection });\t\r\n\t\t\t}\r\n\t\t},\r\n\t\t{\r\n\t\t\tmethod: 'get',\r\n\t\t\turl: 'contacts/:id',\r\n\t\t\tasync handler(req){\r\n\r\n\t\t\t\tlet model = new Contact({ id: req.params.id });\r\n\t\t\t\tmodel.urlRoot = cfg.apiRoot + '/contacts';\r\n\r\n\t\t\t\tawait model.fetch();\r\n\r\n\t\t\t\treturn new Body({ model });\t\r\n\t\t\t}\r\n\t\t},\t\t\r\n\t\t{\r\n\t\t\tmethod: 'get',\r\n\t\t\turl: 'api/contacts',\r\n\t\t\tcontentType: 'application/json',\r\n\t\t\tdataType: 'json',\r\n\t\t\tclientSide: false,\r\n\t\t\tasync handler(){\r\n\t\t\t\treturn await fakeAsync(fakeContacts);\r\n\t\t\t}\r\n\t\t},\r\n\t\t{\r\n\t\t\tmethod: 'get',\r\n\t\t\turl: 'api/contacts/:id',\r\n\t\t\tcontentType: 'application/json',\r\n\t\t\tdataType: 'json',\r\n\t\t\tclientSide: false,\r\n\t\t\tasync handler(req){\r\n\t\t\t\tlet model = _.findWhere(fakeContacts, { id: parseInt(req.params.id,10) });\r\n\t\t\t\treturn await fakeAsync(model);\r\n\t\t\t}\r\n\t\t},\t\t\r\n\t],\r\n}\r\n\n\n//# sourceURL=webpack:///./router/routes-table.js?");

/***/ })

/******/ });