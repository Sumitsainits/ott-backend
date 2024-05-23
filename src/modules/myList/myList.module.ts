import { Module } from '@nestjs/common';
import { MyListService } from './myList.service';
import { MyListController } from './myList.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../schemas/user/user.schema';
import { Movie, MovieSchema } from '../../schemas/movie/movie.schema';
import { TvShow, TvShowSchema } from '../../schemas/tvShow/tvShow.schema';
import { MyList, MyListSchema } from '../../schemas/myList/myList.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Movie.name, schema: MovieSchema },
      { name: TvShow.name, schema: TvShowSchema },
      { name: MyList.name, schema: MyListSchema },
    ]),
  ],
  providers: [MyListService],
  controllers: [MyListController],
})
export class MyListModule {}
