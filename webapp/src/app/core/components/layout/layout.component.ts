import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { filter } from 'rxjs/operators';
import * as ramda from 'ramda';

import * as fromServicesShared from '@shared/services';

@Component({
  selector: 'meet-app-layout',
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./layout.component.scss'],
  templateUrl: './layout.component.html',
  providers: [fromServicesShared.UtilsService]
})
export class LayoutComponent {
  public sizeMain: number = 0;
  public headerLoaded: boolean = false;
  public footerLoaded: boolean = false;
  public isAuth: boolean = false;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
    private _title: Title,
  ) {
    // Add custom icons
    // this.matIconRegistry.addSvgIcon(
    //   'meet-app-login',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/icons/icon-login.svg')
    // );

    this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const path = event.urlAfterRedirects;
      this._title.setTitle(`${this.formatTitlePage(path)} - Meet App`);
      
      switch (path) {
        case '/login':
        case '/register':
        case '/recovery-password':
          this.isAuth = true;
          break;

        default:
          this.isAuth = false;
      }
    });
  }

  formatTitlePage(path: any) {
    path = ramda.last(path.split('/'));
    path = path.replace(/[_-]/g, ' ');
    path = path.split(' ');
    path.forEach((word: any, index: number) => {
      path[index] = word.charAt(0).toUpperCase() + word.slice(1)
    });
    path = path.join(' ');

    return path;
  }
}
