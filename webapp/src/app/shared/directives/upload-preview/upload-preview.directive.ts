import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({ selector: 'img[imgPreview]' })

export class UploadImagePreview implements OnChanges {

    @Input() image: any;

    constructor(private el: ElementRef) { }

    ngOnChanges(changes: SimpleChanges) {

        const reader = new FileReader();
        const el = this.el;

        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };

        if (this.image) {
            return reader.readAsDataURL(this.image);
        }

    }
}