import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CalcularPagoComponent } from './components/crear-pago/crear-pago.component';
import { CrearPagoComponent } from './components/crear-pago/crear-pago.component';
import { ListarPagoComponent } from './components/listar-pago/listar-pago.component';
import { PagoComponent } from './components/pago/pago.component';


const routes: Routes = [
  {
    path: '',
    component: PagoComponent,
    children: [

      {
        path: 'crear',
        component: CrearPagoComponent
      },

      {
        path: 'listar',
        component: ListarPagoComponent
      },
      

      {
        path: '**',
        redirectTo:'', pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
