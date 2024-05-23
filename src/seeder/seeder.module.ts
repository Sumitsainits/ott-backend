import { Module } from '@nestjs/common';
import { SeederService } from './seeder.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user/user.schema';
import { MovieSchema } from '../schemas/movie/movie.schema';
import { TvShowSchema } from '../schemas/tvShow/tvShow.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
    MongooseModule.forFeature([{ name: 'TvShow', schema: TvShowSchema }]),
  ],
  providers: [SeederService],
})
export class SeederModule {}
