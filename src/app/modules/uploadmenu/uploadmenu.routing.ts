import { Routes, RouterModule } from '@angular/router';
import { UploadFormmenuComponent } from './components/uploadmenu/uploadformmenu.component';

const routes: Routes = [
  {
    path:'',
    component: UploadFormmenuComponent
  },
];

export const UploadmenuRoutes = RouterModule.forChild(routes);
