import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MyListService } from './myList.service';
import { CreateMyListDto } from '../../dtos/myList.dto';

@Controller('/user/:id/my-list')
export class MyListController {
  constructor(private service: MyListService) {}
  @Get()
  getAllListItems(@Param('id') id: string) {
    return this.service.getAllListItems(id);
  }

  @Post()
  createOne(@Param('id') id: string, @Body() body: CreateMyListDto) {
    return this.service.createListItem(id, body);
  }

  @Delete(':itemId')
  deleteOne(@Param('itemId') itemId: string) {
    return this.service.deleteListItem(itemId);
  }
}
