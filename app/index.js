import $ from 'jquery';
import app from './app';
import { history } from 'backbone';
import interceptLinks from './intercept-links';
window.$ = $;
$(() => {

	//prevents links hrefs and calling history.navigate instead
	interceptLinks();

	app.start()

	console.warn('history', history);
	console.warn('router', app.router);
});
