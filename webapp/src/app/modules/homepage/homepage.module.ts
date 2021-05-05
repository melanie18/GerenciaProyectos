import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { SharedModule } from '@shared/shared.module';
import * as fromComponents from './components';
import * as fromServices from './services';

export const routes: Routes = [
  {
    path: '', 
    component: fromComponents.HomepageComponent, 
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [  
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    SharedModule,
    MomentModule,
    RouterModule.forChild(routes),
  ],
  providers: [...fromServices.services]
})

export class HomepageModule { }
