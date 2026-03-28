import { MovieService } from './../movie/movie.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewsEntity } from './entity/review.entity';
import { CreateReviewDto } from './dto/create.review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(ReviewsEntity)
    private readonly reviewRepository: Repository<ReviewsEntity>,
    private readonly MovieService: MovieService,
  ) {}

  async create(dto: CreateReviewDto): Promise<ReviewsEntity> {
    const { text, movieId, rating } = dto;

    const movie = await this.MovieService.findById(movieId);

    const review = this.reviewRepository.create({
      text,
      rating,
      movie,
    });

    return await this.reviewRepository.save(review);
  }
}
