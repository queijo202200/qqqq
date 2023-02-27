import { Module } from '@nestjs/common';
import { ClinicaController } from './clinica.controller';
import { ClinicaService } from './clinica.service';

@Module({
  imports: [],
  controllers: [ClinicaController],
  providers: [ClinicaService],
})
export class ClinicaModule {}
