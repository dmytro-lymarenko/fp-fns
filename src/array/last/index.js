import length from '../length';
import decrement from '../../other/decrement';
import property from '../../other/property';

export default function last(array) {
	const lastIndex = decrement(length(array));
	return property(lastIndex)(array);
}
