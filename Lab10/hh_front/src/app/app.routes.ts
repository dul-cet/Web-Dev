import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

export const routes: Routes = [
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];
