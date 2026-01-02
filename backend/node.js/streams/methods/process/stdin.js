// ! ============== Отображение того что ты написал ==========
process.stdin.on('data', (data) => {
  // console.log('Ты написал:', data.toString());
  // process.exit();
});


// ! =============== Спросить как зовут ======================
// console.log('Как тебя зовут?');

process.stdin.once('data', (name) => {
  // console.log('Привет,', name.toString().trim() + '!');
  // process.exit();
});

// Завершение ввода 
process.stdin.on('end', () => console.log('Ввод завершен'))


// ! ============== Сложение первых двух чисел ===============
// console.log('Введи первое число:');

// let firstNumber;

// process.stdin.once('data', (num1) => {
//   firstNumber = Number(num1);
//   console.log('Введи второе число:');
  
//   process.stdin.once('data', (num2) => {
//     const secondNumber = Number(num2);
//     console.log('Сумма:', firstNumber + secondNumber);
//     process.exit();
//   });
// });