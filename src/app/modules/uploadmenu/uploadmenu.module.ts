import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadmenuComponent } from './uploadmenu.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadFormmenuComponent } from './components/uploadmenu/uploadformmenu.component';
import { UploadmenuRoutes } from './uploadmenu.routing';

@NgModule({
  imports: [
    CommonModule,
    UploadmenuRoutes,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    UploadmenuComponent,
    UploadFormmenuComponent

  ]
})
export class UploadmenuModule { }
