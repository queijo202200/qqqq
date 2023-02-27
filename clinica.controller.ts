import { Controller, Get, Param } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clinica')
@Controller('clinica')
export class ClinicaController {
  constructor(private readonly clinicaService: ClinicaService) {}

  @Get('cpf/:cpf')
  getCPF(@Param('cpf') cpf: number) {
    return this.clinicaService.getCPF(cpf);
  }

}
