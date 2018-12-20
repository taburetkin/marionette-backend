const _ = require('underscore');
const express = require('express');
const HtmlView = require('./html-view');
const router = require('../router');

const app = express();
const port = 3000;

const backendResponse = function(request, response, routerCallback){
	const content = routerCallback();
	return HtmlView.render(request, response, content);
}

_.each(router.routes, (callback, route) => {
	app.get(`/${route}`, (req, res) => backendResponse(req, res, callback))
});

app.listen(port, () => console.log(`listening on port ${port}`))

