camelToSnake("helloWorld")        // "hello_world"
camelToSnake("getHTTPResponse")   // "get_http_response"
camelToSnake("firstName")         // "first_name"
camelToSnake("UserID")           // "user_id"

// Первый способ решить задачу
function camelToSnake(text) {
  // Заменяем все заглавные буквы на _ + та же буква в нижнем регистре
  // $1 - это содержимое первой捕获 группы (в нашем случае - заглавная буква)
  console.log(text.replace(/([A-Z])/g, '_$1').toLowerCase())
  return text.replace(/([A-Z])/g, '_$1').toLowerCase();
}

// Второй способ решить задачу
function camelToSnake(text) {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    
    // Проверяем, является ли символ заглавной буквой
    if (char >= 'A' && char <= 'Z') {
      // Добавляем подчеркивание, если это не первый символ
      if (i !== 0) {
        result += '_';
      }
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  
  return result;
}

// ==============================================================
console.log(isPangram('A pangram or holoalphabetic sentence is a sentence using every letter of a gived alphabet at least once'))
console.log(isPangram('Waltz, bad nymph, for quick jigs vex'))
console.log(isPangram('thequickbrownfoxjumpsoverthelazydog'))

function isPangram(text) {
  const set = new Set()

  for (let i = 0; i < text.length; i++) {
    set.add(text[i])
  }

  return set.size === 26
}

