import { Hospede } from './hospede'

export interface CheckIn{
    id: number,
    hospedeId: number,
    dataEntrada: string,
    dataSaida: string,
    adicionalVeiculo: boolean
}