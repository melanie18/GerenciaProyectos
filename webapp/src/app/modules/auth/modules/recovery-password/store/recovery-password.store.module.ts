import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/recovery-password.reducer';
import * as fromEffects from './effects/recovery-password.effects';
import * as fromServices from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('recovery-password', fromReducers.RecoveryPasswordReducer),
    EffectsModule.forFeature([fromEffects.RecoveryPasswordEffects]),
  ],
  providers: [...fromServices.services]
})
export class RecoveryPasswordStoreModule { }
