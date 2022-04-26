import { User } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {
  /**
   * email or nickname
   *
   * @example 'Digite o email ou nickname'
   */
  
  @IsString()
  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  /**
   * Senha de Usuario
   *
   * @example 'Digite a senha de usuario'
   */
  @IsString()
  @IsNotEmpty()
  @Length(6, 20)
  @ApiProperty()
  pass: string;
}

export class AuthResponse {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  user: User;
}
