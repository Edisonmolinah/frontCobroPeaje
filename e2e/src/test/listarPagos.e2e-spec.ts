import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PagoPage } from '../page/producto/pago.po';

describe('workspace-project ListarPago', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let pago: PagoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pago = new PagoPage();
    });

    it('Deberia ingresar a Listar Pagos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonListarPagos();
    });

    it('Deberia ingresar Fecha y dar Click en Listar', () => {
        const FECHA_PAGO = Date.now();
        const PLACA = 'asd123';
        const TIPO_VEHICULO = 1;
        const VALOR_PAGO = 8000;

        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
        pago.clickBotonCrearPago();
        pago.ingresarPlaca(PLACA);
        pago.ingresarTipoVehiculo(TIPO_VEHICULO);
        pago.ingresarValorPago(VALOR_PAGO);
        pago.clickBotonPagar();
        pago.clickBotonListarPagos();
        pago.ingresarFechaPago(FECHA_PAGO);
        pago.clickBotonListarPagos();

    });
});
