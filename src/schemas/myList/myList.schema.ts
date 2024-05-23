import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ContentType } from '../../types';
import { IMyList } from './myList.interface';
import { User } from '../user/user.schema';
import * as mongoose from 'mongoose';

@Schema({ id: true })
export class MyList implements IMyList {
  @Prop({ type: String })
  contentName: string;

  @Prop({ enum: ContentType })
  contentType: ContentType;

  @Prop({ type: mongoose.Types.ObjectId, unique: true, ref: 'User' })
  user: User;
}

export const MyListSchema = SchemaFactory.createForClass(MyList);
