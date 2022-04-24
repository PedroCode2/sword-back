import { PrismaService } from '../prisma.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private db: PrismaService) {}
  async create(dados: CreateUserDto): Promise<User> {
    if (dados.pass !== dados.passConfirm) {
      throw new UnauthorizedException('Senhas não conferem');
    } else {
      delete dados.passConfirm;
    }

    const checkUser = await this.db.user.findUnique({
      where: { email: dados.email },
    });

    if (checkUser) {
      throw new ConflictException('E-mail já cadastrado');
    }

    const salt = 10;
    const hashPass = await bcrypt.hash(dados.pass, salt);

    const user = await this.db.user.create({
      data: {
        ...dados,
        pass: hashPass,
      },
    });

    delete user.pass;
    return user;
  }

  async findAll(): Promise<any[]> {
    const usersList = await this.db.user.findMany();

    const users = usersList.map(({ pass, ...rest }) => rest);

    return users;
  }

  async findOne(id: number): Promise<any> {
    const user = await this.db.user.findUnique({
      where: { id },
    });
    delete user.pass;
    
    return user
  }

}
