// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
  //Ваш код

  let max = numbers[0];  // Ініціалізуємо перший елемент як максимальний
    for (let i = 1; i < numbers.length; i++) {  // Починаємо з другого елемента
        if (numbers[i] > max) {  // Якщо поточний елемент більше за max
            max = numbers[i];    // Оновлюємо значення max
        }
    }
    return max;  // Повертаємо найбільше число

}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;