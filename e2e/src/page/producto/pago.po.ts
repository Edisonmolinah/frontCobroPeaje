import { by, element } from 'protractor';

export class PagoPage {
    private linkCrearPago = element(by.id('linkCrearPago'));
    private linkListarPagos = element(by.id('linkListarPago'));
    private inputPlacaPago = element(by.id('placaPago'));
    private inputTipoVehiculoProducto = element(by.id('tipoVehiculoPago'));
    private listaPagos = element.all(by.css('ul.pagos li'));

    async clickBotonCrearPago() {
        await this.linkCrearPago.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarPagos.click();
    }

    async ingresarPlaca(placaPago) {
        await this.inputPlacaPago.sendKeys(placaPago);
    }

    async ingresarTipoVehiculo(tipoVehiculoPago) {
        await this.inputTipoVehiculoProducto.sendKeys(tipoVehiculoPago);
    }

    async contarProductos() {
        return this.listaPagos.count();
    }
}
