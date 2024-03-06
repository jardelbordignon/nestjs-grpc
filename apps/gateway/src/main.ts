import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Gateway');

  await app
    .listen(4000)
    .then(async () => logger.log(`🚀 running on: ${await app.getUrl()}`))
    .catch((error) => logger.error(`❌ Server starts error: ${error}`));
}
bootstrap();
