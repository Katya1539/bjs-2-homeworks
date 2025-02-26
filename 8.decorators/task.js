const md5 = require('js-md5');

function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(JSON.stringify(args));
		let objectInCache = cache.find(item => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value, cache);
			return "Из кеша: " + objectInCache.value;
		}
		let result = func(...args);
		cache.push({
			hash: hash,
			value: result
		});

		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result, cache);
		return "Вычисляем: " + result;
	}
	return wrapper;
}
const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3);
upgraded(1, 2, 3);
upgraded(2, 2, 3);
upgraded(3, 2, 3);
upgraded(4, 2, 3);
upgraded(5, 2, 3);
upgraded(6, 2, 3);
upgraded(1, 2, 3);

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}
