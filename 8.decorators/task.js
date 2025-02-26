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



function debounceDecoratorNew(func, delay) {
	let timeoutId;

	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		if (timeoutId) {
			console.log('уже есть таймаут', args);
			clearTimeout(timeoutId);
		}
		if (!timeoutId) {
			console.log('первый сигнал', args);
			func.call(this, ...args);
			this.count++;
		}
		timeoutId = setTimeout(() => {
			console.log('задержка больше 200млсек, сработал таймаут');

			console.log('args', args);
			func.apply(this, args);
			wrapper.count++;
		}, delay);

		wrapper.allCount++;
	}

	return wrapper;
}

const sendSignal = (signalOrder, delay) => console.log('Сигнал отправлен', signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0));
setTimeout(() => upgradedSendSignal(2, 300), 300);
setTimeout(() => upgradedSendSignal(3, 900), 900);
setTimeout(() => upgradedSendSignal(4, 1200), 1200);
setTimeout(() => upgradedSendSignal(5, 2300), 2300);
setTimeout(() => upgradedSendSignal(6, 4400), 4400);
setTimeout(() => upgradedSendSignal(7, 4500), 4500);
setTimeout(() => {
	console.log(upgradedSendSignal.count);
	console.log(upgradedSendSignal.allCount);
}, 7000)
