(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"30D7":function(t,e,n){"use strict";var i=n("xQMp");n.d(e,"a",function(){return i.b}),n("t6B6");var r=n("+vlm");n.d(e,"b",function(){return r.b}),n.d(e,"c",function(){return r.c}),n("xAfh"),n("KK1l")},Pc2U:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n("mrSG"),n("gdYL");var i=n("uTKl"),r=function(){function t(){}var e;return e=t,t.forRoot=function(t){return{ngModule:e,providers:[{provide:i.a,useValue:t}]}},t}()},gdYL:function(t,e,n){"use strict";var i=n("mrSG"),r=n("CcnG"),s=(n("gIcY"),n("uTKl")),o=function(){function t(t){this.htmlInputElement=t}return t.prototype.setCursorAt=function(t){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(t,t);else if(this.htmlInputElement.createTextRange){var e=this.htmlInputElement.createTextRange();e.collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select()}},t.prototype.updateValueAndCursor=function(t,e,n){this.rawValue=t,this.setCursorAt(n-=e-t.length)},Object.defineProperty(t.prototype,"canInputMoreNumbers",{get:function(){var t=!(this.rawValue.length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),e=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd,i=!(e==n||!this.htmlInputElement.value.substring(e,n).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)),r="0"==this.htmlInputElement.value.substring(0,1);return t||i||r},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputSelection",{get:function(){var t=0,e=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)t=this.htmlInputElement.selectionStart,e=this.htmlInputElement.selectionEnd;else{var n=document.selection.createRange();if(n&&n.parentElement()==this.htmlInputElement){var i=this.htmlInputElement.value.length,r=this.htmlInputElement.value.replace(/\r\n/g,"\n"),s=this.htmlInputElement.createTextRange();s.moveToBookmark(n.getBookmark());var o=this.htmlInputElement.createTextRange();o.collapse(!1),s.compareEndPoints("StartToEnd",o)>-1?t=e=i:(t=-s.moveStart("character",-i),t+=r.slice(0,t).split("\n").length-1,s.compareEndPoints("EndToEnd",o)>-1?e=i:(e=-s.moveEnd("character",-i),e+=r.slice(0,e).split("\n").length-1))}}return{selectionStart:t,selectionEnd:e}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rawValue",{get:function(){return this.htmlInputElement&&this.htmlInputElement.value},set:function(t){this._storedRawValue=t,this.htmlInputElement&&(this.htmlInputElement.value=t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storedRawValue",{get:function(){return this._storedRawValue},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t,e){this.htmlInputElement=t,this.options=e,this.PER_AR_NUMBER=new Map,this.inputManager=new o(t),this.initialize()}return t.prototype.initialize=function(){this.PER_AR_NUMBER.set("\u06f0","0"),this.PER_AR_NUMBER.set("\u06f1","1"),this.PER_AR_NUMBER.set("\u06f2","2"),this.PER_AR_NUMBER.set("\u06f3","3"),this.PER_AR_NUMBER.set("\u06f4","4"),this.PER_AR_NUMBER.set("\u06f5","5"),this.PER_AR_NUMBER.set("\u06f6","6"),this.PER_AR_NUMBER.set("\u06f7","7"),this.PER_AR_NUMBER.set("\u06f8","8"),this.PER_AR_NUMBER.set("\u06f9","9"),this.PER_AR_NUMBER.set("\u0660","0"),this.PER_AR_NUMBER.set("\u0661","1"),this.PER_AR_NUMBER.set("\u0662","2"),this.PER_AR_NUMBER.set("\u0663","3"),this.PER_AR_NUMBER.set("\u0664","4"),this.PER_AR_NUMBER.set("\u0665","5"),this.PER_AR_NUMBER.set("\u0666","6"),this.PER_AR_NUMBER.set("\u0667","7"),this.PER_AR_NUMBER.set("\u0668","8"),this.PER_AR_NUMBER.set("\u0669","9")},t.prototype.addNumber=function(t){this.rawValue||(this.rawValue=this.applyMask(!1,"0"));var e=String.fromCharCode(t),n=this.inputSelection.selectionStart,i=this.inputSelection.selectionEnd;this.rawValue=this.rawValue.substring(0,n)+e+this.rawValue.substring(i,this.rawValue.length),this.updateFieldValue(n+1)},t.prototype.applyMask=function(t,e){var n=this.options,i=n.allowNegative,r=n.decimal,s=n.precision,o=n.prefix,a=n.suffix,u=n.thousands,l=(e=t?new Number(e).toFixed(s):e).replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g,"");if(!l)return"";var h=l.slice(0,l.length-s).replace(/^\u0660*/g,"").replace(/^\u06F0*/g,"").replace(/^0*/g,"").replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,u);u&&h.startsWith(u)&&(h=h.substring(1)),""==h&&(h="0");var p=h,c=l.slice(l.length-s);s>0&&(p+=r+c);var d=0==parseInt(h)&&(0==parseInt(c)||""==c);return(e.indexOf("-")>-1&&i&&!d?"-":"")+o+p+a},t.prototype.clearMask=function(t){if(this.isNullable()&&""===t)return null;var e=(t||"0").replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(e=e.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(e=e.replace(this.options.decimal,".")),this.PER_AR_NUMBER.forEach(function(t,n){var i=new RegExp(n,"g");e=e.replace(i,t)}),parseFloat(e)},t.prototype.changeToNegative=function(){this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value&&(this.rawValue="-"+this.rawValue)},t.prototype.changeToPositive=function(){this.rawValue=this.rawValue.replace("-","")},t.prototype.removeNumber=function(t){if(this.isNullable()&&0==this.value)this.rawValue=null;else{var e=this.inputSelection.selectionEnd,n=this.inputSelection.selectionStart;n>this.rawValue.length-this.options.suffix.length&&(e=this.rawValue.length-this.options.suffix.length,n=this.rawValue.length-this.options.suffix.length);var i=this.rawValue.substr(n-1,1).match(/\d/)?0:-1;(8!=t||n-1!=0||this.rawValue.substr(n,1).match(/\d/))&&(46!=t&&63272!=t||0!==n||this.rawValue.substr(n+1,1).match(/\d/))||(i=1),e=46==t||63272==t?e+1:e,this.rawValue=this.rawValue.substring(0,n=8==t?n-1:n)+this.rawValue.substring(e,this.rawValue.length),this.updateFieldValue(n+i)}},t.prototype.updateFieldValue=function(t){var e=this.applyMask(!1,this.rawValue||"");this.inputManager.updateValueAndCursor(e,this.rawValue.length,t=void 0==t?this.rawValue.length:t)},t.prototype.updateOptions=function(t){var e=this.value;this.options=t,this.value=e},t.prototype.prefixLength=function(){return this.options.prefix.length},t.prototype.isNullable=function(){return this.options.nullable},Object.defineProperty(t.prototype,"canInputMoreNumbers",{get:function(){return this.inputManager.canInputMoreNumbers},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputSelection",{get:function(){return this.inputManager.inputSelection},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rawValue",{get:function(){return this.inputManager.rawValue},set:function(t){this.inputManager.rawValue=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storedRawValue",{get:function(){return this.inputManager.storedRawValue},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){return this.clearMask(this.rawValue)},set:function(t){this.rawValue=this.applyMask(!0,""+t)},enumerable:!0,configurable:!0}),t}(),u=function(){function t(t,e){this.inputService=new a(t,e)}return t.prototype.handleCut=function(t){var e=this;setTimeout(function(){e.inputService.updateFieldValue(),e.setValue(e.inputService.value),e.onModelChange(e.inputService.value)},0)},t.prototype.handleInput=function(t){var e=this.inputService.rawValue.charCodeAt(this.inputService.rawValue.length-1),n=this.inputService.rawValue.length,i=this.inputService.inputSelection.selectionEnd,r=this.inputService.storedRawValue.length;if(this.inputService.rawValue=this.inputService.storedRawValue,n==i&&1==Math.abs(n-r)){if(n<r&&this.inputService.removeNumber(8),n>r)switch(e){case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:if(!this.inputService.canInputMoreNumbers)return;this.inputService.addNumber(e)}this.setCursorPosition(t),this.onModelChange(this.inputService.value)}else this.setCursorPosition(t)},t.prototype.handleKeydown=function(t){var e=t.which||t.charCode||t.keyCode;if(8==e||46==e||63272==e){t.preventDefault();var n=Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart);0==n&&(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value)),n>=this.inputService.rawValue.length-this.inputService.prefixLength()&&this.clearValue()}},t.prototype.clearValue=function(){this.setValue(this.inputService.isNullable()?null:0),this.onModelChange(this.inputService.value)},t.prototype.handleKeypress=function(t){var e=t.which||t.charCode||t.keyCode;if(97!==e||!t.ctrlKey){switch(e){case void 0:case 9:case 13:case 37:case 39:return;case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)==this.inputService.rawValue.length&&this.setValue(0),this.inputService.addNumber(e))}t.preventDefault(),this.onModelChange(this.inputService.value)}},t.prototype.handlePaste=function(t){var e=this;setTimeout(function(){e.inputService.updateFieldValue(),e.setValue(e.inputService.value),e.onModelChange(e.inputService.value)},1)},t.prototype.updateOptions=function(t){this.inputService.updateOptions(t)},t.prototype.getOnModelChange=function(){return this.onModelChange},t.prototype.setOnModelChange=function(t){this.onModelChange=t},t.prototype.getOnModelTouched=function(){return this.onModelTouched},t.prototype.setOnModelTouched=function(t){this.onModelTouched=t},t.prototype.setValue=function(t){this.inputService.value=t},t.prototype.setCursorPosition=function(t){setTimeout(function(){t.target.setSelectionRange(t.target.value.length,t.target.value.length)},0)},t}();n.d(e,"a",function(){return l}),Object(r.forwardRef)(function(){return l});var l=function(){function t(t,e,n){this.currencyMaskConfig=t,this.elementRef=e,this.keyValueDiffers=n,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,allowZero:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:",",nullable:!1},t&&(this.optionsTemplate=t),this.keyValueDiffer=n.find({}).create()}return t.prototype.ngAfterViewInit=function(){this.elementRef.nativeElement.style.textAlign=this.options?this.options.align:this.optionsTemplate.align},t.prototype.ngDoCheck=function(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))},t.prototype.ngOnInit=function(){this.inputHandler=new u(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))},t.prototype.handleBlur=function(t){this.inputHandler.getOnModelTouched().apply(t)},t.prototype.handleCut=function(t){this.isChromeAndroid()||this.inputHandler.handleCut(t)},t.prototype.handleInput=function(t){this.isChromeAndroid()&&this.inputHandler.handleInput(t)},t.prototype.handleKeydown=function(t){this.isChromeAndroid()||this.inputHandler.handleKeydown(t)},t.prototype.handleKeypress=function(t){this.isChromeAndroid()||this.inputHandler.handleKeypress(t)},t.prototype.handlePaste=function(t){this.isChromeAndroid()||this.inputHandler.handlePaste(t)},t.prototype.isChromeAndroid=function(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)},t.prototype.registerOnChange=function(t){this.inputHandler.setOnModelChange(t)},t.prototype.registerOnTouched=function(t){this.inputHandler.setOnModelTouched(t)},t.prototype.setDisabledState=function(t){this.elementRef.nativeElement.disabled=t},t.prototype.writeValue=function(t){this.inputHandler.setValue(t)},Object(i.__decorate)([Object(i.__param)(0,Object(r.Optional)()),Object(i.__param)(0,Object(r.Inject)(s.a))],t)}()},uTKl:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var i=new(n("CcnG").InjectionToken)("currency.mask.config")}}]);