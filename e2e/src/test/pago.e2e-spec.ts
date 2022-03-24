//import { browser, logging } from 'protractor';
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

    it('Deberia crear producto', () => {
        const PLACA = 'asd123';
        const IPO_VEHICULO = 1;

        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonCrearPago();
        pago.ingresarPlaca(PLACA);
        pago.ingresarTipoVehiculo(IPO_VEHICULO);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        pago.clickBotonListarProductos();

        expect(4).toBe(pago.contarProductos());
    });
});
