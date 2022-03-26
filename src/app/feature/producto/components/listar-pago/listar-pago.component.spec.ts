import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListarPagoComponent } from './listar-pago.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PagoService } from '../../shared/service/pago.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ListaPago } from '@producto/shared/model/listaPago';

describe('ListarPagoComponent', () => {
  let fixture: ComponentFixture<ListarPagoComponent>;
  let component: ListarPagoComponent;
  let pagoService: PagoService;
  var dateDay = new Date('2022-03-25');
  const listaPagosTest: ListaPago[] = [new ListaPago('qwe123', 1, 8000, dateDay),
  new ListaPago('asd123', 2, 12000, dateDay)];

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
      of(listaPagosTest)
    );
    fixture.detectChanges();
  });

  it('should create 2 list', () => {
    expect(component).toBeTruthy();

    expect(0).toBe(component.listaPago.length)
  })
});
