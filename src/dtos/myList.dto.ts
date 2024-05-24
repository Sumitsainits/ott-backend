import { IsString, IsInt } from 'class-validator';
import { ContentType } from '../types';

export class CreateMyListDto {
  @IsString()
  contentName: string;

  @IsInt()
  contentType: ContentType;
}
