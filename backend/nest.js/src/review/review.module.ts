import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { ReviewsEntity } from './entity/review.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from 'src/movie/movie.service';
import { MovieEntity } from 'src/movie/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReviewsEntity, MovieEntity])],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}
