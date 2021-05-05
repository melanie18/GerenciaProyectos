import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStoreLogin from '@login/store';
import * as fromServicesLogin from '@login/services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private token$: Observable<any>;
  private _token: string = '';
  private _user: any;

  /**
   * Método ejecutado con cada petición Http
   * @param req HttpRequest
   * @param next HttpHandler
   * @return Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent |
  HttpHeaderResponse |
  HttpProgressEvent |
  HttpResponse<any> |
  HttpUserEvent<any>> {
    // build the headers you want
    let headers: any = {
      'Content-Type': 'application/json',
    };

    if (!req.url.includes('login')) {
      headers['auth'] = this._token;
    }

    // clone the request
    const clone = req.clone({ setHeaders: headers });

    // pass it to the next interceptor
    return next.handle(clone);
  }

  constructor(
    private _storeLogin: Store<fromStoreLogin.LoginState>,
    private _serviceLogin: fromServicesLogin.LoginService,
  ) {
    this.token$ = this._storeLogin.pipe(select(fromStoreLogin.getToken));
    this.token$.subscribe((token: string) => {
      this._token = this._serviceLogin.getToken();
    });
  }
}
