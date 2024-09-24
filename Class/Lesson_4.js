// ? В геттерах можно выполнять условия. Например проверка на наличие пустой строки
class Check {
	#name;
	#surname;
	
	setName(name) {
		if (name.length > 0) {
			this.#name = name;
		} else {
			throw new Error('name is incorrect');
		}
	}
	
	setSurname(surname) {
		if (surname.length > 0) {
			this.#surname = surname;
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
