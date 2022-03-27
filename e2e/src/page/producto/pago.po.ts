import { by, element } from 'protractor';

export class PagoPage {
    private linkCrearPago = element(by.id('linkCrearPago'));
    private linkListarPagos = element(by.id('linkListarPago'));
    private botonCalcularPago = element(by.id('btnCalcularPago'));
    private botonPagar = element(by.id('botonPagar'));
    private botonListarPagos = element(by.id('botonListarPagos'));
    private inputPlaca = element(by.id('placa'));
    private inputTipoVehiculo = element(by.id('tipoVehiculo'));
    private inputValorPago = element(by.id('valorAPagar'));
    private inputFechaPago = element(by.id('fechaPago'));
    private listaPagos = element.all(by.css('ul.pagos li'));

    async clickBotonCrearPago() {
        await this.linkCrearPago.click();
    }

    async clickBotonListarPagos() {
        await this.linkListarPagos.click();
    }
    async clickBotonPagar() {
        await this.botonPagar.click();
    }
    async clickBotonListar() {
        await this.botonListarPagos.click();
    }
    async clickBotonCalcularPago() {
        await this.botonCalcularPago.click();
    }

    async ingresarPlaca(placa) {
        await this.inputPlaca.sendKeys(placa);
    }

    async ingresarTipoVehiculo(tipoVehiculo) {
        await this.inputTipoVehiculo.sendKeys(tipoVehiculo);
    }

    async ingresarValorPago(valorPago) {
        await this.inputValorPago.sendKeys(valorPago);
    }

    async ingresarFechaPago(fechaPago) {
        await this.inputFechaPago.sendKeys(fechaPago);
    }

    async contarPagos() {
        await this.listaPagos.length;
    }
}
