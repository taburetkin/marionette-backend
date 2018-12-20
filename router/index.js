require('../dom-shim');
const _ = require('underscore');
const Bb = require('backbone');
const Mn = require('backbone.marionette');

const { Router, Model } = Bb;
const { View } = Mn;


const Body = View.extend({
	template: _.template('<h1><%= name %></h1><a href="/<%= goto %>">go to <%= goto || "home" %></a>'),
});


module.exports = new Router({	
	routes:{
		''(req,res){
			let model = new Model({ name: 'root', goto: 'contacts' });
			return new Body({ model });
		},
		'contacts'(req,res){
			let model = new Model({ name: 'contacts', goto: '' });
			return new Body({ model });
		},
	}
});


