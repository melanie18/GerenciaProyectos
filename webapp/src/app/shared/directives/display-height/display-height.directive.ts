import { Directive, ElementRef, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[displayHeight]'
})
export class DisplayHeightDirective implements OnInit, OnChanges {
  private element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = elRef.nativeElement;
  }

  ngOnChanges() {
    this.element.style.height = `${window.innerHeight}px`;
    this.element.style.maxHeight = `${window.innerHeight}px`;
  }

  ngOnInit() {
    this.element.style.height = `${window.innerHeight}px`;
    this.element.style.maxHeight = `${window.innerHeight}px`;
  }

}
