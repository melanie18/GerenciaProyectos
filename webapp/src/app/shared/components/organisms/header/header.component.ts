import { Component, OnInit, Inject, HostListener, ViewChild, ElementRef, Output, EventEmitter  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromModels from '@app/models';
import * as fromServicesShared from '@shared/services';
import * as fromStoreLogin from '@login/store';
import * as fromStoreProfile from '@profile/store';
import * as fromServicesProfile from '@profile/services';
import * as fromStoreCore from '@core/store';

@Component({
  selector: 'meet-app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class HeaderComponent implements OnInit {
  public windowScrolled: boolean = false;
  public userLogged$: Observable<any>; 
  public userLogged: any;

  @ViewChild('header') header?: ElementRef;
  @Output() loaded = new EventEmitter<number>();

  constructor (
    private _storeCore: Store<fromStoreCore.CoreState>,
    private _storeLogin: Store<fromStoreLogin.LoginState>,
    private _storeProfile: Store<fromStoreProfile.ProfileState>,
    private _serviceProfile: fromServicesProfile.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.userLogged = this._serviceProfile.getUserLogged();
    this.userLogged$ = this._storeLogin.pipe(select(fromStoreProfile.getUser));
    this.userLogged$.subscribe((user) => {
      if (typeof user !== 'undefined') {
        this.userLogged = user;
      }
    });
  }

  ngOnInit() {
    this.userLogged = this._serviceProfile.getUserLogged();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
      this.windowScrolled = true;
    } 
    else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  goTo(path: string) {
    this._storeCore.dispatch(new fromStoreCore.Go({
      path: [path]
    }));
  }

  logoLoaded() {
    if (this.header) {
      this.loaded.emit(this.header.nativeElement.offsetHeight);
    }
  }

  logout() {
    this.userLogged = null;
    this._storeProfile.dispatch(new fromStoreLogin.Logout());
  }
}
