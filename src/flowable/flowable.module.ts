import { Module } from '@nestjs/common';
import { FlowableService } from './flowable/flowable.service';
import { FlowableController } from './flowable/flowable.controller';

@Module({
  providers: [FlowableService],
  controllers: [FlowableController],
})
export class FlowableModule {}
