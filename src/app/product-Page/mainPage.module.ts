import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlertsModule } from "../alerts";
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductScreenComponent } from './product-screen/product-screen.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  imports:[ CommonModule, AlertsModule],
  declarations:[ ProductCardComponent, ProductScreenComponent, CategoryComponent],
  exports:[ ProductCardComponent, ProductScreenComponent, CategoryComponent]
})
export class ProductPageModule{}