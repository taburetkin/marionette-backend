const _ = require('underscore');
const cfg = require('../app-config');
const fakeAsync = require('./fake-async');

const Body = require('./body-view');

const { Contact, Contacts } = require('../resources/contacts');

const fakeContacts = [
	{ id: 1, name: 'contacts-first', goto: 'contacts' },
	{ id: 2, name: 'contacts-second', goto: 'contacts' },
];

module.exports = exports = {
	
	clientSide: true,
	contentType: 'text/html',
	dataType: 'view',

	getDefaults(){
		return _.pick(exports, 'clientSide', 'contentType', 'dataType');
	},

	routes: [
		{
			method: 'get',
			url: '',
			async handler(){
				let model = new Contact({ name: 'root', goto: 'contacts' });
				return new Body({ model });
			}
		},
		{
			method: 'get',
			url: 'contacts',
			async handler(){
				let model = new Contact({ name: 'contacts', goto: '' });
				let collection = new Contacts();
				collection.url = cfg.apiRoot + '/contacts';
				await collection.fetch();
				return new Body({ model, collection });	
			}
		},
		{
			method: 'get',
			url: 'contacts/:id',
			async handler(req){

				let model = new Contact({ id: req.params.id });
				model.urlRoot = cfg.apiRoot + '/contacts';

				await model.fetch();

				return new Body({ model });	
			}
		},		
		{
			method: 'get',
			url: 'api/contacts',
			contentType: 'application/json',
			dataType: 'json',
			clientSide: false,
			async handler(){
				return await fakeAsync(fakeContacts);
			}
		},
		{
			method: 'get',
			url: 'api/contacts/:id',
			contentType: 'application/json',
			dataType: 'json',
			clientSide: false,
			async handler(req){
				let model = _.findWhere(fakeContacts, { id: parseInt(req.params.id,10) });
				return await fakeAsync(model);
			}
		},		
	],
}
