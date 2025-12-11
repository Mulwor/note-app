const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');
writable.write("First-line\n");
writable.write("Second-line\n");
writable.write("Third-line\n");

writable.end("Finished");

// Если после завершение, мы напишем метод write, то у нас будет ошибка
writable.write("One more plus")
