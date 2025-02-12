import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as path from 'path';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.use('/css', express.static(join(__dirname, '..', 'public', 'css')));
  app.use('/js', express.static(join(__dirname, '..', 'public', 'js')));

  await app.listen(3000);
}
bootstrap();
