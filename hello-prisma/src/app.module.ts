import { Module } from '@nestjs/common';
import { PrismaService } from'./prisma.service';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

