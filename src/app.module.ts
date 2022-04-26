import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SwordModule } from './sword/sword.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ AuthModule,UserModule, SwordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
