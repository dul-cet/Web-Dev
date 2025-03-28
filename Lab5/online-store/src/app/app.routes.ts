import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';


export const routes: Routes = [
  { path: '', component: ListComponent }, // Default route
  { path: '**', redirectTo: '' }          // Redirect unknown routes
];