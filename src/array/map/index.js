/**
 * [map description]
 * @param  {Function} callback [description]
 * @param  {Boolean}  thisArg  [description]
 * @return {[type]}            [description]
 */
export default function map(callback, thisArg) {
	return array => array.map(callback, thisArg);
}
