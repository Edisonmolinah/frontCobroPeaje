import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPagoComponent } from './listar-pago.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PagoService } from '../../shared/service/pago.service';
import { ListaPago } from '../../shared/model/listaPago';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarProductoComponent', () => {
  let component: ListarPagoComponent;
  let fixture: ComponentFixture<ListarPagoComponent>;
  let pagoService: PagoService;
  const listaPagos: ListaPago[] = [new ListaPago('1', 'asd123', 1, 8000), new ListaPago('2', 'qwe456', 2, 12000)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPagoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PagoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPagoComponent);
    component = fixture.componentInstance;
    pagoService = TestBed.inject(PagoService);
    spyOn(pagoService, 'listarPagos').and.returnValue(
      of(listaPagos)
    );
    fixture.detectChanges();
  });

  it('should create 2 pagos en listaPagos', () => {
    expect(component).toBeTruthy();
    expect(2).toBe(listaPagos.length);
  });
});
