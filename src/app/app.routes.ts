import { Routes } from '@angular/router';
import { PrimaryPageComponent } from './pages/primary-page/primary-page.component';
import { SecondaryPageComponent } from './pages/secondary-page/secondary-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'primary',
    component: PrimaryPageComponent,
  },
  {
    path: 'secondary',
    component: SecondaryPageComponent,
  },
  {
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
