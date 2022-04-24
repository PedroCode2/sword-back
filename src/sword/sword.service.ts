import { PrismaService } from '../prisma.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateSwordDto } from './dto/create-sword.dto';
import { Sword } from '@prisma/client';

@Injectable()
export class SwordService {
  constructor(private db: PrismaService) {}

  async create(data: CreateSwordDto): Promise<Sword> {
    const checkSword = await this.db.sword.findUnique({
      where: {name: data.name},
    })

    if(checkSword) {
      throw new ConflictException('Espada ja cadastrada')
    }
    
    const espada = await this.db.sword.create({ data });
    return espada
  }

  async findAll(): Promise<Sword[]> {
    const sword = await this.db.sword.findMany();

    return sword
  }

  async findOne(name: string): Promise<Sword> {
    const sword = await this.db.sword.findUnique({
      where: {name},
    });
    if(!sword) {
      throw new NotFoundException('Espada não encontrada');
    }
    return sword
  }
}
