import { Hospede } from './hospede'

export interface CheckIn{
    hospede: Hospede,
    dataEntrada: string,
    dataSaida: string,
    adicionalVeiculo: boolean
}