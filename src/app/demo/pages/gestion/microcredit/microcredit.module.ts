import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <--- OBLIGATOIRE pour [formGroup]
import { MicrocreditComponent } from './microcredit.component';

@NgModule({
  declarations: [MicrocreditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MicrocreditModule { }