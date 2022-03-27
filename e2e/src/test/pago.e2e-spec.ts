import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PagoPage } from '../page/producto/pago.po';

describe('workspace-project Pago', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pago: PagoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pago = new PagoPage();
    });

    it('Deberia ingresar a crear pago', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
    });

    it('Deberia dar click en calcular pago cuando tenga Placa y TipoVehiculo', () => {
        const PLACA = 'asd123';
        const TIPO_VEHICULO = 1;

        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
        pago.ingresarPlaca(PLACA);
        pago.ingresarTipoVehiculo(TIPO_VEHICULO);

    });

    it('Deberia Crear un pago', () => {
        const PLACA = 'asd123';
        const TIPO_VEHICULO = 1;
        const VALOR_PAGO = 8000;

        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
        pago.ingresarPlaca(PLACA);
        pago.ingresarTipoVehiculo(TIPO_VEHICULO);
        pago.ingresarValorPago(VALOR_PAGO);
        expect(PLACA).toEqual('asd123');
        expect(TIPO_VEHICULO).toEqual(1);
        expect(VALOR_PAGO).toEqual(8000);
        pago.clickBotonPagar();
    });
});
