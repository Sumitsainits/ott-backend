import { Genre } from '../../types';

export interface IMovie {
  title: string;
  description: string;
  genres: Genre[];
  releaseDate: Date;
  director: string;
  actors: string[];
}
