import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../shared/service/pago.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pago } from '@producto/shared/model/pago';


const LONGITUD_MINIMA_PERMITIDA_TEXTO = 6;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 6;
const VALOR_MINIMO_PERMITIDO_TIPO_VEHICULO = 1;
const VALOR_MAXIMO_PERMITIDO_TIPO_VEHICULO = 3;


@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.css']
})
export class CrearPagoComponent implements OnInit {
  pagoForm: FormGroup;

  pago: Pago = new Pago();

  constructor(protected pagoServices: PagoService) {
  }

  ngOnInit() {
    this.construirFormularioPago();
  }
  
  calcularPago() {
    
    this.pagoServices.calcularPago(this.pagoForm.value)
      .subscribe(data => {
        this.pago = data;
        this.pagoForm.get('valorAPagar').setValue(data['valorAPagar']);
        
        console.log("data: " + JSON.stringify(data));
      })

    const CALCULARPAGO: Pago = {
      placa: this.pagoForm.get('placa').value,
      tipoVehiculo: this.pagoForm.get('tipoVehiculo').value,
      valorPago: this.pagoForm.get('valorAPagar').value,
          

    }

    console.log(CALCULARPAGO);
    console.log("mostrando el PagoForm: "+JSON.stringify(this.pagoForm));

  }
  

  private construirFormularioPago() {
    this.pagoForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                  Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      tipoVehiculo: new FormControl('', [Validators.required, Validators.min(VALOR_MINIMO_PERMITIDO_TIPO_VEHICULO),
                                         Validators.max(VALOR_MAXIMO_PERMITIDO_TIPO_VEHICULO)]),
      valorAPagar: new FormControl('',[]) 
    });
  }

  guardarPago() {

    const PAGO: Pago = {
      placa:this.pagoForm.get('placa').value,
      tipoVehiculo:this.pagoForm.get('tipoVehiculo').value,
      valorPago:this.pagoForm.get('valorAPagar').value,
      
    }

    console.log(PAGO);
    this.pagoServices.guardarPago(PAGO)
    .subscribe(data => {
      this.pago = data;
              
    })

      
  }    
}  


