const buf = Buffer.from("Buffer")

process.stdout.write("LALALALA");
process.stdout.write("\n");
process.stdout.write(buf);
process.stdout.write('\n');

{/*
  Вот что выведется в console.log:
    В начале вывелось LALALALA, 
    затем сработал перенос строки "\n",
    затем вывелся буффер в виде строки 
    и снова перевод строки
*/}

// Например мы можем записать еще один кусочек в этом коллбеке
process.stdout.write("Write with callback", () => { 
  process.stdout.write("\nCallback!")
})