- [Что такое ORM и зачем его использовать](#ORM-определение)
- [Настройка TypeORM в NestJS](#setup-typeorm)
  - [CRUD-операции в базе данных](#CRUD-operation)
- [Связи в базе данных]()
  - [One to many](#one-to-many-database)
  - [Many to many](#many-to-many-database)

<a id="ORM-определение"

<h3 align="center">Что такое ORM и зачем его использовать</h3>
ORM (Object relational mapping, объектно-реляционное отображение) - это инструмент для работы с базой данных и автоматизации запросов. Это техника позволяющая работать с базой данных в объектно ориентированном стиле.

Вместо того, чтобы писать sql-запросы в ручную. ORM позволяет работать с таблицами базой данных как с обычными объектами в коде. С помощью ORM мы можем легко создавать, обновлять, удалять и получать данные используя обычные объекты. ORM автоматически позаботится о преобразовании этих операций в соответствующие sql-запросы

Зачем использовать ORM:

1. Абстракция работы с базой данных, он скрывает сложности sql, позволяет работать с базой данных через объекты и модели, что значительно упрощает разработку

2. Управления миграциями - в процессе разработки базы данных часто меняются и ORM помогает управлять миграциями через спец.скрипты которые помогают синхронизировать схему базы данных с изменениями в коде

3. Простата и удобство - вместо написания в ручную каждого sql-запроса мы можем исп. репизитории и модели для создание поиска и удаления данных, что значит ускоряет нашу разработку
   Теперь устанавливаем саму [базу данных через сайт](https://docs.nestjs.com/techniques/database) => `yarn add @nestjs/typeorm typeorm pg`, где `pg` — это драйвер для работы с PostgreSQL. После установки необходимо подключить базу данных в app.module.ts (корневой модуль приложения)

```ts
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5433,
      username: "postgres",
      password: "123456",
      database: "nestjs-course",
      // Автоматически загружать все наши сущности
      autoLoadEntities: true,
      // Когда происходить запись в таблице, то оно автоматически обновляется
      synchronize: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

<a id="setup-typeorm"></a>

<h3 align="center"> Подключение базы данных </h3>

1. Создаем файл окружения .env

```js
POSTGRES_HOST = localhost;
POSTGRES_PORT = 5432;
POSTGRES_USER = postgres;
POSTGRES_PASSWORD = 123456;
POSTGRES_DATABASE = nestjs - course;
```

2. Создаем конфигурационный файл src/config/typeorm.config.ts

```js
import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getTypeOrmConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    host: configService.getOrThrow<string>('POSTGRES_HOST'),
    port: configService.getOrThrow<number>('POSTGRES_PORT'),
    username: configService.getOrThrow<string>('POSTGRES_USER'),
    password: configService.getOrThrow<string>('POSTGRES_PASSWORD'),
    database: configService.getOrThrow<string>('POSTGRES_DATABASE'),
    autoLoadEntities: true,
    synchronize: true,
  };
}
```

Важно: Настройка synchronize: true автоматически обновляет схему базы данных при изменении сущностей. Никогда не используйте эту опцию в production-окружении, так как это может привести к потере данных. Для production используйте миграции.

3. Подключаем TypeORM в корневом модуле app.module.ts

````js
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: getTypeOrmConfig,
  inject: [ConfigService],
}),
```

4. Настраиваем модуль с сущностью movie.module.ts

```js
import ...

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
````

<a id="CRUD-operation"></a>

Для того, чтобы добавить в базу данных какое-то поле необходимо в начале его настроить. А именно написать DTO

```ts
import { IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1888)
  @Max(new Date().getFullYear())
  releaseYear: number;
}
```

В Controller необходимо написать `constructor(private readonly movieService: MovieService) {}`, также как и в сервисе

````ts
constructor(
@InjectRepository(MovieEntity)
private readonly movieRepository: Repository<MovieEntity>,
) {}
```

Затем написать логику для CRUD операций

1. Получения всех юнита

```ts
// movie.controller.ts
@Get()
findAll() {
  return this.movieService.findAll();
}

// movie.service.ts
async findAll(): Promise<MovieEntity[]> {
  return await this.movieRepository.find();
}
````

2. Получения определенного юнита

```ts
// movie.controller.ts
@Get(':id')
findById(@Param('id') id: string) {
  return this.movieService.findById(+id);
}

// movie.service.ts
async findById(id: number): Promise<MovieEntity> {
  const movie = await this.movieRepository.findOne({
    where: { id },
  });

  if (!movie) throw new NotFoundException('Movie not found');

  return movie;
}

```

3. Отправка юнита в базу данных

Создает новую запись в базе данных:

- Контроллер получает DTO из тела запроса
- Сервис создает entity и сохраняет в БД

```ts
// movie.controller.ts
@Post()
create(@Body() dto: MovieDto) {
  return this.movieService.create(dto);
}

// movie.service.ts
async create(dto: MovieDto): Promise<MovieEntity> {
  const movie = this.movieRepository.create(dto);

  return await this.movieRepository.save(movie);
}

```

4. Обновление в базе данных

```ts
// movie.controller.ts
@Put(':id')
update(@Param('id') id: string, @Body() dto: MovieDto) {
  return this.movieService.update(+id, dto);
}

// movie.service.ts
async update(id: number, dto: MovieDto): Promise<boolean> {
  const movie = await this.findById(id);

  Object.assign(movie, dto);

  await this.movieRepository.save(movie);

  return true;
}
```

5. Удаление юнита базы данных

```ts
// movie.controller.ts
@Delete(':id')
delete(@Param('id') id: string) {
  return this.movieService.delete(+id);
}

// movie.service.ts
async delete(id: number): Promise<number> {
  const movie = await this.findById(id);
  await this.movieRepository.remove(movie);
  return movie.id;
}
```

<a id="one-to-many-database"></a>

### Связь один ко многим

Связь "один ко многим" (one-to-many) означает, что одна запись в таблице может быть связана с несколькими записями в другой таблице.
В нашем примере: **один фильм** может иметь **много отзывов**.

Такая связь реализуется через:

- `@OneToMany` на стороне "одного" (Movie)
- `@ManyToOne` на стороне "многих" (Review)

```ts
// review.entity.ts
// Внешний ключ для связи с таблицей фильмов
@Column({ name: 'movie_id', type: 'uuid' })
movieId: string;

// Связь многие-к-одному (много отзывов принадлежат одному фильму)
@ManyToOne(
  () => MovieEntity,      // С какой сущностью устанавливаем связь
  (movie) => movie.reviews, // Поле в MovieEntity, которое ссылается на отзывы
  {
    // CASCADE означает: при удалении фильма, все его отзывы удалятся автоматически
    onDelete: 'CASCADE',
  }
)
@JoinColumn({ name: 'movie_id' }) // Указываем, какое поле хранит внешний ключ
movie: MovieEntity;
```

```ts
// movie.entity.ts
// Связь один-ко-многим (один фильм может иметь много отзывов)
// Первый аргумент: тип связанной сущности (ReviewEntity)
// Второй аргумент: поле в ReviewEntity, которое ссылается на фильм
@OneToMany(() => ReviewsEntity, (reviews) => reviews.movie)
reviews: ReviewsEntity[]; // Массив отзывов, принадлежащих этому фильму
```

<a id="many-to-many-database"></a>
### Связь многие ко многим

Связь "многие ко многим" (many-to-many) означает, что множество записей из одной таблицы может быть связано с множеством записей из другой таблицы.

**Классический пример:** У нас есть **фильмы** и **актеры**:
- Один фильм может иметь много актеров
- Один актер может сниматься во многих фильмах

Для реализации такой связи в реляционных базах данных требуется **промежуточная таблица** (junction table), которая будет хранить связи между записями.