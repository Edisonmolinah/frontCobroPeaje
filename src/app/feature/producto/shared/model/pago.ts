
export class Pago {
    placa: string;
    tipoVehiculo: number;
    valorPago: number;

    

    constructor(placa?: string, tipoVehiculo?: number, valorPago?: number) {
        this.placa = placa;
        this.tipoVehiculo = tipoVehiculo;
        this.valorPago = valorPago;
    }
    
}