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
import * as fromStoreProfile from '@profile/store';
import { User } from '@app/models';

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
      // 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiNzNmNjYyODk3YzRkYmUwZWNkZDhhMjMzZWM3MDIwMGMyODJiOGJiY2ViNzQwY2JiODI1OTEzMzAzMjdiNGI3MzkzOGEzZmU4M2M4ODg4MTciLCJpYXQiOjE1ODA2MTAwOTgsIm5iZiI6MTU4MDYxMDA5OCwiZXhwIjoxNjEyMjMyNDk4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.oNeRqy-DrvCfifw65OZkktC5lHM4Lltn5Xh-pi5ZNJgdaErzhbi7FrjKC9RjLtaRZcpVMQqSZr2g3FoAGcvNRJXbIIWoHBI7jF5njdXMoc9DRfXvEbGkiF8rrXzh29BydYKnb8k2zJSbSXcEDmrjGcrApVX_0Vptb81ZP3BvbqfHdxJyo1IwklakM9BH5Xa84YOS_c7bpL-dhyCgxadiLGdzDkELEvRsgDb5UVEdV11EOg9zAIf8Rp3s4ISDNAE2ydqKEo-b13DntWaKrAEGnEZxh0UdEohQC1606gZa5uM3IJN0HYLPJhGLQJfYGW9oWcYIMQT4YORIYg4BWg36QeXUUZCEGQPzWslN3VRKVsD5h449txcCMIolTccIhK9A8tKAMOwCijVKOw5IZcCvUpPlRNZLganSVa-Ti4cVzQrfzxWH9ShdTnHsJc0YI4Lt7ykHkniLv6lUdXnfs0duDcmcggfcfbz_cLTdnSHL7TOAJ4njg281X88l_Be0Ykad8IXbRZ1Eark6cmSc5egkjwxOdT2b1hwfd4gt0vR3PEv7ugf5VXq-i42nLEKKF4SFIA5vIJv2ETovgWtC9gMpEyWHvEGFNcSysr1t479XQcCwsRB1KapN7eSnPu09kx1FdiYQldu4e3RomL0RKFIPUi3BhFFNBydas3Fw-OKHrJg`,
    };

    if (!req.url.includes('login')) {
      headers['Authorization'] = this._token;
    }

    // clone the request
    const clone = req.clone({ setHeaders: headers });

    // pass it to the next interceptor
    return next.handle(clone);
  }

  constructor(
    private _storeProfile: Store<fromStoreProfile.ProfileState>,
  ) {
    this.token$ = this._storeProfile.pipe(select(fromStoreProfile.getToken));
    this.token$.subscribe((token: string) => {
      this._token = token;
    });
  }
}
