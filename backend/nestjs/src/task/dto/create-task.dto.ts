import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Length,
  Matches,
  MinLength,
} from 'class-validator';
import { Match } from '../decorator/match.decorator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 36)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  priority: number;

  @IsArray()
  @IsEnum(TaskTag, { each: true, message: 'Недопустимое значение тега' })
  @IsString({ each: true })
  tags: TaskTag[];

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/)
  password: string;

  @IsUrl(
    {
      protocols: ['https', 'was'],
      require_valid_protocol: true,
      host_blacklist: ['htmllessons.io'],
    },
    { message: 'Некорректный url' },
  )
  websiteUrl: string;

  @IsString()
  newPassword: string;

  @IsString()
  @Match('newPassword', { message: 'Пароли не совпадают' })
  confirmPassword: string;
}
