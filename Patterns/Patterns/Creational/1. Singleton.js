// Singleton - объект, которой есть в системе в 1 экзампляре + к нему есть какая-то глобальная точка доступа.

/* Нужен каждый раз когда в системе должен быть объект в едином экземпляре и к которому может
быть доступ из разных частей программы. Например: корзина для интернет-магазина или карта клиента */

// Создание singleton с помощью литерала объекта (простой пример)
const instance1 = { name: "singleton" };
const instance2 = { name: "singleton" };
// Объекты никогда не будут равны между собой, если даже это два объекта с одинаковым значением
instance1 === instance2;   // false

/* Каждый раз когда мы попытаемся создать объект с помощью литерала у нас получится singleton (объект,
находящий в одном экземпляре)*/

/* Для того, чтобы создать singleton существует два основных подхода:
1. Можно создать глобальную переменную и обращаться к ней, после чего весь код завернуть в модуль*/
// Данная реализация объявляет сущность instance 
let instance; 
// и функцию конструктор Counter, внутри данного класса реализован пользовательский констркутор, который
class CounterFirst {
    constructor() {
        /* проверяет существует ли instance, если его нет он создает его и начинает на него ссылатся, а
        если он есть, то конструктор получает ссылку на него, в результате чего у нас в системе появляется
        объект instance и конструктор со ссылкой на этот объект. Любой объект созданный с помощью конструктора
        counter будет получать ссылку на instance, а не создавать каждый раз новый instance*/
        if(!instance) instance = this;
        return instance; 
    }
};

// Расширяем наш класс, в наш конструктор мы поместили свойства: count и два метода getCount() и increaseCount()
class CounterOrigin {
    constructor () {
        if (!instance) instance = this; 
        instance.count = 0;
        return instance;
    }
    // Возвращает значения счетчика
    getCount() {
        return instance.count;
    }
    // Увеличивает значения счетчика
    increaseCount() {
        return instance.count++;
    }
}
/* Несмотря на то, что у нас два разных объекта, созданных при помощи функции конструктора, они все равно
ссылаются на 1 объект singleton и изменяют его 4 раза. Стоит отметить, что использование глобальных переменных -
это не совсем хороший тон.*/


//2. Определить singleton внутри объекта 
// Данное решение более правильное
class Counter {
	constructor() {
        // В этой реализации мы сохранили ссылку на экземпляр в статитическом свойстве конструктора
		if (typeof Counter.instance === 'object') {
			return Counter.instance;
		}
		this.count = 0;
		Counter.instance = this;
		return this;
	}
	getCount() {
		return this.count;
	}
	increaseCount() {
		return this.count++;
	}
}

const myCount1 = new Counter();
const myCount2 = new Counter();
// Вызываем два раза как у первого объекта так и у второго
myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();
console.log(myCount2.getCount());    // 4
console.log(myCount1.getCount());    // 4