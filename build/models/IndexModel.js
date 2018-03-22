'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
class IndexModel {
	constructor(app) {}

	getDate() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('hello Actioin ');
			}, 1000);
		});
	}
}
exports.default = IndexModel;