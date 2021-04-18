import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromModels from '@app/models';
import * as fromServicesProfile from '@profile/services';
import * as fromServices from '@homepage/services';
import * as fromStoreCore from '@core/store';
import * as fromStore from '@homepage/store';

@Component({
  selector: 'meet-app-users-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  providers: [fromServices.HomepageService]
})
export class UsersListComponent implements OnInit {
  public userLogged: any;

  public contacts$: Observable<Array<fromModels.User>>;
  public contacts: Array<any> = [];
  public users$: Observable<Array<fromModels.User>>;
  public users: Array<any> = [];

  constructor(
    private _store: Store<fromStore.HomepageState>,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.userLogged = this._serviceProfile.getUserLogged();

    this.contacts$ = this._store.pipe(select(fromStore.getContacts));
    this.contacts$.subscribe((contacts) => {
      if (typeof contacts !== 'undefined') {
        this.contacts = contacts;
      }
    });

    this.users$ = this._store.pipe(select(fromStore.getUsers));
    this.users$.subscribe((users) => {
      if (typeof users !== 'undefined') {
        this.users = users.filter((user: any) => {
          const userAsContact = this.contacts.filter(contact => {
            return contact._id === user._id;
          });
          if (user._id !== this.userLogged._id && userAsContact.length === 0) {
            return user;
          }
        });
      }
    });
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._store.dispatch(new fromStore.GetUsers());
  }

  addContact(contact: fromModels.User) {
    this._store.dispatch(new fromStore.AddContact({
      user: this.userLogged._id,
      contact: contact._id
    }));
  }
}
