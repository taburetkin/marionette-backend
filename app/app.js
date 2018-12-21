import { Application } from 'backbone.marionette';
import { history } from 'backbone';
import Router from './router';

const App = Application.extend({

	region:{ el: '#application' },

	onBeforeStart(){
		this.router = new Router();
		this.listenTo(this.router, 'route', this.onRoute);
	},
	onRoute(view){
		this.showView(view);
	},
	onStart(){
		history.start({ pushState: true });
	}
	
});

export default new App();
