import { Routes, RouterModule } from '@angular/router';

import * as fromGuards from './guards';
import * as fromComponents from './components';

export const routes: Routes = [
  {
    path: '',
    canActivate: [fromGuards.LoggedOutGuard],
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    canActivate: [fromGuards.LoggedInGuard],
    loadChildren: () => import('src/app/modules/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'profile',
    canActivate: [fromGuards.LoggedInGuard],
    loadChildren: () => import('src/app/modules/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: '**', component: fromComponents.ErrorComponent },
];

export const CoreRouting = RouterModule.forRoot(routes);
