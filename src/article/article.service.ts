import { Injectable } from '@nestjs/common';
import { Article } from './interfaces/article.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService {
    constructor(@InjectModel("Article") private readonly articleService: Model<Article>){}

    async findall(): Promise<Article[]>{
       return await this.articleService.find();
    }

    
    

}
