/*Необходимо написать функцию, которая принимает на вход delay и outputChar (метод для печати символов)
а возвращает функцию для добавления текста на печать. Если в очереди на печать есть текст - то функция посимвольно выводит
его в outputChar

 */

// function typeWrite(delay, outputChar) {
//     const buffer = [];
//     let isRun = false;
//
//     async function run() {
//         isRun = true;
//         while (buffer.length) {
//             outputChar(buffer.shift());
//             await new Promise((resolve) => setTimeout(resolve, delay));
//         }
//         isRun = false;
//     }
//
//     return function writeText(text) {
//         buffer.push(...text);
//         if (!isRun) {
//             run();
//         }
//     }
//
//
// }

/*Необходимо написать функцию, которая принимает на вход delay и outputChar (метод для печати символов)
а возвращает функцию для добавления текста на печать. Если в очереди на печать есть текст - то функция посимвольно выводит
его в outputChar

 */


// ===================================================================

function typeWrite(delay, outputChar) {
    // Инициализируем переменную promise, которая будет хранить цепочку промисов.
    // Сначала это Promise.resolve(), который мгновенно разрешается.
    let promise = Promise.resolve();
    // Функция writeText отвечает за печать текста посимвольно с заданной задержкой.
    async function writeText(text) {
        // Цикл проходит по каждому символу текста.
        for (let i = 0; i < text.length; i++) {
            // Вызываем метод outputChar для вывода текущего символа.
            outputChar(text[i]);
            // Ждем заданную задержку перед выводом следующего символа.
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    // Возвращаем функцию, которая добавляет текст в очередь печати.
    return function run(text) {
        // Здесь мы добавляем вызов writeText в цепочку промисов.
        // promise.then() гарантирует, что текущий вызов writeText начнется
        // только после завершения предыдущего вызова writeText.
        promise = promise.then(() => writeText(text));
    };
}




function runTest() {
    let start = Date.now();

    function outputChar(char) {
        console.log(`${Date.now() - start}: ${char}`);
    }

    const writeText = typeWrite(100, outputChar);
    writeText("ab");
    writeText("CD");
    setTimeout(()=>writeText('ef'), 250);
    setTimeout(()=>writeText('xy'), 700);
}

runTest();
