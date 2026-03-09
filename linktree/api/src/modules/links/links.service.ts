import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDTO } from './dto/links.dto'
import { PrismaService } from '../../prisma.service'


@Injectable()
export class LinksService {
    constructor(private prisma: PrismaService) {}

    async createLink(data: CreateLinkDTO) {
        return await this.prisma.link.create({
            data: {
                url: data.url,
                title: data.title,
                description: data.description,
                userId: data.userId,
            }
        })
    }

    async getLink() {
        const link = await this.prisma.link.findMany({
        })

        if(!link) {
            throw new NotFoundException(" Links não encontrados")
        }

        return link;
    }
}
