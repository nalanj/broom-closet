export default function prepareArgs(fn, ...preparedArgs) {
	return (...args) => {
		return fn(...preparedArgs, ...args);
	};
}
