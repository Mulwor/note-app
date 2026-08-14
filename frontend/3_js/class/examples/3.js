/*
    ! 1. Сравнение объектов в ООП в JavaScript.
    ! 2. Оператор instanceof в ООП в JavaScript.
    ! 3. Класс как набор методов в ООП в JavaScript.
    ! 4. Объекты внутри классов в ООП в JavaScript. В классах можно использовать объекты других классов.
    ! 5. Массивы объектов в ООП в JavaScript.
    ! 6. Манипуляция объектами в классах в ООП в JavaScript. Классы параметрами методов могут принимать 
    ! объекты других классов и манипулировать этими объектами. 
    ! 7. Встроенные классы JavaScript
    ! 8. Встроенные классы DOM JavaScript
*/ 

console.log("================= Сравнения объектов =================")

// * 1) Два переменные будут считаться равными, если они содержат ссылку на один и тот же объект.
class User {
	constructor(name) {
		this.name = name;
	}
}

let user1 = new User('1');
let user2 = new User('2');
console.log(user1 === user1);       // true
console.log(user1 === user2);       // false


class Employee {
	constructor(name) {
		this.name = name;
	}
}
let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 !== emp1);         // false 
console.log(emp1 !== emp2);         // true


class Employee1 {
	constructor(name) {
		this.name = name;
	}
}

let emp3 = new Employee1('john');
let emp4 = emp3;

console.log(emp3 === emp4);         // true



class Employee2 {
	constructor(name) {
		this.name = name;
	}
}

let emp5 = new Employee2('john');
let emp6 = emp5;
emp6.name = 'eric';

console.log(emp5 === emp6);
console.log(emp5)



console.log("================= Оператор instanceof ===================")

// * Оператор instanceof позволяет проверить принадлежит ли объект определенному классу. 

class User1 {}
let checkUser = new User1;
console.log(checkUser instanceof User1); // true


console.log("================= Класс как набор методов ===================")

class ArrHelper {
	getSum(arr) {
		let res = 0;
		for (let num of arr) {
			res += num;
		}
		return res;
	}
	
	getAvg(arr) {
		if (arr.length > 0) {
			let sum = this.getSum(arr);
			return sum / arr.length;
		} else {
			return 0;
		}
	}
}

let arrHelper = new ArrHelper;

let sum1 = arrHelper.getSum([1, 2, 3]);
console.log(sum1);

let sum2 = arrHelper.getSum([3, 4, 5]);
console.log(sum2);

console.log("================== Объекты внутри классов =========================")

class City {
	constructor(name) {
		this.name = name;
	}
}

class User2 {
	constructor(name, surn, city) {
		this.name = name;
		this.surn = surn;
		this.city = city;
	}
}

let city = new City('luis');

// City - берем из другого класса 
let user = new User2('john', 'smit', city);

console.log(user.name);
console.log(user.city.name);

console.log("================== Массивы объектов =========================")

// * Объекты классов можно хранить в массиве и выполнять с ними различные операции, как с элементами массива.
class User3 {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

let users = [ new User3('john'), new User3('eric'), new User3('kyle') ];

for (let user of users) {
	console.log(user.getName());
}

console.log("================== Манипуляция объектами =========================")

class User4 {
	#name;
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class UsersCollection {
	#users;
	constructor() {
		this.#users = [];
	}
	add(user) {
		this.#users.push(user);
	}
	show() {
		for (let user of this.#users) {
			console.log(user.getName());
		}
	}
}

let uc = new UsersCollection;
uc.add(new User4('john'));
uc.add(new User4('eric'));
uc.add(new User4('kyle'));
uc.show();

console.log("================== Встроенные классы JavaScript =========================")

let date = new Date;
console.log(date);
console.dir(date);

let reg = new RegExp;
console.log(reg);
console.dir(reg);
console.log(reg instanceof RegExp);

let arr = [1, 2, 3];
console.log(arr);
console.dir(arr);
console.log(arr instanceof Array);

let arr1 = new Array(1, 2, 3);
console.log(arr1);
console.dir(arr1);
console.log(arr1 instanceof Array);

let obj = {a: 1, b: 2, c: 3};
console.log(obj);
console.dir(obj);
console.log(obj instanceof Object);

let obj1 = new Object;
console.log(obj1);
console.dir(obj1);
console.log(obj1 instanceof Object);


console.log("================== Встроенные классы DOM  =========================")
let elem = document.querySelector('p');
console.log(elem);
console.dir(elem);
console.log(elem instanceof HTMLParagraphElement);          // true