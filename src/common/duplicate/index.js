import map from '../../array/map';
import isArray from '../../array/isArray';
import isNumber from '../../number/isNumber';
import isPositive from '../../number/isPositive';
import isFunction from '../../function/isFunction';

import original from '../original';

/**
 * [duplicate description]
 * @param  {[type]} callbacks [description]
 * @return {[type]}           [description]
 */
export default function duplicate(...args) {
	let callbacks = [];

	if (isArray(args[0])) {
		callbacks = args[0];
	} else {
		let callback = original;

		if (isNumber(args[0]) && isPositive(args[0])) {
			if (isFunction(args[1])) {
				callback = args[1];
			}
			for (let i = 0; i < args[0]; ++i) {
				callbacks.push(callback);
			}
		}
	}

	return data => map(callback => callback(data))(callbacks);
}
