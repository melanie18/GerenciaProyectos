import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromReducers from './reducers/homepage.reducer';
import * as fromEffects from './effects/homepage.effects';
import * as fromServices from '../services';

@NgModule({
  imports: [
    StoreModule.forFeature('homepage', fromReducers.HomepageReducer),
    EffectsModule.forFeature([fromEffects.HomepageEffects]),
  ],
  providers: [...fromServices.services]
})
export class HomepageStoreModule { }
