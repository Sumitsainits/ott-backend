import { Test, TestingModule } from '@nestjs/testing';
import { MyListController } from '../myList.controller';
import { MyListService } from '../myList.service';
import { ContentType } from '../../../types';

describe('MyListController', () => {
  let controller: MyListController;
  let service: MyListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyListController],
      providers: [
        {
          provide: MyListService,
          useValue: {
            getAllListItems: jest.fn(),
            createListItem: jest.fn(),
            deleteListItem: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MyListController>(MyListController);
    service = module.get<MyListService>(MyListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('#getAllListItems', () => {
    it('should call getAllListItems method of MyListService with the correct parameter', async () => {
      const userId = 'user_id';
      await controller.getAllListItems(userId);
      expect(service.getAllListItems).toHaveBeenCalledWith(userId);
    });
  });

  describe('#createOne', () => {
    it('should call createListItem method of MyListService with the correct parameter', async () => {
      const body = {
        contentName: 'mocked-content-name',
        contentType: ContentType.MOVIE,
      };
      await controller.createOne('mocked-user-id', body);
      expect(service.createListItem).toHaveBeenCalledWith(
        'mocked-user-id',
        body,
      );
    });
  });

  describe('#deleteOne', () => {
    it('should call deleteListItem method of MyListService with the correct parameter', async () => {
      const itemId = 'item_id';
      await controller.deleteOne(itemId);
      expect(service.deleteListItem).toHaveBeenCalledWith(itemId);
    });
  });
});
