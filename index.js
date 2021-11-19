function collider() {
	if (!(arguments.length >= 1)) {
		throw new Error('Missing a parameter (type: function) to run.');
	};
	const args = [...arguments];
	const func = args.shift();
	if (!(func && typeof func === 'function')) {
		throw new Error('First parameter must be a function.');
	};
	const count = new Set();
	let counter = new Number();
	let collision = Boolean(false);

	console.log('Running for:', func);

	const start = performance.now();
	while (!collision) {
		const item = func(...args);
		if (count.has(item)) {
			const end = performance.now();
			collision = true;
			console.log('Collision: ' + item);
			console.log('Ran ' + counter + ' iterations');
			console.log('Time: ' + Math.floor(end - start) + ' milliseconds');
			break;
		};
		count.add(item);
		counter++;
	};
};

export { collider };