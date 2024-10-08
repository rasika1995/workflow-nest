import { Test, TestingModule } from '@nestjs/testing';
import { FlowableController } from './flowable.controller';

describe('FlowableController', () => {
  let controller: FlowableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowableController],
    }).compile();

    controller = module.get<FlowableController>(FlowableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
