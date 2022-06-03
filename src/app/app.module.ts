import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { SiderbarComponent } from './shared/siderbar/siderbar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaisModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
