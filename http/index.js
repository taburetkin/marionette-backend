require('../dom-shim');

const _ = require('underscore');
const express = require('express');

const HtmlView = require('./html-view');

const routesTable = require('../router').routesTable;

const asAsync = require('./as-async');

const cfg = require('../app-config');

//notify that we are at the backend
cfg.side = 'server';

const backendResponse = async function(route, request, response, ...rest) {
	
	let content = await route.handler(request, ...rest);

	switch(route.dataType){
		case 'json':
			return response.json(content);
		case 'view':
			return response.send(HtmlView.response(request, content));
		default:
			return response.send(content);
	}
}

const app = express();

app.use('/bndls', express.static('www/bndls'));

let routeDefaults = routesTable.getDefaults();

_.each(routesTable.routes, (route) => {
	
	_.defaults(route, routeDefaults);
	
	app[route.method](`/${route.url}`, asAsync(async (req, res, ...rest) => backendResponse(route, req, res, ...rest)))

});



app.listen(cfg.port, () => console.log(`listening on port ${cfg.port}`))

