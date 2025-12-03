- [Понятие стримов](#понятие-стримов);
- [Преимущество стримов](#преимущество-стримов);
- [Какие есть виды стримов](#виды-стримов);
- [С какими видами данных работают стримы](#данные-стримов);
- [Подробнее про виды стримов](#Подробнее-про-виды-стримов);
   - [Writable stream](#writable-stream);
   - [Readable stream](#readable-stream);

<a id="понятие-стримов"></a>
Stream - абстрактный интерфейс для работы с потоковыми данными. Это унифицированный программный интерфейс для чтения или записи данных, сокетов и переносов данных между процессами. 

<a id="преимущество-стримов"></a>
Преимущество streams:

- Принцип разделения ответственности. Он создает маленькие компоненты, которые делают что-то одно, но они делают это очень хорошо. Таким образом мы можем менять код изолированного чего-то одного, что позволяет лучше управлять нашим приложением
- Гибкость, их можно легко подключать подключать, перенаправлять (когда направляем какие-то данные из одного источника в несколько мест назначения)
- Эффективность по времени и памяти, так как они получают данные по кусочкам, они потребляет небольшое кол-в памяти и это потребления памяти является фиксированным потому что поток который через stream он равномерен.

<a id="виды-стримов"></a>
В node.js 4 основных видах стрима: writable (нужен для писания данных), readable (нужен для чтения данных), duplex (могут как читать так и писать), transform (вычислять на основе входных данных - выходные данные и отдавать их дальше).  

<a id="данные-стримов"></a>
Стримы работают с двумя видами данных - это буфферы (или строки) и объекты. 
Буфферы - абстрактный способом хранения последовательности данных фиксированной длины. 

Буфферы - такие объекты, которые нужны для представления данных фиксированной длины. Это также подкласс unitInArray. Способы создания буфферов

`const { Buffer } = require('buffer')`;

| Код | Описание |
|-----|----------|
| `const emptyBuffer = Buffer.alloc(42);` | Если передаем 1 аргумент, то создается пустой буфер, который имеет размер 42 байта |
| `const filledBuffer = Buffer.alloc(42, 1);` | Если передаем 2 аргумента, то создается буфер, который имеет размер 42 байта содержащих единицу |
| `const fasterCreatedBuffer = Buffer.allocUnsafe(42, 1);` | Еще 1 способ создания буфера. Он небезопасный, работает быстрее, но может захватить больше области памяти в которых уже имеются какие-то данные и прежде чем с ним работать нужно эти данные отчистить |
| `const bufferFromStringDefaultUTF8 = Buffer.from('javascript');` | Буфер может быть создан из строки |
| `const bufferFromStringLatin1 = Buffer.from('javascript', 'latin1');` | Также вторым аргументом можем передавать кодировку |
| `const bufferFromArray = Buffer.from([1,2,3]);` | Буфер также можно создавать из массива |

[Пример кода](./streams/01-buffer.js), а также подробнее можно почитать в [документации](https://nodejs.org/api/buffer.html)

Буферы также считаются итерируемыми объектами - то есть с помощью цикла for of мы можем перебрать их. 

Все стримы используют какие-то внутренние буфферы для хранения каких-то данных. Кол-в данных определяется размером буффера. Чтобы узнать порог ("ограничение по памяти") можно использовать хай watermark. 



<a id="writable-stream"></a>

### Writable streams

Writable streams наследники базового класса одного-именного writable, которые находится в модуле стримы. И они предоставляют два метода с которыми можно работать - метод `WRITABLE.WRITE` и `WRITABLE.END`. 

Какие есть стримы во writable: 
1. `request` - запрос на клиентской стороне; 
2. `response` - ответ на серверной стороне; 
3. `process.stdout` и `process.stderr` - потоки для вывода данных
5. `child process stdin`, 
6. `fs-streams`, 
7. `zlib` - модуль для архивации (сжатие данных)
8. `crypto` - всевозможные шифрования
9. `TCP sockets` и т.д. 

Все стримы, включая writable использует API eventemitter (встроенный модуль в node.js, который предоставляет функционал нам для работы с событиями), позволяет нам эмитеть некие события, генерировать, подписаться и т.д. 

Основной список событий, который эмитит у нас writable stream: 
1. `error` - события эмитится когда происходит какая-то ошибка и для обработки ошибки мы можем подписать на это события;
2. `drain` - когда внутренний буфер заполняется, то с помощью данного метода когда буфер освободится он сразу же запишет какие-то значения;
3. `close` - когда стрим ресурс закрывается или завершается и он не может писать данные - метод writable.destroy;
4. `finish` - когда процесс записи завершается и все данные уже записаны пример writable.end();
5. `pipe` - когда readable стрим пайпится в writable stream;
6. `unpipe` - когда readable стрим отсоединяется от writable stream;

Например, читает `/01-buffer.js` и создает новый файл new_file.txt

```js
const fs = require('fs');

// Читает из /01-buffer.js и записывает в другой файл
const rs = fs.createReadStream('./01-buffer.js');
const ws = fs.createWriteStream('new_file.txt');

// Подписываемся на все события
ws.on('close', () => console.log("Writable stream has been closed"));
ws.on('finish', () => console.log("Writable streams has been finished"));
ws.on('pipe', () => console.log("Piped to readable stream"));
ws.on('unpipe', () => console.log("Unpiped from readable stream"));

/*
  Вот что выведется в console.log
  
  В начале отработал события подсоединение к стриму => 
    1. Piped to readable stream, 
  затем у нас стрим завершился обработал события close =>
    2. Writable streams has been finished
  затем у нас обработался finish, потому что запись завершилась =>
    3. Unpipe from readable stream
  а в конце уже обработался close => 
    4. Writable stream has been closed
*/

ws.on('error', (err) => console.log(`Error occurred: ${err}`));
ws.destroy(new Error("Ooops"))

rs.pipe(ws);
```

Помимо событий у него есть еще методы и какие-то полезные свойства: 

1. `WRITABLE.WRITE`, принимает 3 параметра - 1. то что надо записать, 2. callback, 3. кодировка (по умолчанию UTF-8, если ничего не передать).

```js
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
});`
```

Он возвращает true/false. Если false то у нас переполнился внутренний буффер и мы должны что-то с этим сделать прежде чем писать. Например куда-то отдать эти данные

2. `WRITABLE.END` - метод когда мы хотим записать какой-то последний кусочек данных, и после этого стрим у нас будет закрыт 

```js
const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');
writable.write("First-line\n");
writable.write("Second-line\n");
writable.write("Third-line\n");

writable.end("Finished");

// Если после завершение, мы напишем метод write, то у нас будет ошибка
writable.write("One more plus")
```

3. `WRITABLE.DESTROY` - делает грубое закрытие стрима (ломает). В качестве аргумента он может принимать ошибку и если мы его передали, то эту ошибку можно обработать через error

```js
const { createWriteStream } = require('fs');

const writable = createWriteStream('./output.txt');

writable.write("First-line\n");
writable.write("Second-line\n");

// Можем передать ошибку сюда
writable.destroy();

// Если после завершение, мы напишем метод write, то у нас будет ошибка
writable.write("One more plus")
writable.end("Finished")
```

4. `WRITABLE.CORK` & `WRITABLE.UNCORK` (используется редко). Метод `.CORK` - он заставляет все записанные данные буфферизоваться в памятиб он никуда никакие данные не запишет пока не будет вызван метод `.uncork`. Они работают в паре 

```js
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
```

Стоит отметить, у нас кол-во `cork()` должно совпадать с `uncork()`, то есть если у одного два, то и другого должно быть столько

Полезно использовать тогда когда chunks быстро записываются и мы не хотим их сразу быстро отправлять, мы в начале их буферизуем и нам не нужно дожидатся выполнения чанков и мы отдадим сразу все на выходе с помощью метод uncork();
 
Другие методы:
| Метод | Описание |
|-----|----------|
| writable.setDefaultEncoding(encoding) | Установить дефолтную кодировку для строк с которыми он будет работать |
| writable.destroyed | Показывает (true/false) был ли вызван метод ,destroy | 
| writable.writable | Показывает можно ли еще стрим использовать для того, чтобы писать |
| writable.writableEnded | Показывает был ли вызван метод .end |
| writable.writableCorked | Показывает был ли вызван метод .cork и при этом не вызван ли метод .uncork |
| writable.writableHighWaterMark | Можем получить значения HighWaterMark для этого стрима | 
| writable.writableLength | Показывает число, байт или объектов готовые к записи |
| writable.writableNeedDrain | Флаг, который показывает нужно ли чистить наш внутренний буфер |
| writable.writableObjectMode | Геттер для object-мода, если у нас true, то стрим у нас работает в object-mode если нет, то работает со строками

---

<a id="readable-stream"></a>

### Readable streams 

Readable streams нужны нам для чтения данных. Какие есть readable stream: 
1. `request(server side)` на серверной стороне, так как мы их читаем, 
2. `response(client side)` так читаем ответ сервера, 
2. `process.stdin()` - стандартный поток ввода
3. `child process stdout`, `stderr` - те потоки, которые мы можем читать из дочернего процесса. 
5. `fs streams`
6. `zlib`, `crypto`, `TCP sockets` и так далее. 

У readable stream есть несколько modes (режимы чтения):
1. `Paused mode` - когда он находится в остановленном состоянии. Он не читает данные, чтобы их буфферизировать, чтобы их прочитать нам надо явно вызвать метод readable. Когда мы только создаем стрим fs.createStream - он не читает данные, он находится в paused mode, надо явно указать чтобы он начал читать 
2. `Flowing mode` - когда он находится в текущем состоянии (в состоянии потока). Когда readable stream читает данные автоматически и отдает их дальше так быстро как это возможно и метод внутренний readable.read он вызывается автоматом

Для того, чтобы переключить с paused mode на flowing mode можно:
1. Повесить обработчик события на data
2. Вызвать метод readable.resume (продолжить чтения)
3. Использовать readable.pipe(writable)

А для того чтобы перевести его обратно в pause mode  

- Мы должны вызвать readable.pause метод, который его остановит, однако это не сработает если readable куда-то запайпили. 
- Если у него есть какие-то пайпы, то необходимо отключить все через readable.unpipe.

Что нужно понимать - Readable стрим не отдает данные никуда до тех пор пока не реализовали механизм, который их поглощать. 

Он тоже использует API event-emitter и имеет список событий
1. `.data` - подписавший на событие мы можем читать данные

```js
const { createServer } = require("http");
const PORT = 3000;

// Представим себе, что мы с клиента отправляем запрос, который содержит тело и нам
// это тело нужно прочитать и что-то с ним сделать
const server = createServer((request, response) => {
  let body = ""; 

  // Подписываемся на событие date, и здесь у нас callback, 
  // который передается чанк с данными и приводим к строке
  request.on('data', (chunk) => {
    body += chunk.toString();
  });

  // После чего мы просто отправляем на клиент сообщение, что тело
  // было успешно прочитано и мы отправляем сколько в нем было св-в
  request.on('end', () => {
    const parsedBody = JSON.parse(body);
    console.log('Parsed body', parsedBody);

    const propsCount = Object.keys(parsedBody).length;
    console.log("Props count", propsCount);

    response
      .writeHead(200, { "Content-type": "text/plain" })
      .end(`Body from request has been successfully accepted and parsed. It has ${propsCount}`)
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
```

2. `.readable` - имитится тогда когда можно прочитать какие-то данные

```js
const { createServer } = require("http");
const PORT = 3000;

const server = createServer((request, response) => {
  let body = ""; 

  // Подписываемся на readable, когда вылетает данное событие когда стрим говорит нам, что нужно прочитать. У меня есть данные приди и забери
  request.on('readable', () => {
    let chunk;
    // req.read() - берем и вызываем метод read() - он возвращает нам либо наши данные либо null (возвращает в том случае когда достигнут конец нашего источника данных в нашем случае когда body будет прочитано до конца либо когда данные не готовы - когда мы забираем быстрее чем они помещаются в наш буфер)
    // Пока результат не является наллом мы записываем значения
    while ((chunk = req.read()) !== null) {
        body += chunk.toString();
    }
  });

  request.on('end', () => {/* Тоже самое что и в первом примере */})
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
```

Основное отличие при событии data у нас автоматически генерится эти события, stream перешел во `Flowing mode` и нам не надо вручную дергать метод `readable.read`. А события readable говорит вот сейчас подходящий момент чтобы вызвать метод read и вы уже сами его вызываете

3. `.end` - эмитится когда у нас больше нет данных, которых можно прочитать. Данное события выйдет только тогда когда события будут полностью поглащены (то есть когда они будут отданы куда-то)
4. `.pause` - эмитится когда вызывает метод readable.pause и при этом он не равно false. Когда будет фиктивный вызов
5. `.resume` - эмитится когда вызывает метод readable.resume и при этом reable.flowing у нас не равен true
6. `.error` - для обработки ошибок
7. `.close` - когда стрим у нас закрывается

Помимо событий у него есть еще методы и какие-то полезные свойства: 

[01:13:25]