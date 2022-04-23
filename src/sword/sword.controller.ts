import { Controller } from '@nestjs/common';
import { SwordService } from './sword.service';

@Controller('sword')
export class SwordController {
  constructor(private readonly swordService: SwordService) {}
}
