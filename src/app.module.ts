import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MyListModule } from './modules/myList/myList.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthenticateMiddleware } from './middleware/authenticate.middleware';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    MyListModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticateMiddleware).exclude('').forRoutes('*');
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
