export class ListaPago {
    id: string;
    placa: string;
    tipoVehiculo: number;
    valorPago: number;
    fechaPago: Date;

    constructor(id: string, placa: string, tipoVehiculo: number, valorPago: number, fechaPago?: Date) {

        this.id = id;
        this.placa = placa;
        this.tipoVehiculo = tipoVehiculo;
        this.valorPago = valorPago;
        this.fechaPago = fechaPago;
    }
}
