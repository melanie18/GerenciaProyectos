import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromModels from '@app/models';
import * as fromServicesProfile from '@profile/services';
import * as fromServices from '@homepage/services';
import * as fromStoreCore from '@core/store';
import * as fromStore from '@homepage/store';

@Component({
  selector: 'meet-app-chat',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [fromServices.HomepageService]
})
export class ChatComponent implements OnInit {
  public userLogged: any;

  constructor(
    private _store: Store<fromStore.HomepageState>,
    private _serviceProfile: fromServicesProfile.ProfileService,
  ) {
    this.userLogged = this._serviceProfile.getUserLogged();
  }

  ngOnInit() { }
}
