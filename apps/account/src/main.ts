import { join } from 'node:path';

import { NestFactory } from '@nestjs/core';
import { AccountModule } from './account.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AccountModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'account',
        protoPath: join(__dirname, '..', 'account.proto'),
      },
    },
  );
  const logger = new Logger('Account');

  await app
    .listen()
    .then(async () => logger.log(`🚀 running!`))
    .catch((error) => logger.error(`❌ Server starts error: ${error}`));
}
bootstrap();
