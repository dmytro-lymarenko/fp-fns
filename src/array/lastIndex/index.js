import length from '../length';
import decrement from '../../other/decrement';
import ternar from '../../other/ternar';
import original from '../../other/original';
import isPositive from '../../number/isPositive';

/**
 * [lastIndex description]
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 */
export default flow([
	length,
	ternar(isPositive, decrement, original)
]);
