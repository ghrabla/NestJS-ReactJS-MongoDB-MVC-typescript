import { Controller,Get,Put,Post,Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    getallitems(): string{
        return 'get all items'
    }

    @Post()
    createitem(@Body() CreateItemDto: CreateItemDto): string{
        return `Name ${CreateItemDto.name} desc ${CreateItemDto.description}`
    }
    @Put()
    updateitem(): string{
        return 'update items'
    }
    @Delete()
    deleteeitem(): string{
        return 'delete items'
    }
}
