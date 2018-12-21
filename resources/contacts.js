const _ = require('underscore');

const cfg = require('../app-config');

const contactsUrl = cfg.apiRoot + '/contacts';

const { Model, Collection } = require('../backbone');
const { View, CollectionView } = require('backbone.marionette');


const Contact = Model.extend({
	urlRoot: contactsUrl
});

const Contacts = Collection.extend({
	url: contactsUrl,
	model: Contact
});

const ContactView = View.extend({
	template: _.template('<a href="/contacts/<%= id %>"><small><%= id %></small> &mdash; <big><%= name %></big></a>')
});

const ContactsView = CollectionView.extend({
	childView: ContactView,
});

module.exports = {
	Contact,
	Contacts,
	ContactView,
	ContactsView
}
