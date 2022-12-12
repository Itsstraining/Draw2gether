import { Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { MiddlewareConsumer } from '@nestjs/common/interfaces/middleware';
import { AuthMiddleWare } from './auth/auth.middleware';
import { AuthService } from './auth/auth.service';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@draw2gether.dj7fuwe.mongodb.net/?retryWrites=true&w=majority'), UserModule],
  controllers: [AppController],
  providers: [AppService,AuthService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AuthMiddleWare).forRoutes(
      {
        path: '*', method: RequestMethod.ALL
      }
    )
  }
}
