require('jsdom-global')();
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const $ = require('jquery');

$.ajaxSettings.xhr = function() {
	return new XMLHttpRequest();
};

require('backbone').$ = $;

