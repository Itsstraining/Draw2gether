import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {

  const key = admin.initializeApp({
    credential: admin.credential.cert('./key.json')
  });

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();



  await app.listen(3000);
  console.log("App is running on http://localhost:3000")
}
bootstrap();
