import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../shared/service/pago.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pago } from '@producto/shared/model/pago';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


const LONGITUD_MINIMA_PERMITIDA_TEXTO = 6;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 6;
const VALOR_MINIMO_PERMITIDO_TIPO_VEHICULO = 1;
const VALOR_MAXIMO_PERMITIDO_TIPO_VEHICULO = 3;
const VALOR_FORMULARIO_VALOR_PAGO = 'valorPago';
const VALOR_ASIGNACION_VALOR_PAGO = 'valorAPagar';


@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})

export class CrearPagoComponent implements OnInit {
  pagoForm: FormGroup;
  pago: Pago = new Pago();
  titulo = 'Crear Pago';
  id: string | null;
  constructor(protected pagoServices: PagoService, private router: Router, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.construirFormularioPago();
    this.esEditar();
  }

  private construirFormularioPago() {
    this.pagoForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      tipoVehiculo: new FormControl('', [Validators.required, Validators.min(VALOR_MINIMO_PERMITIDO_TIPO_VEHICULO),
      Validators.max(VALOR_MAXIMO_PERMITIDO_TIPO_VEHICULO)]),
      valorPago: new FormControl('', [Validators.required])
    });
  }

  calcularPago() {
    this.pagoServices.calcularPago(this.pagoForm.value)
      .subscribe(data => {
        this.pago = data;
        this.pagoForm.get(VALOR_FORMULARIO_VALOR_PAGO).setValue(data[VALOR_ASIGNACION_VALOR_PAGO]);
      });
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar Pago';
    }
  }

  guardarPago() {
    const PAGO: Pago = {
      placa: this.pagoForm.get('placa').value,
      tipoVehiculo: this.pagoForm.get('tipoVehiculo').value,
      valorPago: this.pagoForm.get('valorPago').value,
    };

    if (this.id !== null) {
      const EDIT_PAGO: Pago = {
        placa: this.pagoForm.get('placa').value,
        tipoVehiculo: this.pagoForm.get('tipoVehiculo').value,
        valorPago: this.pagoForm.get('valorPago').value,
      };
      this.pagoServices.modificarPago(this.id, EDIT_PAGO).subscribe(data => {
        console.log(data);
        this.alertPagoActualizado();
        this.router.navigate(['/listar']);
      });

    } else {
      console.log(PAGO);
      this.pagoServices.guardarPago(PAGO).subscribe(data => {
        this.pago = data;
      });
      this.alertPagoCreado();
      this.construirFormularioPago();
    }
  }

  alertPagoCreado() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pago Exitoso',
      showConfirmButton: false,
      timer: 1000
    });
  }
  alertPagoActualizado() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pago Actualizado',
      showConfirmButton: false,
      timer: 1000
    });
  }
}
