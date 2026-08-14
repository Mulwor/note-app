console.log("---------------------- Вызов первого класса: приват ----------------")

class User {
  // * 1. Cуществует как публичные свойства объекта, так и приватные. Публичные те которые мы
  // * можем прочитать из вне. Приватные те, которые доступны ТОЛЬКО внутри класса. Синтаксис: #
  #surname;

  constructor(name, surn) {
    this.name = name;
    this.surn = surn;
    // this.#surname = surname;
  }

  show() {
    return this.name + ' ' + this.surn;
  }
}

let user = new User('john', 'smit');
console.log(user.show());


// !===================================================================================


console.log("---------------------- Вызов второго класса: приват ----------------")

class User1 {
  // * 1. Приватные могут быть также и методы.  Обычно приватными делают вспомогательные методы, 
  // * чтобы они случайно не могли быть вызваны извне класса.
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	
	show() {
    // *3. Воспользуемся нашим вспомогательным методом внутри другого метода:
		return this.#cape(this.#name);
	}
	
	#cape(str) {
    //  * 2. Параметром будет принимать строку и делать заглавным ее первый символ
		return str[0].toUpperCase() + str.slice(1);
	}
}

let user1 = new User('john');
console.log(user1.show());


class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	getSalary() {
		return this.#addSign(this.salary);
	}
	
	#addSign(num) {
		return num + '$';
	}
}

let dollarMan = new Employee()
console.log(dollarMan.getSalary())

// !===================================================================================

console.log("---------------------- Вызов третьего класса: геттеры свойства----------------")

class Example {
  #name; 
  #surname;

  constructor(name, surname) {
    this.#name = name
    this.#surname = surname
  }

  // ! 1. Специальные методы, которые позволяют прочитать приватные свойства
  getName() {
		return this.#name;
	}
	getSurname() {
		return this.#surname;
	}

}

let getUser = new Example('john', 'smit');
console.log(getUser.getName());
console.log(getUser.getSurname());

// !===================================================================================

console.log("---------------------- Вызов четвертого класса: установка сеттера через св-ва ----------------")

class AnotherExample {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	setSurn(surn) {
		this.#surn = surn;
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let setUser = new AnotherExample;
setUser.setName('john');
setUser.setSurn('smit');
console.log(setUser.getName());
console.log(setUser.getSurn());


// !===================================================================================

console.log("---------------------- Премущества set/get в ООП в JS ----------------")

// ! Дело в том, что геттеры и сеттеры имеют преимущество: перед обращением к свойству можно выполнять
// ! некоторые проверки. К примеру, в нашем случае мы при записи имени и фамилии можем проверить, что 
// ! новое значение не является пустой строкой:")
class Check {
	#name;
	#surn;
	
	setName(name) {
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect');
		}
	}
	setSurn(surn) {
		if (surn.length > 0) {
			this.#surn = surn;
		} else {
			throw new Error('surn is incorrect');
		}
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}


// !===================================================================================

console.log("---------------------- Цепочтка методов ----------------")

// ! Можно сделать так, чтобы методы можно было вызывать друг за другом цепочкой. 
// ! Для этого каждый такой метод должен возвращать this.

class Chain {
	#name;
	#surn;

	setName(name) {
		this.#name = name;
		return this;
	}
	setSurn(surn) {
		this.#surn = surn;
		return this;
	}
	
	getName() {
		return this.#name;
	}
	getSurn() {
		return this.#surn;
	}
}

let chain = new Chain;
chain.setName('john').setSurn('smit');
console.log(chain.getName());
console.log(chain.getSurn());