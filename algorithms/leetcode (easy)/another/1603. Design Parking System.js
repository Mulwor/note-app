// ! 1603. Design Parking System
// ! Link: https://leetcode.com/problems/design-parking-system/
// ! Topics: design, simulation, counting

// * Design a parking system for a parking lot. The parking lot has 
// * three kinds of parking spaces: big, medium, and small, with a fixed 
// * number of slots for each size. Implement the ParkingSystem class:

// * 1. ParkingSystem(int big, int medium, int small) Initializes object of the 
// * ParkingSystem class. The number of slots for each parking space are given as 
// * part of the constructor.

// * 2. bool addCar(int carType) Checks whether there is a parking space of carType 
// * for the car that wants to get into the parking lot. carType can be of three kinds:
// * big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can
// * only park in a parking space of its carType. If there is no space available, return
// * false, else park the car in that size space and return true.

// * Input: ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"], [[1, 1, 0], [1], [2], [3], [1]]
// * Output: [null, true, true, false, false]

/*
  [
    Доступный мест всего 2 - это 1, 1
      "ParkingSystem" ===> [1, 1, 0] ===> null
      
      "addCar" ===> [1] ===> true
      "addCar" ===> [2] ===> true
      "addCar" ===> [3] ===> false
      "addCar" ===> [1] ===> false
  ]
*/ 

// ? Первое решение
var ParkingSystem = function(big, medium, small) {
  this.parkingSpace = [big, medium, small];
};


ParkingSystem.prototype.addCar = function(carType) {    
  // ? console.log('Space:', this.parkingSpace)               // [1, 1, 0]
  // ? console.log('Тип:', carType - 1)                       // 0, 1, 2
  // Проверка на наличие мест согласно определенному типу машины
  // ? console.log(this.parkingSpace[carType - 1])            // 1, 1, 0, 0
  if (this.parkingSpace[carType - 1] > 0) {
    // Если парковое место есть, то после того как машина встала на парковку
    // Уменьшилось значение парковки и вернула true
    this.parkingSpace[carType-1]--
    return true
  }

  // А если мест нет возвращает false;
  return false
};

// ? Пояснения
// * 1. this.parkingSpace[carType - 1] ===> this.parkingSpace  начинается с индекса 0, 
// * но типы автомобилей указаны как 1, 2, 3, индекс для проверки свободных мест 
// * рассчитывается как carType-1.