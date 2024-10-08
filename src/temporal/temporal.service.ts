import { Injectable, OnModuleInit } from '@nestjs/common';
import { Connection, WorkflowClient } from '@temporalio/client';
import { myCronWorkflow, myMinuteCronWorkflow } from './workflows';

@Injectable()
export class TemporalService implements OnModuleInit {
  private client: WorkflowClient;
  private connection: Connection;

  // Initialize Temporal connection and workflow client
  async onModuleInit() {
    // Connect to Temporal server asynchronously
    this.connection = await Connection.connect(); // Use connect() to create a connection

    // Create the workflow client using the connection
    this.client = new WorkflowClient({
      connection: this.connection,
    });

    console.log('Connected to Temporal server');
  }

  async startCronWorkflow() {
    // Start the workflow with a cron schedule
    const handle = await this.client.start(myCronWorkflow, {
      taskQueue: 'my-cron-task', // Task queue for the cron workflow
      cronSchedule: '*/5 * * * *', // Cron schedule to run every 5 minutes
      workflowId: 'cron-workflow', // Unique ID for the workflow
    });

    console.log(`Started workflow with ID: ${handle.workflowId}`);
  }

  async startMinuteCronWorkflow() {
    // Start another workflow with a cron schedule for every minute
    const handle = await this.client.start(myMinuteCronWorkflow, {
      taskQueue: 'my-minute-cron-task', // Different task queue for this workflow
      cronSchedule: '* * * * *', // Cron schedule to run every minute
      workflowId: 'minute-cron-workflow', // Unique ID for the minute workflow
    });

    console.log(`Started workflow with ID: ${handle.workflowId}`);
  }

  // Clean up the connection if needed
  async onModuleDestroy() {
    await this.connection.close();
  }
}
