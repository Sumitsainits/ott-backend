import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Genre } from '../../types';
import { Episode, ITvShow } from './tvShow.interface';

@Schema()
export class TvShow implements ITvShow {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Array<Genre>, unique: true })
  genres: Genre[];

  @Prop({ type: Array<Episode> })
  episodes: Episode[];
}

export const TvShowSchema = SchemaFactory.createForClass(TvShow);
