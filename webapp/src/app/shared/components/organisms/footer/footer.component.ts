import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meet-app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @ViewChild('footer') footer?: ElementRef;
  @Output() loaded = new EventEmitter<number>();

  constructor() {
    
  }

  logoLoaded() {
    if (this.footer) {
      this.loaded.emit(this.footer.nativeElement.offsetHeight);
    }
  }
}
