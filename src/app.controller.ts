import {
  Controller,
  Get,
  // Inject
} from '@nestjs/common';
import { AppService } from './app.service';
// import { ZEEBE_CONNECTION_PROVIDER } from 'nestjs-zeebe';
// import { CreateProcessInstanceResponse, ZBClient } from 'zeebe-node';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // @Inject(ZEEBE_CONNECTION_PROVIDER) private readonly zbClient: ZBClient,
  ) {
    // this.setupWorker();
  }

  // private setupWorker() {
  //   this.zbClient.createWorker({
  //     taskType: 'task-type', // Replace with your actual task type
  //     taskHandler: async (job) => {
  //       console.log('Processing job:', job.variables);
  //       return job.complete(); // Complete the job
  //     },
  //   });
  // }

  // @Get('health-check')
  // async healthCheck(): Promise<string> {
  //   try {
  //     const topology = await this.zbClient.topology();
  //     return `Camunda Zeebe is running. Cluster topology: ${JSON.stringify(topology)}`;
  //   } catch (error) {
  //     console.error('Health check failed:', error);
  //     return 'Camunda Zeebe is not reachable.';
  //   }
  // }

  // @Get('start-process')
  // async startProcess(): Promise<CreateProcessInstanceResponse> {
  //   return this.zbClient.createProcessInstance({
  //     bpmnProcessId: 'Process_1qde78e', // Use the ID from your BPMN file
  //     variables: {
  //       message: 'Hello from NestJS!',
  //     },
  //   });
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
