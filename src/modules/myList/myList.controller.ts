import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MyListService } from './myList.service';

@Controller('/user/:id/my-list')
export class MyListController {
  constructor(private service: MyListService) {}
  @Get()
  getAllListItems(@Param('id') id: string) {
    return this.service.getAllListItems(id);
  }

  @Post()
  createOne(@Body() body) {
    return this.service.createListItem(body);
  }

  @Delete(':itemId')
  deleteOne(@Param('itemId') itemId: string) {
    return this.service.deleteListItem(itemId);
  }
}
