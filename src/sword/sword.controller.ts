import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateSwordDto } from './dto/create-sword.dto';
import { User,Sword } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import AuthUser from 'src/auth/decorators/auth-user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { SwordService } from './sword.service';

@ApiTags('Swords')
@Controller('sword')
export class SwordController {
  constructor(private readonly service: SwordService) {}

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  @Post('/create')
  @ApiOperation({
    summary: 'Cadastrar uma espada',
  })
  @ApiBearerAuth()
  create(@Body() data: CreateSwordDto): Promise<Sword> {
    return this.service.create(data);
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  @Get()
  @ApiOperation({
    summary: 'Buscar todos as espadas cadastradas',
  })
  @ApiBearerAuth()
  findAll(): Promise<Sword[]> {
    return this.service.findAll();
  }

  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(AuthGuard(), RolesGuard)
  @Get('/:name')
  @ApiOperation({
    summary: 'Buscar uma espada pelo nome',
  })
  @ApiBearerAuth()
  findOne(@Param('code') code: string): Promise<Sword> {
    return this.service.findOne(code);
  }
}
