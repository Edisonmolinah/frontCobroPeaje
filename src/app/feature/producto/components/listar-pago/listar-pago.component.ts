import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { PagoService } from '@producto/shared/service/pago.service';
import { ListaPago } from '@producto/shared/model/listaPago';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.css']
})
export class ListarPagoComponent implements OnInit {

  listaForm: FormGroup;
  listaPago: ListaPago[];
  sumaPagos = 0;
  constructor(protected pagoService: PagoService) { }

  ngOnInit() {
    this.contruirListaPagos();
  }

  listarPagos() {
    this.pagoService.listarPagos(this.listaForm.value)
      .subscribe(data => {
        this.listaPago = data;
        for (let i = 0; i < this.listaPago.length; i++) {
          this.sumaPagos += this.listaPago[i].valorPago;
        }
        this.listaForm.get('sumaPagos').setValue(this.sumaPagos);
      });
  }

  private contruirListaPagos() {
    this.listaForm = new FormGroup({
      placa: new FormControl('', [Validators.required]),
      tipoVehiculo: new FormControl('', [Validators.required]),
      valorPago: new FormControl('', [Validators.required]),
      fechaPago: new FormControl('', [Validators.required]),
      sumaPagos: new FormControl(''),
    });
  }
}
