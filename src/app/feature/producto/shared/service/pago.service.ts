import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Pago } from '../model/pago';
import { ListaPago } from '../model/listaPago';


@Injectable()
export class PagoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Pago[]>(`${environment.endpoint}/pagos`, this.http.optsName('consultar pagos'));
  }

  public calcularPago(pago: Pago) {
    return this.http.doGet<Pago>(`http://localhost:8081/cobroPeaje/pago/calcular_pago/${pago.tipoVehiculo}`,
                                                this.http.optsName('crear'));
  }

  public guardarPago(pago: Pago) {
    return this.http.doPost<Pago>(`http://localhost:8081/cobroPeaje/pago`,pago,
                                                this.http.optsName('crear'));
  } 

  public listarPagos(listaPago: ListaPago) {
    console.log(listaPago)
    return this.http.doGet<ListaPago>(`http://localhost:8081/cobroPeaje/pagos/${listaPago.fechaPago}`,
                                                this.http.optsName('listar'));
  } 


}