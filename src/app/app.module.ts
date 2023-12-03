import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductPageModule } from './product-Page';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ProductPageModule
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [
    AppComponent 
  ]
})
export class AppModule { }
