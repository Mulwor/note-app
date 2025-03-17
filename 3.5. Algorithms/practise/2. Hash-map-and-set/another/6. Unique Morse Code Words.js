// ! 804. Unique Morse Code Words
// ! Link: https://leetcode.com/problems/unique-morse-code-words/description/

// ? International Morse Code defines a standard encoding where each letter is mapped
// ? to a series of dots and dashes, as follows: 'a' maps to ".-", 'b' maps to "-...", 
// ? and so on. For convenience, the full table for the 26 letters of the English alphabet

// ? Input: words = ["gin","zen","gig","msg"] ====> Output: 2
// ? Explanation: The transformation of each word is:
// ? "gin" -> "--...-."
// ? "zen" -> "--...-."
// ? "gig" -> "--...--."
// ? "msg" -> "--...--."
// ? There are 2 different transformations: "--...-." and "--...--.".

const morseCode =  {
  'a': '.-',    'b': '-...',  'c': '-.-.', 
  'd': '-..',   'e': '.',     'f': '..-.',
  'g': '--.',   'h': '....',  'i': '..',
  'j': '.---',  'k': '-.-',   'l': '.-..',
  'm': '--',    'n': '-.',    'o': '---',
  'p': '.--.',  'q': '--.-',  'r': '.-.',
  's': '...',   't': '-',     'u': '..-',
  'v': '...-',  'w': '.--',   'x': '-..-',
  'y': '-.--',  'z': '--..',
}

// ! Первое решение
var uniqueMorseRepresentations = function(words) {
  const encodedWords = words
  .map((word) => word.split("")
  /* [
    [ 'g', 'i', 'n' ],
    [ 'z', 'e', 'n' ],
    [ 'g', 'i', 'g' ],
    [ 'm', 's', 'g' ]
    ] */ 
      .map((c) =>  morseCode[c])
      /* [
        [ '--.', '..', '-.' ],
        [ '--..', '.', '-.' ],
        [ '--.', '..', '--.' ],
        [ '--', '...', '--.' ]
      ]*/
      .join("")
      // [ '--...-.', '--...-.', '--...--.', '--...--.' ]
    );

  return new Set(encodedWords).size;
};


// ! Второе решение
var uniqueMorseRepresentations = function(words) {
  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    let encryptedWord = "";
      
    for (let j = 0; j < words[i].length; j++) {     // ? 3 * 4
      const character = words[i][j];                // ? g i n z e n g i g m s g
      encryptedWord += morseCode[character];        // ? из ключей делает значение
    }
    
    set.add(encryptedWord);
  }

  return set.size;
};

// ! Третье решение
var uniqueMorseRepresentations = function(words) {
  const result = new Set();

  const morseCodeMap = new Map([
    ['a', ".-"],
    ['b', "-..."],
    ['c', "-.-."],
    ['d', "-.."],
    ['e', "."],
    ['f', "..-."],
    ['g', "--."],
    ['h', "...."],
    ['i', ".."],
    ['j', ".---"],
    ['k', "-.-"],
    ['l', ".-.."],
    ['m', "--"],
    ['n', "-."],
    ['o', "---"],
    ['p', ".--."],
    ['q', "--.-"],
    ['r', ".-."],
    ['s', "..."],
    ['t', "-"],
    ['u', "..-"],
    ['v', "...-"],
    ['w', ".--"],
    ['x', "-..-"],
    ['y', "-.--"],
    ['z', "--.."]
  ]);

  words.forEach((word) => {
    let code = "";
      
    // ? Цикл по массиву, set и map
    for(let char of word) {
      // ? get - Возвращает значение по ключу
      code += morseCodeMap.get(char)
    }
    
    result.add(code);
  });

  return result.size;
};