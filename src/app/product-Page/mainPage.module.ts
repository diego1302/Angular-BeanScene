import { NgModule } from "@angular/core";
import { MainPageComponent } from './main-page/main-page.component';
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product/product.component";
import { AlertsModule } from "../alerts";


@NgModule({
  imports:[ CommonModule, AlertsModule],
  declarations:[ MainPageComponent, ProductComponent],
  exports:[MainPageComponent, ProductComponent]
})
export class MainPageModule{}