import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser, Preferences, WatchHistory } from './user.interface';
import { Genre } from '../../types';
import * as mongoose from 'mongoose';

@Schema({ id: true })
export class User implements IUser {
  @Prop({ type: String })
  username: string;

  @Prop({ type: String })
  description: string;

  @Prop({
    type: {
      favoriteGenre: { type: Array<Genre>, unique: true, default: [] },
      dislikedGenres: { type: Array<Genre>, unique: true, default: [] },
    },
  })
  preferences: Preferences;

  @Prop({
    type: Array<{
      contentId: {
        type: mongoose.Types.ObjectId;
        unique: true;
        required: true;
      };
      watchedOn: { type: Date };
      rating: { type: number };
    }>,
    required: false,
    default: [],
  })
  watchHistory: WatchHistory[];
}

export const UserSchema = SchemaFactory.createForClass(User);
