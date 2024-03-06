import { NestFactory } from '@nestjs/core';
import { AccountModule } from './account.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AccountModule);
  const logger = new Logger('Account');

  await app
    .listen(4001)
    .then(async () => logger.log(`🚀 running on: ${await app.getUrl()}`))
    .catch((error) => logger.error(`❌ Server starts error: ${error}`));
}
bootstrap();
