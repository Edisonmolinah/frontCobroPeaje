import { NgModule } from '@angular/core';

import { PagoRoutingModule } from './pago-routing.module';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { PagoComponent } from './components/pago/pago.component';
import { SharedModule } from '@shared/shared.module';
import { PagoService } from './shared/service/pago.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CrearPagoComponent,
    ListarPagoComponent,
    PagoComponent
  ],
  imports: [
    PagoRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [PagoService]
})
export class PagoModule { }
