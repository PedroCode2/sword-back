import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/auth/enums/role.enum';

export class CreateUserDto {
  /**
   * Nome do usuario
   *
   * @example 'Pedro Henrique'
   */
  @IsString()
  @IsNotEmpty({ message: 'Por favor insira um nome' })
  @Length(3, 150)
  @ApiProperty()
  name: string;

  /**
   * nickname do usuario
   *
   * @example 'Kansk'
   */
  @IsString()
  @IsNotEmpty({ message: 'Por favor insira um nome' })
  @Length(3, 150)
  @ApiProperty()
  nickname: string;

  /**
   * Email do usuario
   *
   * @example 'PedroHenrique@gmail.com'
   */
  @IsNotEmpty({
    message: 'O e-mail da empresa é obrigatório para fazer cadastro no sistema',
  })
  @IsEmail({
    message: 'Por favor insira um e-mail válido user@restoque.com.br',
  })
  @ApiProperty()
  email: string;

  /**
   * Tipo do usuario
   *
   * @example 'Admin/User'
   */
  @ApiProperty()
  role: Role;

  /**
   * Senha do usuario
   *
   * @example 'Xilften221'
   */
  @Length(6, 20, { message: 'A senha deve conter de 6 a 20 dígitos' })
  @ApiProperty()
  pass: string;

  /**
   * Confirmação da Senha do usuario
   *
   * @example 'Xilften221'
   */
  @Length(6, 20, {
    message: 'A confirmação da senha deve conter de 6 a 20 dígitos',
  })
  @ApiProperty()
  passConfirm: string;
}
