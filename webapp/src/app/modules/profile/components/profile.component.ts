import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';

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
  public avatarpath: string = '';
  public genders: Array<string> = [];
  public uploaderAvatar: FileUploader;
  public uploaderOptions: FileUploaderOptions = {};
  public hasBaseDropZoneOver = false;
  public upFileProgressBarMode = 'determinate';
  public upFileProgressBarState = 'primary';
  public profileFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: fromServices.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _store: Store<fromStore.ProfileState>
  ) {
    this.isLoading$ = this._store.pipe(select(fromStore.getLoading));

    this.uploaderAvatar = new FileUploader({
      url: `${environment.apiUrl}user/avatar`,
      authToken: this._service.getToken(),
      authTokenHeader: 'Authorization',
      disableMultipart: false
    });
    this.uploaderAvatar.onAfterAddingFile = (file: any) => { file.withCredentials = false; };
    this.uploaderAvatar.response.subscribe((resp: any) => {
      const newUser = Object.assign({}, this.user);
      newUser.avatar_url = JSON.parse(resp).avatar_url;
      this.user = newUser;
      this._store.dispatch(new fromStore.UserUpdated(this.user));
      this.uploaderAvatar.clearQueue();
    });

    this.user$ = this._store.pipe(select(fromStore.getUser));
    this.user$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this.user = user;
        this.initializeForm();
      }
    });
  }

  ngOnInit() { }

  initializeForm() {
    this.profileFormGroup = this._formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      phone: [this.user.phone, Validators.required],
      avatar_url: [this.user.avatar_url, ''],
      password: ['', ''],
    });
  }

  fileDropped(event: any) {
    this.hasBaseDropZoneOver = event;
  }

  getField(field: string) {
    return this.profileFormGroup.get(field);
  }

  onUpdateProfile() {
    if (this.profileFormGroup.valid) {
      this._store.dispatch(new fromStore.UserUpdating({ data: this.profileFormGroup.value, id: this.user.id }));
    }
  }
}
