import { NgModule } from '@angular/core';
import { DorpdownDirectie } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    DorpdownDirectie
  ],
  exports:[
    CommonModule,
    DorpdownDirectie
  ]
})
export class SharedModule{}
