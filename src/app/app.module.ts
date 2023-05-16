import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/vistas/home/home.component';
import { GaleriaComponent } from './componentes/vistas/galeria/galeria.component';
import { DivisasComponent } from './componentes/vistas/divisas/divisas.component';
import { MaterialModule } from './modules/material/material.module';
import { NavbarComponent } from './componentes/componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/componentes/footer/footer.component';
import { CardComponent } from './componentes/componentes/card/card.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    DivisasComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
