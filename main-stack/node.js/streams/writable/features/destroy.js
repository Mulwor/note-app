const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');

writable.write("First-line\n");
writable.write("Second-line\n");

// Можем передать ошибку сюда
writable.destroy();

// Если после завершение, мы напишем метод write, то у нас будет ошибка
writable.write("One more plus")
writable.end("Finished")