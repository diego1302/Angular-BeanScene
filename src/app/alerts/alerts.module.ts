import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  exports:[
    SuccessAlertComponent,
    WarningAlertComponent
  ]
  
})
export class AlertsModule { }
