import { Module } from '@nestjs/common';
import { SwordService } from './sword.service';
import { SwordController } from './sword.controller';
import { PrismaService } from 'src/prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [SwordController],
  providers: [SwordService, PrismaService]
})
export class SwordModule {}
