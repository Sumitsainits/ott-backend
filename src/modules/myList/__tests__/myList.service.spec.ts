import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { MyListService } from '../myList.service';
import { Model } from 'mongoose';
import { MyList } from '../../../schemas/myList/myList.schema';
import { ContentType } from '../../../types';

describe('MyListService', () => {
  let service: MyListService;
  let model: Model<any>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MyListService,
        {
          provide: getModelToken(MyList.name),
          useValue: {
            create: jest.fn(),
            deleteOne: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MyListService>(MyListService);
    model = module.get<Model<any>>(getModelToken(MyList.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('#createListItem', () => {
    it('should call create method of the model', async () => {
      const dto = {
        contentName: 'mocked-content-name',
        contentType: ContentType.MOVIE,
      };
      await service.createListItem('mocked-user-id', dto);
      expect(model.create).toHaveBeenCalledWith({
        ...dto,
        user: { _id: 'mocked-user-id' },
      });
    });
  });

  describe('#deleteListItem', () => {
    it('should call deleteOne method of the model', async () => {
      const itemId = 'item_id';
      await service.deleteListItem(itemId);
      expect(model.deleteOne).toHaveBeenCalledWith({ _id: itemId });
    });
  });

  describe('#getAllListItems', () => {
    it('should call find method of the model', async () => {
      const userId = 'user_id';
      await service.getAllListItems(userId);
      expect(model.find).toHaveBeenCalledWith({ user: { _id: userId } });
    });
  });
});
