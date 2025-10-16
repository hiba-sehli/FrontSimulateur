import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Add this for ngForm

import { FormElementsRoutingModule } from './form-elements-routing.module';
import { VehicleFormComponent } from './basic-elements.component';

@NgModule({
  declarations: [
    VehicleFormComponent // <-- Add component to declarations
  ],
  imports: [
    CommonModule,
    FormsModule, // <-- Required for template-driven forms
    FormElementsRoutingModule
  ]
  // Don't put components in imports array
})
export class FormElementsModule {}