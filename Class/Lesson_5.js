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