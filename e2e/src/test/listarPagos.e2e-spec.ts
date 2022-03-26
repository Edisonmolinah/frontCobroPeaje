//import { browser, logging } from 'protractor';
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

        expect(0).toBe(pago.contarPagos());
    });

    it('Deberia ingresar Fecha y dar Click en Listar', () => {
        const FECHA_PAGO = Date.now();

        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
        pago.clickBotonPagar();
        pago.clickBotonListarPagos();
        pago.ingresarFechaPago(FECHA_PAGO);

        expect(0).toBe(pago.contarPagos());


        //Adicionamos las validaciones despues de la creación
        //expect().toEqual();
    });    
});
