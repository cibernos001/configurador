import { Routes, RouterModule } from '@angular/router';
import { GeneratequestionsFormComponent } from './components/generatequestions/generatequestionsform.component';

const routes: Routes = [
  {
    path:'',
    component: GeneratequestionsFormComponent
  },
];

export const GeneratequestionsRoutes = RouterModule.forChild(routes);
