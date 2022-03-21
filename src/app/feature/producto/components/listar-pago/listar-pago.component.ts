import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

import { PagoService } from '@producto/shared/service/pago.service';
import { ListaPago } from '@producto/shared/model/listaPago';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.css']
})
export class ListarPagoComponent implements OnInit {

  listaForm: FormGroup;

  listaPago: ListaPago = new ListaPago;
  constructor(protected pagoService: PagoService) { }

  ngOnInit() {
    this.contruirListaPagos();
  }

  listarPagos(){

    console.log(this.listaForm.value);
    
    
    this.pagoService.listarPagos(this.listaForm.value)
      .subscribe(data => {
        console.log(data);
        this.listaPago = data;
        //this.listaForm.get('valorPago').setValue(data['sumaPagos']); 
             
        console.log("data: " + JSON.stringify(data));
      })    

  }

  private contruirListaPagos(){
    
      this.listaForm = new FormGroup({       
        placa: new FormControl('', [Validators.required]),
        tipoVehiculo: new FormControl('', [Validators.required]),
        valorPago: new FormControl('', [Validators.required]), 
        fechaPago: new FormControl('', [Validators.required]),
        sumaPagos: new FormControl(''),
    
      });   
  }

  /*  sumaPagos(){

      const LISTAPAGO: ListaPago ={
        valorPago: this.listaForm.get('valorPago').value
      }

      console.log(LISTAPAGO);
      let suma = 0;  
        for( let x=0; x< listaPago; x++)
          suma += valoresSuma[x];
        return suma;



      

    

   /*  const PAGO: Pago = {
      placa:this.pagoForm.get('placa').value,
      tipoVehiculo:this.pagoForm.get('tipoVehiculo').value,
      valorPago:this.pagoForm.get('valorAPagar').value,
      
    }

    let suma = 0;  
    for( let x=0; x< valoresSuma.length; x++)
      suma += valoresSuma[x];
    return suma; 

  }  */

}

