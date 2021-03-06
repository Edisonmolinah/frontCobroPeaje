import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PagoService } from './pago.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { HttpResponse } from '@angular/common/http';
import { Pago } from '../model/pago';


describe('PagoService', () => {
  let httpMock: HttpTestingController;
  let service: PagoService;
  const apiEndpointPagoConsulta = `${environment.endpoint}/pagos`;
  const apiEndpointcrearPago = `http://localhost:8081/cobroPeaje/pago`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PagoService);
  });

  it('should be created', () => {
    const pagoService: PagoService = TestBed.inject(PagoService);
    expect(pagoService).toBeTruthy();
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
    const dummyPago = new Pago('asd123', 3, 18000);
    service.guardarPago(dummyPago).subscribe((respuesta) => {
      expect(respuesta).toEqual(respuesta);
    });
    const req = httpMock.expectOne(apiEndpointcrearPago);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
