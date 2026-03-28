import { IsNumber, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  text: string;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsUUID()
  movieId: string;
}
