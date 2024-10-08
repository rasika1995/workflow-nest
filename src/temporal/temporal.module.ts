import { Module } from '@nestjs/common';
import { TemporalService } from './temporal.service';
import { TemporalController } from './temporal.controller';

@Module({
  providers: [TemporalService],
  exports: [TemporalService],
  controllers: [TemporalController],
})
export class TemporalModule {}
