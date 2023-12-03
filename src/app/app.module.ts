import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './product-Page';
import { AlertsModule } from './alerts';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    CommonModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }
