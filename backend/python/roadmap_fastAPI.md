Roadmap по FastAPI

- [Основы FastAPI]()
  - [Что такое FastAPI, его преимущество]()
  - [Установка и запуск приложения FastAPI]()
  - [HTTP-методы, параметры строк запроса, pydantic]()
  - [Подробнее про pydantic и валидация через них]()
  - [Работа с файлами]()
- [Продвинутые темы]
  - [Dependency Injection - Зависимости]()



FastAPI — это современный веб-фреймворк для Python, предназначенный для создания API (RESTful, GraphQL, WebSocket и др.). Он построен поверх Starlette (для работы с HTTP и асинхронностью) и Pydantic (для валидации данных). 

Главная идея: разработчик описывает структуру запросов и ответов с помощью стандартных аннотаций типов Python, а FastAPI автоматически:

- проверяет входящие данные,
- преобразует их в нужные объекты,
- генерирует интерактивную документацию (Swagger UI и ReDoc),
- выдаёт понятные ошибки валидации.

Преимущество:
- высокая производительность
- поддержка асинхронности
- автоматическая документация на swagger
- валидация данных на основе Pydantic
- подсказка типов и сериализация данных

---

Установка:

1. Настройка виртуального окружения - это изолированная среда для каждого проекта, чтобы пакеты и их версии не конфликтовали друг с другом и с системой.

```py
python -m venv venv
source venv/bin/activate      # Linux/macOS
venv\Scripts\activate         # CMD (Windows)
.\venv\Scripts\Activate.ps1   # PowerShell
```

2. Установка пакетов

```py
# включает Uvicorn и всё нужное
pip install fastapi[all] 

# или для минимализма
pip install fastapi uvicorn[standard]
```

3. Запуск приложения (из папки с main.py): `uvicorn main:app --reload`, где 
- main — имя файла
- app — экземпляр FastAPI()
- --reload — автоперезапуск при изменении кода (только для разработки)

---

HTTP методы

FastAPI использует декораторы для привязки функции к конкретному URL и методу запроса. Примеры: `@app.{get() | post() | put()  | patch() | delete() }`. 

Например у нас есть books:

```py
books = [
  { 
    "id": 1,
    "title": "Асинхронность в пайтон",
    'author': "Меттью"
  },
  {
    "id": 2,
    "title": "Backend разработка в пайтон",
    'author': "Артем"
  }
]
```

и мы хотим метод get, то берем

```py
from fastapi import FastAPI, HTTPException

app = FastAPI()

# Все книги получаем
@app.get("/books")
def get_books():
  return books

# Получаем определенную книгу
@app.get('/books/{book_id}')
def read_book(book_id: int):
  # Проходимся по циклу и пытаемся найти книгу по id
  for book in books:
    if book['id'] == book_id:
      return books
    
  # Если книга не найдено, то выводим 404 ошибку с указанием деталей
  raise HTTPException( status_code = 404, detail = "Книга не найдена")
```

Параметры строк запроса это параметры после ? в url. Например `/items?skip=0&limit=10`. В FastAPI они задаются как аргументы функции, не объявленные в пути.

```py
@app.get("/books")
def list_books(skip: int = 0, limit: int = 10):
    # если не переданы — возьмутся значения по умолчанию
    return {"skip": skip, "limit": limit}

from typing import Optional

# Можно сделать необязательными через Optional или None:
@app.get("/books")
def list_books(q: Optional[str] = None):
  if q:
    return {"query": q}
  return {"message": "No query"}
```

Pydantic — это библиотека Python, которая использует аннотации типов для парсинга, валидации и сериализации данных. В FastAPI она выполняет три ключевые задачи:

- Описывает структуру тела запроса (JSON) и автоматически проверяет типы и значения.
- Преобразует входящие данные в Python-объекты (например, в экземпляры классов).
- Генерирует JSON-схему для документации OpenAPI, что даёт готовые формы в Swagger UI.

Благодаря этому код становится самодокументируемым, IDE даёт подсказки, а ошибки валидации возвращаются с понятными пояснениями.

### Методы POST, PATCH, DELETE

Используется для добавления новой книги. Данные передаются в теле запроса в формате JSON. Для описания структуры тела создаём Pydantic-модель.

```py
from uuid import uuid4;
from pydantic import BaseModel

class TaskUpdateSchema(BaseModel):
  # Делаем поля необязательными
  title: str | None = None
  completed: bool | None = None
```

```py
@app.post("/books", status_code = 201)
def create_book(payload: BookCreate):
  new_book = TaskSchema(
    id = str(uuid4()), 
    title = payload.title, 
    completed = False
  )

  books.append(new_book)
  return new_book
```

```py
@app.patch("/books/{book_id}")
def update_book(book_id: str, payload: TaskUpdateSchema):
  for book in books:
    if book.id == book_id:
      if payload.title:
        book.title = payload.title
      if payload.completed is not None:
        book.completed = payload.completed

      return book
```

```py
@app.delete("/books/{book_id}")
def delete_book(book_id):
  for book in books:
    if book.id == book_id:
      book.remove

      return book
```

Модели Pydantic для запросов и ответов

Модель — это класс, который описывает структуру данных. FastAPI использует её для:

- проверки входящего JSON (тела запроса),
- преобразования JSON в Python-объект,
- сериализации ответа (из объекта в JSON).

Пример базовой модели (уже была):

```py
from pydantic import BaseModel

class TaskCreate(BaseModel):
  title: str
  completed: bool = False
```

Теперь поговорим про валидацию полей, типы и ограничения. Pydantic позволяет задавать ограничения через:

- стандартные аннотации типов (int, str, float, bool, list, dict),
- специальные типы из pydantic (например, EmailStr, UrlStr),
- Field — для дополнительных ограничений (мин/макс длина, число, регулярное выражение и т.д.).

```py
from pydantic import BaseModel, Field, EmailStr
from typing import Optional

class TaskCreate(BaseModel):
  # Field - добавляет ограничения, делая проверку, что длина должна быть от 3 до 100
  # ... (три точки) — это специальный объект от Pydantic, который означает «поле обязательно».
  title: str = Field(..., min_length = 3, max_length = 100)

  # Optional - необязательно поле и добавляет ограничение в 200 символов
  # где начально значение None | str
  description: Optional[str] = Field(None, max_length = 200)  

  # Добавляет ограничение от 1 до 5, где по умолчанию исп число 1
  priority: int = Field(1, ge=1, le=5) 
  
  # список строк, по умолчанию пустой
  tags: list[str] = [] 

  # Если передан email, он должен быть корректным email-адресом.
  # Если придут лишние поля, они будут игнорироваться (по умолчанию) 
  # или можно запретить.
  email: Optional[EmailStr] = None
```

Можно создавать и свои кастомные проверки через @validator. Например когда нам нужно просто не содержит ли title запрещенных слов

```py
from pydantic import BaseModel, validator

class TaskCreate(BaseModel):
  title: str
  priority: int = 1

  @validator('title')
  def title_must_not_contain_bad_words(cls, v):
    bad_words = ['spam', 'viagra']
    for word in bad_words:
      if word in v.lower():
        raise ValueError('Название содержит запрещённое слово')
      return v
```

Можно также создавать вложенные модели ` subtasks: list[SubTask] = [] ` - это список вложенных объектов. Когда у нас есть объект, внутри которого массив subtask c объектами

```py
{
  "title": "Сделать проект",
  "subtasks": [
    {"title": "Написать код", "completed": false},
    {"title": "Протестировать", "completed": false}
  ]
}
```

Итог: Pydantic позволяет гибко описывать структуры данных с валидацией на уровне типов, ограничений и кастомных проверок. Это делает код безопаснее и самодокументируемым.

---

Работа с файлами

1. Для того, чтобы скачать файл нам необходимо импортировать FileResponse и возвращаем его 3 полями: path, filename и media_type (необ.поля). 

```py
from fastapi import FastAPI
from fastapi.responses import FileResponse

app = FastAPI()

@app.get("/file/download")
def download_file():
  return FileResponse(
    # Обязательное поле, путь к файлу который надо скачать.
    # Принимает строку или os.PathLike.
    path='data.xlsx', 
    # Установить названия для скачивания
    filename='Статистика покупок.xlsx', 
    # Мы ожидаем набор данных из HTML - файла
    media_type='multipart/form-data'
  )
```

2. Для того, чтобы отправить файл на сервер нам необходимо:
- Установить библиотеку - `$ pip install python-multipart`
- И выбрать отправить через:
  - File (для маленьким файлов), где мы получаем на выходе только байт-строку,
  - UploadFile (более рекомендуемый), который имеет больше расширений - file.filename (брать имя файла), file.file (брать сам файл / объект файла), await file.read() - прочитать содержимое (байты). Ну а просто file возвращает нам словарь различных данных о файле

```py
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/file/upload-bytes")
def upload_file_bytes(file_bytes: bytes = File()):
  return {'file_bytes': str(file_bytes)}


@app.post("/file/upload-file")
def upload_file(file: UploadFile):
  return file
```

Мы можем также загрузить несколько файлов через list[UploadFile] или сделать валидацию - условно проверить размер файла или тип файла

```py
from fastapi import HTTPException

MAX_FILE_SIZE = 5 * 1024 * 1024  # 5 МБ

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    contents = await file.read()
    await file.seek(0)  # Возвращаем указатель в начало!

    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(status_code=413, detail="File too large")

    # ... сохраняем файл ...
```

```py
from pathlib import Path

ALLOWED_EXTENSIONS = {'.txt', '.pdf', '.png', '.jpg'}

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile):
    file_ext = Path(file.filename).suffix.lower()
    if file_ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="File type not allowed")
    # ...
```

--- 

Dependency Injection (DI) — это паттерн, при котором объект или функция получает свои зависимости (например, подключение к БД, проверку авторизации, логгер) извне, а не создаёт их сам. В FastAPI это реализовано через механизм Depends. Он позволяет:

- выносить общую логику в отдельные функции,
- переиспользовать код,
- легко подменять зависимости при тестировании,
- делать код более читаемым.

