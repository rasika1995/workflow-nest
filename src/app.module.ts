import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlowableModule } from './flowable/flowable.module';
import { TemporalModule } from './temporal/temporal.module';
import { TemporalService } from './temporal/temporal.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(), // Initialize Schedule module for cron jobs
    FlowableModule,
    TemporalModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
