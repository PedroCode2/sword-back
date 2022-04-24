import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSwordDto {
  /**
   * Nome da espada
   *
   * @example 'Espada azul'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @Length(3, 150)
  @ApiProperty()
  name: string;

  /**
   * tipo
   *
   * @example 'Larger'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um nickname Valido' })
  @Length(3, 150)
  @ApiProperty()
  type: string;

  /**
   * sword user
   *
   * @example 'Kirito'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @Length(3, 150)
  @ApiProperty()
  characterswords: string;

  /**
   * peso da espada
   *
   * @example '8.6k'
   */
   @IsNumber()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @ApiProperty()
  swordweigth: number;

  /**
   * Largura da espada
   *
   * @example '23cm'
   */
  @IsNumber()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @Length(6, 20, { message: 'A senha deve conter de 6 a 20 dígitos' })
  @ApiProperty()
  swordwidth: number;

  /**
   * habilidade da espada
   *
   * @example 'Espada leve e com alta velocidade'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @Length(6, 20)
  @ApiProperty()
  swordhability: string;

  /**
   * jogo da espada
   *
   * @example 'Sao'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um nome' })
  @ApiProperty()
  swordgame: string;
}
