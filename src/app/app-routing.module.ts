import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'uploadmenu', loadChildren: () => import('./modules/uploadmenu/uploadmenu.module').then(m => m.UploadmenuModule) },
  { path: 'generatequestions', loadChildren: () => import('./modules/generatequestions/generatequestions.module').then(m => m.GeneratequestionsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
