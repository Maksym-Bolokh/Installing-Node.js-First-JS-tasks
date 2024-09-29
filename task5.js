// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
  //Ваш код

  let count = 0;  // Лічильник для збереження кількості входжень
    for (let i = 0; i < str.length; i++) {  // Проходимо по кожному символу рядка
        if (str[i] === char) {  // Якщо поточний символ дорівнює шуканому
            count++;  // Збільшуємо лічильник
        }
    }
    return count;  // Повертаємо кількість входжень
    
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences;