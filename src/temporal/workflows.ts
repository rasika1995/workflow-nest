import { proxyActivities } from '@temporalio/workflow';
import * as activities from './activities';

// Proxy to call activities
const { myCronTask, myMinuteCronTask } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
});

export async function myCronWorkflow(): Promise<void> {
  await myCronTask(); // This will run for the 5-minute cron job
}

export async function myMinuteCronWorkflow(): Promise<void> {
  await myMinuteCronTask(); // This will run for the 1-minute cron job
}
