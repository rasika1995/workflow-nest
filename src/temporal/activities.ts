export async function myCronTask(): Promise<void> {
  const currentTime = new Date().toISOString(); // Get the current time in ISO format
  console.log(`Executing cron job task at ${currentTime}`);
  // Add your task logic here, e.g., sending an email, or performing a scheduled action
}

export async function myMinuteCronTask(): Promise<void> {
  const currentTime = new Date().toISOString(); // Get the current time in ISO format
  console.log(`Executing minute cron job task at ${currentTime}`);
  // Add your task logic here
}
