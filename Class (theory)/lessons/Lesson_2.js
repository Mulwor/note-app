class User {
  // ? Записываем значения
  firstName = 'Jack';

  // ? Конструктор – это специальный метод, который вызывается при создании нашего
  // ? класса
  constructor(name, surname) {
    console.log('Вызов конструктора: ');
    console.log(name + ' ' + surname);
  }

  show() {
    // ? This внутри нашего класса будет адресован к нашей копии
    console.log(this); // Ссылка на объект
    console.log(this.name); // Ссылка на значение
  }

  // ? Одни методы можно вызывать внутри других через this.
  show1() {
    console.log(this.cape(this.name));
  }

  cape(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}

let user = new User('Jack', 'Tare');                // ? Jack Tare
user.name = 'john';                                 // ? User { firstName: 'Jack', name: 'john' }
user.show();                                        // ? john
user.show1();                                       // ? John    
console.log(user.firstName);                        // ? Jack