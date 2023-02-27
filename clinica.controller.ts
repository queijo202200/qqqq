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

   /*
  @Get(':cpf')
  getOk(@Param('cpf') cpf: number) {
    return this.clinicaService.getOk(cpf);
  }
  */

  @Get(':cpf')
  getCPF1(@Param('cpf') cpf: number) {
    return this.clinicaService.getCPF1(cpf);
  }

}