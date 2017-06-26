import reduce from '../reduce';
import first from '../first';
import ternar from '../../other/ternar';

export default function min(comparator) {
	return array => reduce((res, item) => comparator(item, res) > 0 ? item : res, first(array))(array);
}
