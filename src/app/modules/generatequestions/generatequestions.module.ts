import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratequestionsComponent } from './generatequestions.component';
import { ReactiveFormsModule } from '@angular/forms';

import { GeneratequestionsFormComponent } from './components/generatequestions/generatequestionsform.component';
import { GeneratequestionsRoutes } from './generatequestions.routing';

@NgModule({
  imports: [
    CommonModule,
    GeneratequestionsRoutes,
    ReactiveFormsModule,
  ],
  declarations: [
    GeneratequestionsComponent,
    GeneratequestionsFormComponent
  ]
})
export class GeneratequestionsModule { }
