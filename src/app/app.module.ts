import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { PagoModule } from '@producto/pago.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
//import { ActualizarPagoComponent } from './feature/producto/components/actualizar-pago/actualizar-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    //ActualizarPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagoModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
