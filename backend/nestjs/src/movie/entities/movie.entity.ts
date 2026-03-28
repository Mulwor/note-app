import { ReviewsEntity } from 'src/review/entity/review.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

export enum Genre {
  ACTION = 'action',
  COMEDY = 'comedy',
  DRAMA = 'drama',
  HORROR = 'horror',
}

// Отображаем имя в базе данных
@Entity({ name: 'movies' })
export class MovieEntity {
  // ? Для создание первичного ключа - генерирует уникальные ключи
  @PrimaryGeneratedColumn('uuid')
  // ! Если нам нужен uuid
  // @PrimaryColumn()
  // @Generated('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
  })
  title: string;

  @Column({
    type: 'text',
    // Проверяет на null
    nullable: true,
  })
  description: string;

  @Column({
    name: 'release_year',
    // Тип число
    type: 'int',
    // Могут быть только положительные числа
    unsigned: true,
  })
  releaseYear: number;

  @Column({
    type: 'decimal',
    // Максимальное кол-во цифр которое может быть
    precision: 3,
    // Кол-во цифр после запятой
    scale: 1,
    default: 0.0,
  })
  rating: number;

  @Column({ name: 'is_available', type: 'boolean', default: false })
  isAvailable: boolean;

  @OneToMany(() => ReviewsEntity, (reviews) => reviews.movie)
  reviews: ReviewsEntity[];

  // Декоратор для дат - дата создание записи, автоматически будет подставляться
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  // Для отслеживание обновление последней записи
  @UpdateDateColumn({
    name: 'updated_at',
  })
  updateAt: Date;

  // @Column({ type: 'date', nullable: true })
  // releaseDate: string;

  @Column({
    type: 'enum',
    enum: Genre,
    default: Genre.DRAMA,
  })
  genre: Genre;
}
