import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// Отображаем имя в базе данных
@Entity({ name: 'movies' })
export class MovieEntity {
  // Для создание первичного ключа - генерирует уникальные ключи
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  releaseYear: number;

  // Декоратор для дат - дата создание записи, автоматически будет подставляться
  @CreateDateColumn()
  createdAt: Date;

  // Для отслеживание обновление последней записи
  @UpdateDateColumn()
  updateAt: Date;
}
