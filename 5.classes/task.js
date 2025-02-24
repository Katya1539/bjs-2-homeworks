class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = nill;
	}

	fix() {
		this._state = this._state * 1.5 > 100 ? 100 : this._state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

const sherlock = new PrintEditionItem(
	"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
	2019,
	1008
);
console.log(sherlock.releaseDate);
console.log(sherlock.state);
sherlock.fix();
console.log(sherlock.state);


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

const picnickMagazine = new Magazine(
	"Пикник на обочине",
	1972,
	168,
	"Аркадий и Борис Стругацкие",
);

const picnick = new FantasticBook(
	"Пикник на обочине",
	1972,
	168,
	"Аркадий и Борис Стругацкие",
);

console.log(picnick);
picnick.state = 10;
console.log(picnick.state);
picnick.fix();
console.log(picnick.state);
