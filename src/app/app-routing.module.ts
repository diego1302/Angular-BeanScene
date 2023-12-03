import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './product-Page';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "src"},
  {path: "src", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
