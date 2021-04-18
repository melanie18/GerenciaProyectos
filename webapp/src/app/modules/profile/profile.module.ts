import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MomentModule } from 'ngx-moment';
import { FileUploadModule } from 'ng2-file-upload';

import { SharedModule } from '@shared/shared.module';
import * as fromComponents from './components';
import * as fromServices from './services';

export const routes = [
  { path: '', component: fromComponents.ProfileComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    FileUploadModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [fromComponents.ProfileComponent],
  providers: [...fromServices.services],
})
export class ProfileModule { }
