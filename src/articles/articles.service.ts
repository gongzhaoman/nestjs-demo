import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

import { CreateArticleDto } from './dto/create-article.dto'
import { UpdateArticleDto } from './dto/update-article.dto'

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article'
  }

  findAll() {
    return this.prisma.article.findMany({ where: { published: true } })
  }

  findOne(id: number) {
    return `This action returns a #${id} article`
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`
  }

  remove(id: number) {
    return `This action removes a #${id} article`
  }
}
