// Задача: Напишіть функцію sumArray, яка приймає масив чисел і 
// повертає їхню суму. Використовуйте цикл для обчислення суми.

function sumArray(numbers) {
  // Ваш код тут


  let sum = 0;  // Змінна для збереження суми
  for (let i = 0; i < numbers.length; i++) {  // Проходимо по кожному елементу масиву
      sum += numbers[i];  // Додаємо кожен елемент до змінної sum
  }
  return sum;  // Повертаємо суму


}

console.log(sumArray([1, 2, 3, 4, 5])); // Виведе: 15
console.log(sumArray([10, 20, 30]));    // Виведе: 60

module.exports = sumArray;