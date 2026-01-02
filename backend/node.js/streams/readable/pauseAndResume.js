// Сработает когда что-то запишет в консоль
process.stdin.on('data', (chunk) => {
  const chunkStringified = chunk.toString();

  // Если чанк содержит строку стоп, тогда происходит остановика нашего стрима
  // и через 5 секунд он возмобновится
  if (chunkStringified.match('STOP')) {
    process.stdin.pause();

    setTimeout(() => {
      process.stdin.resume()
    }, 5000);
  };

  process.stdout.write(chunkStringified);
});