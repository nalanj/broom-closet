export default function tryCatch(fn, ...args) {
	try {
		const result = fn.apply(null, args);

		if (result.then) {
			return new Promise((resolve) => {
				result
					.then((v) => resolve([undefined, v]))
					.catch((e) => resolve([e, undefined]));
			});
		}

		return [undefined, result];
	} catch (e) {
		return [e, undefined];
	}
}
