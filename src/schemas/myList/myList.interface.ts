import { ContentType } from '../../types';
import { User } from '../user/user.schema';

export interface IMyList {
  contentName: string;
  contentType: ContentType;
  user: User;
}
