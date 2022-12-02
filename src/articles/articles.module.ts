import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticleSchema } from './schemas/article.schema';
import { ArticlesService } from './articles.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature()],
    controllers: [],
    providers: []
})
export class ArticlesModule {}
