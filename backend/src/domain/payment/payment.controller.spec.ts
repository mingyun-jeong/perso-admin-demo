import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { UserService } from './user.service';

describe('UsersController', () => {
  let controller: PaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [UserService],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
