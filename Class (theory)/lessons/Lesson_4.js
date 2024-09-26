// ? В геттерах можно выполнять условия. Например проверка на наличие пустой строки
class Check {
	#name;
	#surname;
	
	setName(name) {
		if (name.length > 0) {
			this.#name = name;
			return this;
		} else {
			throw new Error('name is incorrect');
		}
	}
	
	setSurname(surname) {
		if (surname.length > 0) {
			this.#surname = surname;
			return this;
		} else {
			throw new Error('surname is incorrect');
		}
	}
	
	getName() {
		return this.#name;
	}

	getSurname() {
		return this.#surname;
	}
}

// ? Можно сделать так, чтобы методы можно было вызывать друг за другом цепочкой. 
// ? Для этого каждый такой метод должен возвращать this.
let chain = new Check();
chain.setName('john').setSurname('smit');
console.log(chain.getName());
console.log(chain.getSurname());