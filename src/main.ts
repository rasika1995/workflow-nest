import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import './temporal/worker'; // Ensure worker starts when the app starts


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
