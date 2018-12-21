const cfg = {
	port: 3000,
	host: 'localhost',
	ifServer(yes = true, no = false){
		return cfg.side == 'server' ? yes : no;
	},
	ifClient(yes = true, no = false){
		return cfg.side != 'server' ? yes : no;
	},
};

cfg.appRoot = `http://localhost:${cfg.port}`;
cfg.apiRoot = cfg.appRoot + '/api';

module.exports = cfg;
