/*
	helper: converts handler to promise for error catching
*/

module.exports = fn => 
(req, res, next) => {
	Promise.resolve(fn(req,res,next))
		.catch(next)
}
