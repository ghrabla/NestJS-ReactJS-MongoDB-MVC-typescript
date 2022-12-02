import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';
import config from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI), ArticlesModule],
  providers: [],
  controllers: [],
})
export class AppModule {}
