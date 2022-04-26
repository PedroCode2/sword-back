import { IsNotEmpty, IsString, Length } from 'class-validator';
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
  @IsNotEmpty({ message: 'PorFavor insira um tipo' })
  @Length(3, 150)
  @ApiProperty()
  type: string;

  /**
   * sword user
   *
   * @example 'Kirito'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira o nome do personagem' })
  @Length(3, 150)
  @ApiProperty()
  characterswords: string;

  /**
   * peso da espada
   *
   * @example '8.6k'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um Peso da espada' })
  @ApiProperty()
  swordweigth: string;

  /**
   * Largura da espada
   *
   * @example '23cm'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira um Largura da espada' })
  @ApiProperty()
  swordwidth: string;

  /**
   * Detalhes da espada
   *
   * @example 'Ela é uma espada longa, com cabo preto e lâmina azul. Também possui um detalhe triangular no começo da lâmina e algo que parece um diamante como enfeite.'
   */
   @IsString()
   @IsNotEmpty({ message: 'PorFavor insira um Largura da espada' })
   @ApiProperty()
   details: string;

  /**
   * habilidade da espada
   *
   * @example 'Espada leve e com alta velocidade'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira uma habilidade da espada' })
  @ApiProperty()
  swordhability: string;

  /**
   * jogo/anime que a espada pertence
   *
   * @example 'Sao'
   */
  @IsString()
  @IsNotEmpty({ message: 'PorFavor insira o nome do jogo ou anime' })
  @ApiProperty()
  swordgame: string;
}
