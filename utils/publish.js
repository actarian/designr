/*jshint esversion: 6 */

const fs = require('fs');
const path = require('path');
const ChildProcess = require('child_process');
const spawn = require('spawn-command-with-kill');

function nextMinorVersion(version) {
	return version.split('.')
		.map((x, i) => {
			return i === version.split('.')
				.length - 1 ? parseInt(x) + 1 : x;
		})
		.join('.');
}

function readFiles(folder) {
	return new Promise((resolve, reject) => {
		fs.readdir(folder, (error, files) => {
			if (error) {
				reject(error);
			} else {
				resolve(files);
			}
		});
	});
}

function copyFolder(src, dest) {
	return new Promise((resolve, reject) => {
		readFiles(src)
			.then(
				(files) => {
					Promise.all(
							files.map(x => copyFile(
								path.join(src, x),
								path.join(dest, x)
							))
						)
						.then(
							files => {
								resolve(files);
							},
							error => {
								reject(error);
							});
				},
				error => {
					reject(error);
				}
			);
	});
}

function copyFile(src, dest) {
	return new Promise((resolve, reject) => {
		const folder = path.dirname(dest);
		existsOrCreateFolder(folder)
			.then(
				folder => {
					fs.copyFile(
						src,
						dest,
						(error) => {
							if (error) {
								reject(error);
							} else {
								resolve(dest);
							}
						}
					);
				},
				error => {
					reject(error);
				}
			);
	});
}

function readFile(src) {
	return new Promise((resolve, reject) => {
		fs.readFile(src, 'utf8', (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}

function readFileJson(src) {
	return new Promise((resolve, reject) => {
		fs.readFile(src, 'utf8', (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(JSON.parse(data));
			}
		});
	});
}

function writeFile(content, dest) {
	return new Promise((resolve, reject) => {
		const folder = path.dirname(dest);
		existsOrCreateFolder(folder)
			.then(
				folder => {
					fs.writeFile(
						dest,
						content,
						'utf8',
						error => {
							if (error) {
								reject(error);
							} else {
								resolve(dest);
							}
						});
				},
				error => {
					reject(error);
				}
			);
	});
}

function writeFileJson(data, dest) {
	return new Promise((resolve, reject) => {
		const folder = path.dirname(dest);
		existsOrCreateFolder(folder)
			.then(
				folder => {
					fs.writeFile(
						dest,
						JSON.stringify(data, null, 2),
						'utf8',
						error => {
							if (error) {
								reject(error);
							} else {
								resolve(dest);
							}
						});
				},
				error => {
					reject(error);
				}
			);
	});
}

function existsOrCreateFolder(folder) {
	return new Promise((resolve, reject) => {
		fs.exists(folder, (exists) => {
			if (exists) {
				resolve(folder);
			} else {
				return fs.mkdir(folder, (error) => {
					if (error) {
						if (fs.existsSync(folder)) {
							resolve(folder);
						} else {
							reject(error);
						}
					} else {
						resolve(folder);
					}
				});
			}
		});
	});
}

function npmPublish(folder) {
	return new Promise((resolve, reject) => {
		const childProcess = spawn(`npm -v --prefix "${folder}"`);
		childProcess.stdout.on('data', (data) => {
			console.log('stdout', data.toString());
			setTimeout(() => {
				resolve(true);
			}, 1000);
		});
		childProcess.stderr.on('data', (data) => {
			console.log('stderr', data.toString());
			reject(data.toString());
		});
		childProcess.kill();
	});
}

function PromiseSerial(tasks) {
	return tasks.reduce((promise, task) => {
		return promise.then(results => task()
			.then(result => [...results, result]));
	}, Promise.resolve([]));
}

const isDirectory = source => fs.lstatSync(source)
	.isDirectory();

const getDirectories = source => fs.readdirSync(source)
	.map(name => path.join(source, name))
	.filter(isDirectory);

function publish(folder) {
	try {
		if (folder) {
			const _folder = path.resolve(__dirname, folder);
			if (isDirectory(_folder)) {
				const infoPath = `${_folder}/info.json`;
				readFileJson(infoPath)
					.then(info => {
						// info.version = nextMinorVersion(info.version);
						console.warn('\npublishing designr', info.version);
						const directories = getDirectories(_folder);
						const packages = directories.map(folder => {
							// console.log(path.basename(folder));
							const name = path.basename(folder);
							const file = `${folder}/package.json`;
							return readFile(file)
								.then(content => {
									content = content.replace(/(\"version\":\s*\"[\d\.]*\")/g, `\"version\": \"${info.version}\"`);
									return writeFile(content, file);
								});
						});
						const components = directories.map(folder => {
							// console.log(path.basename(folder));
							const name = path.basename(folder);
							const file = `${folder}/src/lib/${name}-module.component.ts`;
							return readFile(file)
								.then(content => {
									content = content.replace(/(\'[\d\.]*\')/g, `'${info.version}'`);
									return writeFile(content, file);
								});
						});
						Promise.all([
							writeFileJson(info, infoPath),
							...packages,
							...components,
						])
							.then(results => {
								return PromiseSerial(directories.map(x => () => {
										return npmPublish(x);
									}))
									.then(results => {
										console.log('published!');
									});
							});
					});
			}
		}
	} catch (error) {
		console.warn('\npublish designr => [error]');
		console.log(error);
	}
}

module.exports = publish;
