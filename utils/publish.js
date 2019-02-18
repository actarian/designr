/*jshint esversion: 6 */

const { lstatSync, readdirSync } = require('fs');
const path = require('path');
const { join } = require('path');

module.exports = function(folder) {
	/*
	let version = Object.keys(process.env)
		.find(x => x.indexOf('npm_config_version') === 0);
	version = version ? version.split('npm_config_version_')[1] : '/';
	*/
	console.warn('\npublish designr => ', folder);
	try {
		if (folder) {
			const info = require(folder + '/info.json');
			const _folder = path.resolve(__dirname, folder);
			console.log('_folder', _folder);
			const isDirectory = source => lstatSync(source)
				.isDirectory();
			const getDirectories = source => readdirSync(source)
				.map(name => join(source, name))
				.filter(isDirectory);
			if (isDirectory(_folder)) {
				const directories = getDirectories(_folder);
				console.log(info, directories);
			}
			/*
			fetch(folder + '/info.json')
				.then((response) => {
					return response.json();
				})
				.then(info => {
					console.log(info);
				});
			*/
			/*
			params[3] = slug;
			params.unshift((error, result) => {
				if (error) {
					console.warn('\nserver/main.js => [error]');
					console.log(error);
					console.log(result || '');
				} else {
					console.warn('\nserver/main.js => [result]');
					console.log(result);
				}
			});
			callback.apply(this, params);
			*/

		}
	} catch (error) {
		console.warn('\npublish designr => [error]');
		console.log(error);
	}
};
