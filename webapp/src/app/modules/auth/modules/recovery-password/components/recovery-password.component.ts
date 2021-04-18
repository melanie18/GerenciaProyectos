import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromServicesShared from '@shared/services';
import * as fromServices from '../services';
import * as fromStoreCore from '@core/store';
import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/recovery-password.reducer';
import * as fromActions from '../store/actions/recovery-password.actions';

@Component({
  selector: 'meet-app-recovery-password',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
  providers: [fromServices.RecoveryPasswordService]
})
export class RecoveryPasswordComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public recoveryPasswordForm: FormGroup;
  public changePasswordView: boolean = false;
  public changePasswordForm: FormGroup;
  public hide: boolean = false;
  public hideConfirm: boolean = false;

  constructor(
    private _store: Store<fromStore.RecoveryPasswordState>,
    private _formBuilder: FormBuilder,
    private _utils: fromServicesShared.UtilsService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));

    this.recoveryPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    });

    this.changePasswordForm = this._formBuilder.group({
      id: ['', ''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this._utils.validateConfirmPassword.bind(this)
    });
  }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      const userId = params['user'];
      if (userId) {
        this.changePasswordForm.patchValue({
          id: userId
        });
        this.changePasswordView = true;
      }
    });
  }

  getFieldEmail() {
    return this.recoveryPasswordForm.get('email');
  }

  getField(field: string) {
    return this.changePasswordForm.get(field);
  }

  goTo(path: string) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }

  onRecoveryPassword() {
    if (this.recoveryPasswordForm.dirty && this.recoveryPasswordForm.valid) {
      this._store.dispatch(new fromActions.RecoveryPassword(this.recoveryPasswordForm.value.email));
    }
  }

  onChangePassword() {
    if (this.changePasswordForm.dirty && this.changePasswordForm.valid) {
      this._store.dispatch(new fromActions.ChangePassword(this.changePasswordForm.value));
    }
  }
}
