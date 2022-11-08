import { Controller,Get,Put,Post,Delete } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    getallitems(): string{
        return 'get all items'
    }

    @Post()
    createitem(): string{
        return 'create items'
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
