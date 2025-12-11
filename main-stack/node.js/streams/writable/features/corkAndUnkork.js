const { createWriteStream } = require('fs');
const writable = createWriteStream('./output.txt');

writable.cork();

writable.write("1-line\n");
writable.write("2-line\n");
writable.write("3-line\n");
writable.write("4-line\n");
writable.write("5-line\n");
writable.write("6-line\n");

writable.uncork();