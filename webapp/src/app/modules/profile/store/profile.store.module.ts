import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/profile.reducer';
import * as fromEffects from './effects/profile.effects';
import * as fromServices from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('profile', fromReducers.ProfileReducer),
    EffectsModule.forFeature([fromEffects.ProfileEffects]),
  ],
  providers: [
    ...fromServices.services,
  ]
})
export class ProfileStoreModule { }
