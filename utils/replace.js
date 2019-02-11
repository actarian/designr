var fs = require("fs");

module.exports = function(path, textOrRegexp, replacementText) {
	fs.readFile(path, 'utf8', function(e, data) {
		if (e) {
			return console.log('replace.js.read.error', e);
		}
		var result = data.replace(textOrRegexp, replacementText);
		fs.writeFile(path, result, 'utf8', function(e) {
			if (e) {
				return console.log('replace.js.write.error', e);
			}
		});
	});
};
