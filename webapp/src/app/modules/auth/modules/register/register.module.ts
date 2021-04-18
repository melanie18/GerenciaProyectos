import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import * as fromComponents from './components';
import * as fromServices from './services';

const routes: Routes = [
  { path: '', component: fromComponents.RegisterComponent, pathMatch: 'full' }
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
  providers: [...fromServices.services]
})
export class RegisterModule { }
