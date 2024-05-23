import { Genre } from '../../types';

export type WatchHistory = {
  contentId: string;
  watchedOn: Date;
  rating?: number;
};

export type Preferences = {
  favoriteGenres: Genre[];
  dislikedGenres: Genre[];
};

export interface IUser {
  username: string;
  preferences: Preferences;
  watchHistory: WatchHistory[];
}
