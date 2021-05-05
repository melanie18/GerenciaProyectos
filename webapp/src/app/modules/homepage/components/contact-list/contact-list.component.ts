import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import * as fromModels from '@app/models';
import * as fromServicesProfile from '@profile/services';
import * as fromServices from '@homepage/services';
import * as fromStoreCore from '@core/store';
import * as fromStore from '@homepage/store';

@Component({
  selector: 'meet-app-contact-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  providers: [fromServices.HomepageService]
})
export class ContactListComponent implements OnInit {
  public userLogged: any;
  
  public contacts$: Observable<Array<fromModels.User>>;
  public contacts: Array<fromModels.User> = [];

  constructor(
    private _store: Store<fromStore.HomepageState>,
    private _service: fromServices.HomepageService,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.userLogged = this._serviceProfile.getUserLogged();

    this.contacts$ = this._store.pipe(select(fromStore.getContacts));
    this.contacts$.subscribe((contacts) => {
      if (typeof contacts !== 'undefined') {
        this.contacts = contacts;
      }
    });
  }

  ngOnInit() {
    this.getContacs();
  }

  getContacs() {
    this._store.dispatch(new fromStore.GetContacts(this.userLogged._id));
  }
}
