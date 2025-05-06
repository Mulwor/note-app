1. Node.js core modules may have following API types

a) Synchronous API
b) Callback API
c) RESTful API
d) Promises API
e) None of them
f) All of them

---

2. Which Node.js server-side HTTP response methods may set request header?

a) setHeader
b) write
c) writeHead
d) getHeader
e) end

---

3. Select JavaScript Engine that is used in Node.js

a) SpiderMonkey
b) JavaScriptCore
c) Chakra
d) V8
e) Node
f) Node.js Nitro

---

4. Select all REPL special commands

a) .break
b) .load
c) .save
d) .continue
e) .loop
f) .exit

---

5. What can block Event Loop?

a) JSON.parse and JSON.stringify operations
b) synchronous APIs

---

6. Node.js streams that implement Readable API examples are

a) Server's HTTP requests
b) Server's HTTP responses
c) Client's HTTP requests
d) Client's HTTP responses
e) process.stdout
f) process.stdin
g) process.stderr

---

7. setTimeout and setInterval callbacks will be executed during this Event Loop phase

a) timers
b) pending callbacks
c) idle, prepare
d) poll
e) check
f) close callbacks
g) nextTickQueue
h) other Microtasks Queue

---

8. This Node.js core module helps to implement web server

a) fs
b) path
c) url
d) http

---

9. Select truthy statements

a) stream, created by fs.createReadStream has default chunk size of 64 KiB and stream.Readable instance has 16 KiB chunks by default
b) stream, created by fs.createReadStream has default chunk size of 16 KB and stream.Readable instance has 16 KB chunks by default too
c) stream, created by fs.createReadStream has default chunk size of 64 KB and stream.Readable instance has 16 KB chunks by default
d) stream, created by fs.createReadStream has default chunk size of 16 KiB and stream.Readable instance has 64 KB chunks by default

---

10. Node.js Event Loop has following phases:

a) timers
b) pending callbacks
c) idle
d) poll
e) check
f) close callbacks
h) nextTickQueue
j) other Microtasks Queue
k) prepare

---

11. Dirent instances from fs module have these methods

a) isDirectory
b) isFIFO
c) isFile
d) isSymbolicLink
e) All of them

---

12. These file system flags create file if it doesn't exist

a) r+
b) w
c) w+
d) rs+
e) a

---

13. Select all statements that will return Readable stream

a) fs.createReadStream('file.txt')
b) new Readable.from(['RSSchool', 'NodeJS', 'Course'])
c) process.stdout
d) fs.promises.readFile('file.txt')
e) fs.promises.readFileToStream

---

14. How many various scenarios of Node.js Event Loop Poll phase exist?

a) 1
b) 2
c) 3
d) 4
e) 5
f) 6

---

15. What code makes possible to watch changes in file?

a) (1) 
b) (2) 
c) (3) 
d) (4)

---

16. Node.js Event Loop phases are based on following data structure

a) Stack
b) Queue
c) Tree
d) Heap

---

17. Select all true statements

a) Blocking methods execute asynchronously
b) Blocking methods execute synchronously
c) Asynchronous API is preferable due to it's non-blocking nature

---

18. Node.js supports following modules systems natively

a) CommonJS
b) AMD
c) ESM
d) UMD
e) None of them
f) All of them

---

19. Node.js streams that implement Writable API examples are

a) Server's HTTP requests
b) Server's HTTP responses
c) Client's HTTP requests
d) process.stdout
e) process.stdin
f) process.stderr

---

20. setImmediate callbacks are to be executed in following Event Loop phase

a) timers
b) pending callbacks
c) idle, prepare
d) poll
e) check
f) close callbacks
g) nextTickQueue
h) other Microtasks Queue

---

21. Node.js Streams chunks may be

a) String
b) Number
c) Object
d) Array
e) Buffer

---

22. What core Node.js functionality helps to get CPU numbers and how to import it?

a) import cores from “os”;
b) import { cpus } from 'node:os';
c) import cpu from “node”;
d) none of the above
e) import { cpus } from 'os';

---

23. What allows you to run multiple instances of Node.js?

a) Node.js Cluster API
b) Node.js Worker Threads API
c) Node.js Child Processes API
d) All of the above
e) None of the above

---

24. Node.js streams types are

a) Readable
b) Writable
c) Duplex
d) Transform
e) Crypto
f) Deduplicatable
g) Pipe

---

25. Select all truthy statements

a) process.nextTick callbacks are executed earlier than setImmediate callbacks
b) process.nextTick callbacks are executed later than setImmediate callbacks
c) process.nextTick callbacks are executed simultaneously with setImmediate callbacks
d) process.nextTick callbacks are not executed if there are setImmediate callbacks
e) process.nextTick callbacks are only executed if there are no setImmediate callbacks

---

26. Node.js path module has following methods

a) foldername
b) basename
c) extname
d) join
e) resolve
f) normalize

---

27. Which Node.js core module provides functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions?

a) hash
b) crypto
c) digest
d) All of them

---

28. Select correct ways to pipe Readable stream to Writable stream

a) writableStream.pipe(readableStream)
b) readableStream.pipe(writableStream)
c) pipe(readableStream, writableStream)
d) pipe(writableStream, readableStream)
f) pipeline(readableStream, writableStream)
g) pipeline(writableStream, readableStream)

---

29. Which Node.js path module method returns relative path from one folder to another?

a) path.resolve
b) path.normalize
c) path.relative
d) path.format