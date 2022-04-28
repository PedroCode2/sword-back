import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateSwordDto } from './dto/create-sword.dto';
import { Sword } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
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

  @Get('/find')
  @ApiOperation({
    summary: 'Buscar todos as espadas cadastradas',
  })
  @ApiBearerAuth()
  findAll(): Promise<Sword[]> {
    return this.service.findAll();
  }

  @Get('find/:name')
  @ApiOperation({
    summary: 'Buscar uma espada pelo nome',
  })
  @ApiBearerAuth()
  findOne(@Param('name') name: string): Promise<Sword> {
    return this.service.findOne(name);
  }
  @Get('find/:id')
  @ApiOperation({
    summary: 'Buscar uma espada pelo id',
  })
  @ApiBearerAuth()
  findid(@Param('name') id: number): Promise<Sword> {
    return this.service.findUnique(id);
  }
}
