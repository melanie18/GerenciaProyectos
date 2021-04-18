import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DialogComponent } from '../components/molecules/dialog/dialog.component';

@Injectable()
export class UtilsService {
  private _url: string;

  constructor(
    private _http: HttpClient,
    private dialog: MatDialog,
  ) {
    this._url = environment.apiUrl;
  }

  handleErrorHttp(response: HttpErrorResponse) {
    if (response.error instanceof ErrorEvent || response.error !== null) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', response.error.message);
      return throwError(response.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${response.status}, ` +
        `body was: ${response.error}`);
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    }
  }

  showDialog(settings: any): void {
    const dialogRef = this.dialog.open(DialogComponent, settings);
    if (typeof settings.onClose !== 'undefined') {
      dialogRef.afterClosed().subscribe(result => {
        settings.onClose(result);
      });
    }
  }

  getItemLocalStorage(key: string) {
    const storageVal: any = localStorage.getItem(key);
    try {
      return JSON.parse(storageVal);
    } catch (error) {
      return storageVal;
    }
  }

  getCountries() {
    return this._http.get(`${this._url}countries`)
      .pipe(
        catchError(this.handleErrorHttp)
      );
  }

  getStatesOfCountry(country: string) {
    return this._http.get(`${this._url}states-by/${country}`)
      .pipe(
        catchError(this.handleErrorHttp)
      );
  }

  renderErrors(errors: any) {
    let template = `<p class="mt-10"><strong>Errores:</strong>`;
    template += `<ul class="mt-10">`;
    errors.forEach((error: any) => {
      template += `<li><p>${error[0]}</p></li>`;
    });
    template += `</ul>`;
    return template;
  }

  validateConfirmPassword(form: FormGroup) {
    const password = form.controls.password.value;
    const confirmPassword = form.controls.confirmPassword.value;

    if (confirmPassword.length <= 0) {
      return null;
    }

    if (confirmPassword !== password) {
      form.controls.confirmPassword.setErrors({
        doesMatchPassword: true
      });

      return {
        doesMatchPassword: true
      };
    }

    form.controls.confirmPassword.clearValidators();
    return null;
  }

  getFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      const controlErrors: any = form.get(key)?.errors;
      console.log(key);
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        });
      }
    });
  }
}
