import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMovie } from '../schemas/movie/movie.interface';
import { Movie } from '../schemas/movie/movie.schema';
import { ITvShow } from '../schemas/tvShow/tvShow.interface';
import { TvShow } from '../schemas/tvShow/tvShow.schema';
import { IUser } from '../schemas/user/user.interface';
import { User } from '../schemas/user/user.schema';

@Injectable()
export class SeederService {
  constructor(
    @InjectModel(User.name) private user: Model<User>,
    @InjectModel(Movie.name) private movie: Model<Movie>,
    @InjectModel(TvShow.name) private tvShow: Model<TvShow>,
  ) {}

  async seed() {
    await this.seedUser();
    await this.seedMovie();
    await this.seedTvShow();
  }

  async seedUser() {
    const users: IUser[] = [
      {
        username: 'john_doe',
        preferences: {
          favoriteGenres: ['Action', 'SciFi'],
          dislikedGenres: ['Romance'],
        },
        watchHistory: [],
      },
      {
        username: 'jane_smith',
        preferences: {
          favoriteGenres: ['Drama', 'Romance'],
          dislikedGenres: ['Horror', 'SciFi'],
        },
        watchHistory: [],
      },
    ];
    await this.user.insertMany(users);
  }

  async seedMovie() {
    const movies: IMovie[] = [
      {
        title: 'Space Odyssey',
        description: 'An epic journey through space and time.',
        genres: ['SciFi', 'Action'],
        releaseDate: new Date('2023-11-10T00:00:00.000Z'),
        director: 'Stanley Kubrick',
        actors: ['Keir Dullea', 'Gary Lockwood'],
      },
      {
        title: 'Love in the Time of Cholera',
        description: 'A romantic drama set in the late 19th century.',
        genres: ['Drama', 'Romance'],
        releaseDate: new Date('2024-02-14T00:00:00.000Z'),
        director: 'Mike Newell',
        actors: ['Javier Bardem', 'Giovanna Mezzogiorno'],
      },
    ];
    await this.movie.insertMany(movies);
  }

  async seedTvShow() {
    const tvShows: ITvShow[] = [
      {
        title: 'Mystery Manor',
        description: 'A suspenseful series following a group of detectives.',
        genres: ['Drama', 'Horror'],
        episodes: [
          {
            episodeNumber: 1,
            seasonNumber: 1,
            releaseDate: new Date('2024-01-01T00:00:00.000Z'),
            director: 'Jane Doe',
            actors: ['Actor One', 'Actor Two'],
          },
          {
            episodeNumber: 2,
            seasonNumber: 1,
            releaseDate: new Date('2024-01-08T00:00:00.000Z'),
            director: 'Jane Doe',
            actors: ['Actor One', 'Actor Two'],
          },
        ],
      },
      {
        title: 'Future World',
        description: 'A glimpse into the future of humanity.',
        genres: ['SciFi', 'Fantasy'],
        episodes: [
          {
            episodeNumber: 1,
            seasonNumber: 1,
            releaseDate: new Date('2024-03-10T00:00:00.000Z'),
            director: 'John Smith',
            actors: ['Actor Three', 'Actor Four'],
          },
          {
            episodeNumber: 2,
            seasonNumber: 1,
            releaseDate: new Date('2024-03-17T00:00:00.000Z'),
            director: 'John Smith',
            actors: ['Actor Three', 'Actor Four'],
          },
        ],
      },
    ];
    await this.tvShow.insertMany(tvShows);
  }
}
