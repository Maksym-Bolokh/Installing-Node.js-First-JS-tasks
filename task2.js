// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  // Ваш код тут

  
  let result = '';  // Змінна для збереження результату
  for (let i = str.length - 1; i >= 0; i--) {  // Ітеруємо рядок у зворотному порядку
      if (isNaN(parseInt(str[i])) && str[i] !== ' ') {  // Перевіряємо, чи символ не є цифрою
          result += str[i];  // Додаємо символ до результату
      }
  }
  return result;  // Повертаємо результат

}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;