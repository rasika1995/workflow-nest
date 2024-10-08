import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { FlowableService } from './flowable.service';

// http://localhost:8080/flowable-modeler/#/processes
@Controller('flowable')
export class FlowableController {
  constructor(private readonly flowableService: FlowableService) {}

  @Post('start-process')
  async startProcess(
    @Body() body: { processDefinitionKey: string; variables: any },
  ) {
    return this.flowableService.startProcess(
      body.processDefinitionKey,
      body.variables,
    );
  }

  @Get('tasks')
  async getTasks() {
    return this.flowableService.getTasks();
  }

  @Post('complete-task')
  async completeTask(@Body() body: { taskId: string; variables?: any }) {
    return this.flowableService.completeTask(body.taskId, body.variables);
  }

  @Delete('process-instances/:id')
  async deleteProcessInstance(@Param('id') id: string) {
    return this.flowableService.deleteProcessInstance(id);
  }

  @Post('trigger-hello')
  printHelloWorld() {
    console.log('Hello, World!');
    return { message: 'Hello, World! printed successfully!' };
  }

  @Post('deploy')
  async deployProcess() {
    return await this.flowableService.deployHelloWorldProcess();
    
  }
}
