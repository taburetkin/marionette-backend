module.exports = async function(data, delay = 30){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, delay)
	});
}
