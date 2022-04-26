import { User } from '@prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  @Post('/create')
  @ApiOperation({
    summary: 'Cadastrar um usuário',
  })
  @ApiBearerAuth()
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }

  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard(), RolesGuard)
  @Get('/find')
  @ApiOperation({
    summary: 'Buscar todos os usuários',
  })
  @ApiBearerAuth()
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard(), RolesGuard)
  @Get('/find/:id')
  @ApiOperation({
    summary: 'Retornar um usuário ',
  })
  @ApiBearerAuth()
  findOne(@Param('id') id: number): Promise<any> {
    return this.service.findOne(+id);
  }
}
