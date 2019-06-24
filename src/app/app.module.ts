import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';



@NgModule({
  //responsavel por importar componentes
  declarations: [
    AppComponent
  ],
  //responsavel por importar modulos
  imports: [
    BrowserModule,
    PhotoModule
  ],
  //responsavel por importar services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
