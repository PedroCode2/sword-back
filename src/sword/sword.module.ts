import { Module } from '@nestjs/common';
import { SwordService } from './sword.service';
import { SwordController } from './sword.controller';

@Module({
  controllers: [SwordController],
  providers: [SwordService]
})
export class SwordModule {}
