import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromServicesShared from '@shared/services';
import * as fromStore from '../store';
import * as fromReducer from '../store/reducers/register.reducer';
import * as fromActions from '../store/actions/register.actions';
import * as fromStoreCore from '@core/store';
import * as fromServices from '../services';

@Component({
  selector: 'meet-app-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [fromServices.RegisterService]
})
export class RegisterComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public registerFormGroup: FormGroup;
  public hide: boolean = false;
  public hideConfirm: boolean = false

  constructor(
    private _store: Store<fromStore.RegisterState>,
    private _formBuilder: FormBuilder,
    private _utils: fromServicesShared.UtilsService,
  ) {
    this.isLoading$ = this._store.pipe(select(fromReducer.getLoading));
    this.registerFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }, {
      validator: this._utils.validateConfirmPassword.bind(this)
    });
  }

  ngOnInit() { }

  getField(field: string) {
    return this.registerFormGroup.get(field);
  }

  goTo(path: string) {
    this._store.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }

  onRegister() {
    if (this.registerFormGroup.dirty && this.registerFormGroup.valid) {
      this._store.dispatch(new fromActions.Register(this.registerFormGroup.value));
    }
  }
}
