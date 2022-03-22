import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearPagoComponent } from './crear-pago.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PagoService } from '../../shared/service/pago.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearPagoComponent', () => {
  let component: CrearPagoComponent;
  let fixture: ComponentFixture<CrearPagoComponent>;
  let pagoService: PagoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPagoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PagoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPagoComponent);
    component = fixture.componentInstance;
    pagoService = TestBed.inject(PagoService);
    spyOn(pagoService, 'calcularPago').and.returnValue(
      of()
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.pagoForm.value).toBeTruthy();
  });  

  it('Registrando pago', () => {
    expect(component.pagoForm.valid).toBeFalsy();
    component.pagoForm.controls.placa.setValue('asd123');
    component.pagoForm.controls.tipoVehiculo.setValue(1);
    
    expect(component.pagoForm.valid).toBeTruthy();

    component.guardarPago();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
