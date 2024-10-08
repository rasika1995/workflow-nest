import { Controller, Get } from '@nestjs/common';
import { TemporalService } from './temporal.service';

@Controller('temporal')
export class TemporalController {
  constructor(private readonly temporalService: TemporalService) {}

  @Get('start-cron')
  async startCronWorkflow() {
    await this.temporalService.startCronWorkflow();
    return 'Cron workflow started!';
  }

  @Get('start-minute-cron')
  async startMinuteCronWorkflow() {
    await this.temporalService.startMinuteCronWorkflow();
    return '1-minute cron workflow started!';
  }
}
