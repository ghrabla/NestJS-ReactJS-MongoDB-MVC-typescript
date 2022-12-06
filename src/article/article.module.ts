import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { ArticleSchema } from './schemas/article.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports : [MongooseModule.forFeature([{name: 'Article',schema: ArticleSchema}])],
    controllers: [ArticleController],
    providers: [ArticleService]
})
export class ArticleModule {  
}
