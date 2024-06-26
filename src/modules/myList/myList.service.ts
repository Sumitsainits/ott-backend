import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MyList } from '../../schemas/myList/myList.schema';
import { CreateMyListDto } from '../../dtos/myList.dto';

@Injectable()
export class MyListService {
  constructor(@InjectModel(MyList.name) private myList: Model<MyList>) {}

  async createListItem(userId: string, dto: CreateMyListDto) {
    return this.myList.create({ ...dto, user: { _id: userId } });
  }

  async deleteListItem(itemId: string) {
    return this.myList.deleteOne({ _id: itemId });
  }

  async getAllListItems(userId: string) {
    return this.myList.find({ user: { _id: userId } });
  }
}
