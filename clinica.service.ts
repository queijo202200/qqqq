import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { logErroResponse } from './errorResponseUtil';

@Injectable()
export class Constantes {
  Autorizacao = 'fdeal91-6dhd-48sc-a7de-3267ff77d27';
}

@Injectable()
export class ClinicaService extends Constantes {
  async getCPF(cpf) {
    const response = await axios
      .get(
        `https://api-evo-integration.azurewebsites.net/asc/api/individuos/find?cpf=${cpf}`,
        {
          headers: {
            Authorization: this.Autorizacao,
            'Content-Type': 'application/json',
          },
        },
      )
      .catch(logErroResponse);

    if (response) {
      const finalResponse = response.data;

      finalResponse.contatos = response.data.contatos
        .map((contato) => contato.numero)
        .join(',');

      finalResponse.contrato = response.data.identificadores
        .map((identificador) => identificador.contrato.cliente)
        .join(',');

      finalResponse.identificadores = response.data.identificadores
        .map((identificador) => {
          return (
            identificador.tipoVinculo +
            ',' +
            identificador.identificadorOperadora
          );
        })
        .join(',');

      return finalResponse;
    }
  }
  async getOk(cpf) {
    return {cpf};
  }
}
