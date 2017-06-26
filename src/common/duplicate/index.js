import map from '../../array/map';

/**
 * [duplicate description]
 * @param  {[type]} callbacks [description]
 * @return {[type]}           [description]
 */
export default function duplicate(callbacks) {
	return data => map(callback => callback(data))(callbacks);
}
