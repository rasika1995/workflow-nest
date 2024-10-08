// src/temporal/worker.ts
import { Worker } from '@temporalio/worker';
import * as activities from './activities';

async function runWorkers() {
  // Worker for the 5-minute cron job
  const fiveMinuteWorker = await Worker.create({
    workflowsPath: require.resolve('./workflows'), // Path to workflows
    activities,
    taskQueue: 'my-cron-task', // Task queue for the 5-minute cron
  });

  // Worker for the 1-minute cron job
  const oneMinuteWorker = await Worker.create({
    workflowsPath: require.resolve('./workflows'), // Path to workflows
    activities,
    taskQueue: 'my-minute-cron-task', // Task queue for the 1-minute cron
  });

  // Run both workers in parallel
  await Promise.all([fiveMinuteWorker.run(), oneMinuteWorker.run()]);
}

runWorkers().catch((err) => {
  console.error('Error starting workers:', err);
  process.exit(1);
});
