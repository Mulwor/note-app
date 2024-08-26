// Типизация функций
function sum(a: number, b: number): number {
  // (Типизируем входящие параметры) и выходящие параметры (то, что она возвращает)
  return a + b;
}

function sum1(a: number, b: number): void {
  // (Типизируем входящие параметры) и если наша функция ничего не возвращает, то пишем void
  let c = a + b;
  console.log(c);
}

const sum2 = (a: number, b: number): number => {
  let c = a + b;
  console.log(c);
  return c;
};

function toUpperCase(strings: Array<string>): Array<string> {
  return strings.map((s) => s.toUpperCase());
}

type ManType = {
  name: string;
  height: number;
};

let createMan = (name: string, height: number): ManType => {
  return {
    name,
    height,
  };
};


// Object + function
type CarType1 = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void
}

let carStar: CarType1 = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}


// function + function
type createGarageType = {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => CarType[]
}

let createGarage = (): createGarageType => {
    let _cars: Array<CarType> = [];
    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}