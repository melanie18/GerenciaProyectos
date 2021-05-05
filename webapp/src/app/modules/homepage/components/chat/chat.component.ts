import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import * as fromServicesShared from '@shared/services';
import * as fromServicesProfile from '@profile/services';
import * as fromServices from '@homepage/services';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'meet-app-chat',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [fromServices.HomepageService]
})
export class ChatComponent implements OnInit, OnDestroy {
  public userLogged: any;
  public isCallStarted$: Observable<boolean>;
  private peerId?: string;
  public modalForm: FormGroup;
  public inCall: boolean = false;

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  constructor(
    private _service: fromServices.HomepageService,
    private _serviceProfile: fromServicesProfile.ProfileService,
    private _utils: fromServicesShared.UtilsService,
    private _formBuilder: FormBuilder,
  ) {
    this.userLogged = this._serviceProfile.getUserLogged();
    this.isCallStarted$ = this._service.isCallStarted$;
    this.peerId = this._service.initPeer();

    this.modalForm = this._formBuilder.group({
      id: ['', ''],
    });
  }

  ngOnInit(): void {
    this._service.localStream$
      .pipe(filter((res: any) => !!res))
      .subscribe((stream: any) => this.localVideo.nativeElement.srcObject = stream)
    this._service.remoteStream$
      .pipe(filter((res: any) => !!res))
      .subscribe((stream: any) => this.remoteVideo.nativeElement.srcObject = stream)
  }

  ngOnDestroy(): void {
    this._service.destroyPeer();
  }

  createCall() {
    this._utils.showDialog({
      width: 500,
      data: {
        title: 'Room created',
        message: this.peerId,
      },
      onClose: () => {
        this._service.enableCallAnswer();
        this.inCall = true;
      }
    });
  }

  joinCall() {
    this._utils.showDialog({
      width: 500,
      data: {
        title: 'Type the id of the room',
        formElement: this.modalForm,
        model: this.modalForm.value,
        confirm: true,
        form: [
          { name: 'id', type: 'text', placeholder: 'Room Id' },
        ],
        onChange: (model: any) => {
          this.modalForm.patchValue(model);
        },
      },
      onClose: (result: any) => {
        if (result.action) {
          this._service.establishMediaCall(this.modalForm.value.id);
          this.inCall = true;
        }
      }
    });
  }

  endCall() {
    this._service.closeMediaCall();
    this.inCall = false;
  }
}
