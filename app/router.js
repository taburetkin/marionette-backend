import { Router, history } from 'backbone';
import routesTable from '../router/routes-table';

let routeDefaults = routesTable.getDefaults();
let routes = {};

_.each(routesTable.routes, (route) => {
	_.defaults(route, routeDefaults);


	//by default we are taking only GET routes marked as clientSide
	if (route.method != 'get' || !route.clientSide)
		return;

	routes[route.url] = route.handler;

});

/*
* emulates request object
* at this moment we need only named parameters from route
*/
function createRequest({ args = [], route = '' } = {}) {

	const params = {};
	const paramReg = /:\w+/g;
	let index = 0;
	let m;
	do {
		m = paramReg.exec(route);
		if (m) {
			let name = 	m[0].substring(1);
			params[name] = args[index];
		}
		index++;
	} while (m);

	return {
		params
	}

}

export default Router.extend({
	routes,

	// there ar trhee reasons for overriding this method
	// 1: access history.route registration
	// 2: expose original route and provide fake request object
	// 3: make it async
	route: function (route, name, callback) {
		let originalRoute = route;
		if (!_.isRegExp(route)) route = this._routeToRegExp(route);

		if (_.isFunction(name)) {
			callback = name;
			name = '';
		}
		if (!callback) callback = this[name];

		var router = this;

		

		// i think this should be refactored out in original router
		history.route(route, async function (fragment) {
			
			// initial route should be skiped because we already get content
			// from the backend
			if (!router.firstEntry) {
				router.firstEntry = true;
				return;
			}

			var args = router._extractParameters(route, fragment);

			// emulating fake request object
			var req = createRequest({ route: originalRoute, args });			
			
			// our handler acts on both sides server and client
			// should be async
			// and should return populated view
			const callbackResult = await router.execute(callback, [ req ], name);

			if (callbackResult !== false) {
				router.trigger.apply(router, ['route:' + name].concat(args));

				//in this example we actually need only callback result
				router.trigger('route', callbackResult);				

				history.trigger('route', router, name, args);
			}

		});
		return this;
	},
    execute: async function(callback, args, name) {
		if (callback) 
			return await callback.apply(this, args);
	},	
});
