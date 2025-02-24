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

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const findedByParamBook = this.books.find(item => item[type] === value)
    return !!findedByParamBook ? findedByParamBook : null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index != -1) {
    return this.books.splice(index, 1)[0];
    }
  return null;
 }
}

const library = new Library("Библиотека имени Ленина");

const detective = new DetectiveBook(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008,
  "Артур Конан Дойл",
)

library.addBook(detective);

library.addBook(
  new FantasticBook(
    "Пикник на обочине",
    1972,
    168,
    "Аркадий и Борис Стругацкие",
  )
);
library.addBook(new NovelBook("Машина времени", "Герберт Уэллс", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властилин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.lenght);

library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.lenght);

console.log(library);
