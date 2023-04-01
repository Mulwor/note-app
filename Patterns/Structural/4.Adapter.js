// Adapter - оборачивает несовместимый с чем-то объект и делает его совместимым не изменяя исходный код объекта 
/*) Например: у нас есть куча разных видов флешек: sd, microsd, typeC и один порт USB, чтобы перебрасывать информа-
цию с этих карточек на компьютер мы используем картридер*/

// У нас есть данный двигатель Engine 2.0 
class Engine2 {
	simpleInterface() { 
		console.log('Engine 2.0 - tr-tr-tr') 
	}
}
// и вы хотите его заменить на Engine V8!
class EngineV8 {
	complecatedInterface() { 
		console.log('Engine V8! - wroom wroom!') 
	}
} 
/* Каждый объект имеет свой интерфейс, simpleInterface и complecatedInterface, однако работать
нам нужно с обоими а если быть точным, то подогнать подключение engine v8 на место engine 2.0. В этом
случае нам как раз и понадобится паттерн adapter*/


// Cоздаем доп.класс, который будет оборачивать нестандартный класс и подгонять его под стандартные уже использующиеся методы
class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}
    /* Мы обернули метод complecatedInterface() в simpleInterface() и технически у нас получился adapter. Наш новый двигатель
	должен прекрасно встать на место прежнего*/
	simpleInterface() {
		this.engine.complecatedInterface();
	}
}

// Для проверки создадим класс нашего автомобиля, который запускает двигатель
class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
}

const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine);                    //Engine 2.0 - tr-tr-tr

const myCarSecond = new Auto();
const engineAdapterSecond = new EngineV8Adapter(new EngineV8());
myCarSecond.startEngine(engineAdapterSecond);     //Engine V8! - wroom wroom 

// Чтобы убедится что новый двигатель не станет на место старого мы уберем абертку из адаптера и запустим еще раз
const myCarThird = new Auto();
const engineAdapterThird = new EngineV8();
myCarThird.startEngine(engineAdapterThird);       //Error


/* Adapter - структурный паттерн, который оборачивает объект с уникальным или специфическим внутренним устройством и 
подгоняет его в уже стандартизированный системе классов. Адаптирует его специфические методы и 
свойства под уже использующиеся, что позволяет объектом несовместимым интерфейсами работать 
вместе */