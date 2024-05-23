import { Genre } from '../../types';

export type Episode = {
  episodeNumber: number;
  seasonNumber: number;
  releaseDate: Date;
  director: string;
  actors: string[];
};

export interface ITvShow {
  title: string;
  description: string;
  genres: Genre[];
  episodes: Episode[];
}
