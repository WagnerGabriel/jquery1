import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { HttpClientModule } from '@angular/common/http';
import { PhotoRegistroComponent } from './photo-registro/photo-registro.component';
import { AppRoutingModule } from './photo/app.routing.module';



@NgModule({
  //responsavel por importar componentes
  declarations: [
    AppComponent,
    PhotoRegistroComponent
  ],
  //responsavel por importar modulos
  imports: [
    BrowserModule,
    PhotoModule,  
    AppRoutingModule 
  ],
  //responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
