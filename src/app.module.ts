import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SwordModule } from './sword/sword.module';

@Module({
  imports: [ UserModule, SwordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
