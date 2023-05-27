'use strict';

const flights = ['Russia', 'USA', 'London', 'London', 'USA'];

const setFlights = new Set(flights);
console.log(setFlights);

// Размер
console.log(setFlights.size);

// Наличие элемента
console.log(setFlights.has('Russia'));

// Добавление элемента
setFlights.add('Paris');
setFlights.add('Paris');
console.log(setFlights);

// Удаление элемента
setFlights.delete('London');
console.log(setFlights);

// Очистка множества
// setFlights.clear;
console.log(setFlights);

//  Перебор элементов
for (const flight of setFlights) {
  console.log(flight);
}

// Возврат к массиву
console.log([...setFlights]);

// Множество из массива объектов
const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }]);
console.log(setObj);

// Множество из строки
console.log(new Set('abcd'));