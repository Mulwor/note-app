import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
  // Чтобы работать с базой данных необходимо подключить
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  // Получаем все данные
  async findAll(): Promise<MovieEntity[]> {
    return await this.movieRepository.find({
      // искать по определенному полю
      // where: { isAvailable: true },
      // Сортировка по убыванию
      // order: { createdAt: 'desc' },
      // Сколько данных можно взять из базы данных
      // take: 10,
      // Выбирать какие поля будут приходить
      // select: ['id', 'title', 'releaseYear'],
    });
  }

  async findById(id: string): Promise<MovieEntity> {
    const movie = await this.movieRepository.findOne({
      where: { id },
    });

    if (!movie) throw new NotFoundException('Movie not found');

    return movie;
  }

  async create(dto: MovieDto): Promise<MovieEntity> {
    const movie = this.movieRepository.create(dto);

    return await this.movieRepository.save(movie);
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    Object.assign(movie, dto);

    await this.movieRepository.save(movie);

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.movieRepository.remove(movie);

    return movie.id;
  }
}
