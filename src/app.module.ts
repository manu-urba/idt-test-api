import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { NyTimesModule } from './nytimes/nytimes.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'], // No need to specify other env paths other than the local one as we will be passing them via docker
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
        API_VERSION: Joi.string().required(),
        NYTIMES_BOOKS_API_BASEURL: Joi.string().uri().required(),
        NYTIMES_BOOKS_API_KEY: Joi.string().required(),
      }),
    }),
    NyTimesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
