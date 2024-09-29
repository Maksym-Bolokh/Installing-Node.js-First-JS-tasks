// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  // Ваш код тут
  
  
  let result = ""
  const letters = "aeiouAEIOU"

  for(let i =0; i <str.length; i++) {
    if(letters.includes(str[i])){
      result+="*"
    } else{
      result+=str[i]
    }
  } 
  return result
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
