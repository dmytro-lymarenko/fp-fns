import original from '../';

test('should return the arg', () => {
	const arg = { foo: 'bar' };
	expect(original(arg)).toEqual(arg);
});
