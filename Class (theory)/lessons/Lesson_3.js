class User {
  // ? Существует как публичные свойства объекта, так и приватные: 
  // ? публичные - мы можем прочитать из вне; 
  // ? приватные (через #) доступны ТОЛЬКО внутри класса
  #privateName;
  #privateSurname;
  #salary;

  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
    this.#privateName = name;
    this.#privateSurname = surname;
  }

  show() {
    return this.name + ' ' + this.surname;
  }

  // ? Специальный метод, который позволяют прочитать приватные свойства - гетеры
  get privateMethods() {
    return this.#cape(this.#privateName) + " " + this.#cape(this.#privateSurname);
  }

  // ? Приватные могут быть также и методы. Обычно приватными делают вспомогательные методы, 
  // ? чтобы они случайно не могли быть вызваны извне класса.
  #cape(str) {
		return str[0].toUpperCase() + str.slice(1);
	}

  // ? Необходим для записи значение из экземпляра класса
  set salary(wage) {
		this.#salary = wage;
    console.log("меняем")
	}

  // ? Необходим для чтения сеттера
  get salary() {
		return this.#salary;
	}
}

let user = new User('john', 'smith');
console.log(user.show());                           // ? john smith
console.log(user.getPrivateMethods());              // ? John Smith
console.log(user.setSalary('100$'));                // ? undefined
console.log(user.getSalary());                      // ? 100$