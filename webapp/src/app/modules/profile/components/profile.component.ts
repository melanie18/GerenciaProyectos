import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { environment } from '@environments/environment';
import * as fromServicesShared from '@shared/services';
import * as fromServices from '../services';
import * as fromStore from '../store';

@Component({
  selector: 'meet-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [fromServices.ProfileService],
})
export class ProfileComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  private user$: Observable<any>;
  public user: any;
  public profileFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ProfileState>
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));
    this.profileFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.user$ = this._store.pipe(select(fromStore.getUser));
    this.user$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this.user = user;
        this.profileFormGroup.patchValue({
          name: this.user.name,
          email: this.user.email,
        });
      }
    });
  }

  ngOnInit() { }


  getField(field: string) {
    return this.profileFormGroup.get(field);
  }

  onUpdateProfile() {
    if (this.profileFormGroup.valid) {
      this._store.dispatch(new fromStore.UserUpdating({ data: this.profileFormGroup.value, id: this.user.id }));
    }
  }
}
