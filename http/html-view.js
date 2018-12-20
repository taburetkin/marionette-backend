require('../dom-shim');
const _ = require('underscore');

const View = require('backbone.marionette').View;

const HtmlView = View.extend({
	tagName: 'html',
	docType: '<!DOCTYPE>',
	template: _.template('<head></head><body></body>'),
	regions:{
		content:'body',
	},
	onRender(){
		let view = this.getOption('content');
		view && this.showChildView('content', view);
	},
	response(){
		if (!this.isRendered()) {
			this.render();
		}
		return `${this.getOption('docType')}${this.el.outerHTML}`;
	}
}, {
	render(req, res, content) {
		let html = new HtmlView({ content });
		html.render();
		return res.send(html.response());
	}
});


module.exports = HtmlView;
