
const _ = require('underscore');
const Mn = require('backbone.marionette');
const { View } = Mn;

const { ContactsView } = require('../resources/contacts');

module.exports = View.extend({
	template: _.template('<h1><%= name %></h1><a href="/<%= goto %>">go to <%= goto || "home" %></a><section></section>'),
	regions:{
		items:'section',
	},
	onRender(){
		this.renderItems();
	},
	renderItems(){
		if (!this.collection) return;

		let items = new ContactsView({ 
			collection: this.collection,
		});
		
		this.showChildView('items', items);
	}	
});
