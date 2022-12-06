import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './interfaces/article.interface';



@Controller('article')
export class ArticleController {
    constructor(private readonly articleCont: ArticleService){}

    @Get("")
    findall(): Promise<Article[]>{
        return this.articleCont.findall()
    }


}
