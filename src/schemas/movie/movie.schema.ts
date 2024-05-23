import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IMovie } from './movie.interface';
import { Genre } from 'src/types';

@Schema({ id: true })
export class Movie implements IMovie {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Date })
  releaseDate: Date;

  @Prop({ type: String })
  director: string;

  @Prop({ type: Array<string>, default: [] })
  actors: string[];
  @Prop({ type: Array<Genre>, default: [] })
  genres: Genre[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
