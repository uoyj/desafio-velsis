import { Hospede } from './hospede'

export interface CheckIn{
    id: number,
    hospede: Hospede,
    dataEntrada: string,
    dataSaida: string,
    adicionalVeiculo: boolean
}