/**
 * [reduce description]
 * @param  {Function} callback     [description]
 * @param  {[type]}   initialValue [description]
 * @return {[type]}                [description]
 */
export default function reduce(callback, initialValue) {
	return array => array.reduce(callback, initialValue);
}
