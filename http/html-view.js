/*
	this is base response view
	returns complete dom document
*/


const _ = require('underscore');

const { View } = require('backbone.marionette');

const documentTemplate = `
<head>
	<title>hello world</title>
</head>
<body>
	<div id="application"></div>
	<script src="/bndls/js/vendors.js"></script>
	<script src="/bndls/js/app.js"></script>
</body>`;

const HtmlView = View.extend({
	tagName: 'html',
	docType: '<!DOCTYPE>',
	template: _.noop,
	regions:{
		content:'#application',
	},
	onBeforeRender(){
		// i think jsdom has some bug with html node
		// at least there is only one way to not loose head and body tags
		this.el.innerHTML = documentTemplate;
	},
	onRender(){
		this.showContent();
	},
	showContent(view){
		!view && (view = this.getOption('content'));
		view && this.showChildView('content', view);
	},
	response(){
		if (!this.isRendered()) {
			this.render();
		}
		return `${this.getOption('docType')}${this.el.outerHTML}`;
	}
}, {
	response(req, content) {
		let html = new HtmlView({ content });
		return html.response();
	}
});


module.exports = HtmlView;
