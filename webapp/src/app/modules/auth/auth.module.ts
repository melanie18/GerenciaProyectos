import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import * as fromGuards from '@core/guards'
import * as fromComponents from './components';

const routes: Routes = [
  {
    path: '',
    component: fromComponents.AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: () => import('src/app/modules/auth/modules/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: () => import('src/app/modules/auth/modules/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'recovery-password',
        canActivate: [fromGuards.LoggedOutGuard],
        loadChildren: () => import('src/app/modules/auth/modules/recovery-password/recovery-password.module').then(m => m.RecoveryPasswordModule)
      },
    ]
  }
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: []
})

export class AuthModule { }

