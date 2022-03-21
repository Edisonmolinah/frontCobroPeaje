import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PagoService } from './pago.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Pago } from '../model/pago';


describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service: PagoService;
  const apiEndpointPagoConsulta = `${environment.endpoint}/pagos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PagoService);
  });

  it('should be created', () => {
    const pagotService: PagoService = TestBed.inject(PagoService);
    expect(pagotService).toBeTruthy();
  });

  it('deberia listar un pago', () => {
    const dummyPagos = [
      new Pago('abc123', 1, 8000), new Pago('qwe456', 2, 12000)
    ];
    service.consultar().subscribe(pagos => {
      expect(pagos.length).toBe(2);
      expect(pagos).toEqual(dummyPagos);
    });
    const req = httpMock.expectOne(apiEndpointPagoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPagos);
  });

   it('deberia crear un pago', () => {
    const dummyProducto = new Pago('asd123', 3, 18000);
    service.guardarPago(dummyProducto).subscribe((respuesta) => {
      expect(respuesta);
    });
    
  }); 

});
