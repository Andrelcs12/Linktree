import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { LinksService } from './links.service'
import { CreateLinkDTO } from './dto/links.dto'

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {
  }

  @Post()
  @HttpCode(201)
    async create(@Body() createLinkDTO: CreateLinkDTO) {
      return await this.linksService.createLink(createLinkDTO)
    }

  @Get()
  @HttpCode(201)
  async get() {
    return await this.linksService.getLink;
  }
}
