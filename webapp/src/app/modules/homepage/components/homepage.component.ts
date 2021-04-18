import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromModels from '@app/models';
import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/homepage.reducer';
import * as fromActions from '../store/actions/homepage.actions';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';
import * as fromServicesProfile from '@profile/services';
import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'meet-app-homepage',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [fromServices.HomepageService, fromServicesProfile.ProfileService]
})
export class HomepageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public userLogged: any;

  constructor(
    private _store: Store<fromStore.HomepageState>,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));
    this.userLogged = this._serviceProfile.getUserLogged();
  }

  ngOnInit() { }

  goTo(path: string) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }
}
