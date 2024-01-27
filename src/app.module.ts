import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArticlesModule } from './articles/articles.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [PrismaModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
