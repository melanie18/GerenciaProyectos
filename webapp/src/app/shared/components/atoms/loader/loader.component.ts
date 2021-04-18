import { Component, Input } from '@angular/core';

@Component({
  selector: 'meet-app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() show: boolean = false;
  @Input() overlay: boolean = false;

  constructor() { }
}
