export default function then(callbackOrPromise) {
	return promise => promise.then(callbackOrPromise);
}
