const letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function isPangram(text) {
    let newStr = new Set();

    for (let i = 0; i < text.length; i++) {
        let newTextWithUpperCase = text[i].toUpperCase()

        if (newTextWithUpperCase >= letter[0] && newTextWithUpperCase <= letter[25]) {
            newStr.add(text[i])
        }
    }

    return newStr.size === 26
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); // true
console.log(isPangram('Pack my box with five dozen liquor jugs')); // true
console.log(isPangram('How vexingly quick daft zebras jump')); // true
console.log(isPangram('The five boxing wizards jump quickly')); // true
console.log(isPangram('Hello world')); // false
console.log(isPangram('This sentence contains most letters but not all')); // false
console.log(isPangram('')); // false (пустая строка)
console.log(isPangram('1234567890!@#$%^&*()')); // false (только символы и цифры)
console.log(isPangram('The QUICK brown FOX jumps over THE lazy DOG!')); // true
console.log(isPangram('A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z')); // true
console.log(isPangram('Mr. Jock, TV quiz PhD, bags few lynx')); // true
console.log(isPangram('abcdefghijklmnopqrstuvwxyz')); // true (только алфавит)
console.log(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ')); // true (только алфавит в верхнем регистре)
console.log(isPangram('a b c d e f g h i j k l m n o p q r s t u v w x y z')); // true (алфавит с пробелами)
console.log(isPangram('The quick brown fox jumps over the laz dog')); // false (нет 'y')
console.log(isPangram('bcdefghijklmnopqrstuvwxyz')); // false (нет 'a')
console.log(isPangram('abcdefghijklmnopqrstuvwxy')); // false (нет 'z')