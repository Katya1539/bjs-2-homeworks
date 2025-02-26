class Triangle {
	constructor(a, b, c, ) {
		if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}

		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return +area.toFixed(3);
	}
}


function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		console.log(e);

		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}
}

const triangle = getTriangle(3, 4, 5);

console.log(triangle.perimeter);
console.log(triangle.area);

const invalidTriangle = getTriangle(1, 2, 3);
console.log(invalidTriangle)

console.log(invalidTriangle.perimeter);
console.log(invalidTriangle.area);

console.log(invalidTriangle.a, invalidTriangle.b)
