import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/login.reducer';
import * as fromActions from '../store/actions/login.actions';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';

@Component({
  selector: 'meet-app-login',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [fromServices.LoginService]
})
export class LoginComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public loginForm: FormGroup;
  public hide: boolean = false;

  constructor(
    private _store: Store<fromStore.LoginState>,
    private _formBuilder: FormBuilder,
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));

    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }

  getField(field: string) {
    return this.loginForm.get(field);
  }

  goTo(path: string) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }

  onLogin() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._store.dispatch(new fromActions.Login(this.loginForm.value));
    }
  }
}
