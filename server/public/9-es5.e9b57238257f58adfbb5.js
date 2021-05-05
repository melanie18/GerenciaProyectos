!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,i){if(!t)return;if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,i)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{pIwm:function(e,i,a){"use strict";a.r(i),a.d(i,"routes",function(){return J}),a.d(i,"HomepageModule",function(){return K});var o,r=a("ofXK"),s=a("3Pt+"),l=a("tyNb"),u=a("QUrN"),b=a("fXoL"),d=((o=function t(){c(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275mod=b.Mb({type:o}),o.\u0275inj=b.Lb({}),o),f=a("PCNd"),p=a("l7P3"),m=a("dhLW"),h=a("Ql7B"),g=a("PcjG"),v=a("1KGp"),_=a("Ep5b"),y=a("dOps"),U=a("MutI"),T=a("FKr1");function C(t,e){if(1&t&&(b.Ub(0,"mat-list-item"),b.Pb(1,"img",4),b.Ub(2,"h3",5),b.Dc(3),b.Tb(),b.Ub(4,"p",5),b.Ub(5,"span"),b.Dc(6),b.hc(7,"amTimeAgo"),b.hc(8,"amFromUnix"),b.Tb(),b.Tb(),b.Tb()),2&t){var i=e.$implicit;b.Db(1),b.mc("alt",i.name),b.Db(2),b.Fc(" ",i.name," "),b.Db(3),b.Fc("Last connection: ",b.ic(7,3,b.ic(8,5,i.last_login))," ")}}function O(t,e){if(1&t&&(b.Ub(0,"mat-list"),b.Bc(1,C,9,7,"mat-list-item",3),b.Tb()),2&t){var i=b.gc();b.Db(1),b.lc("ngForOf",i.contacts)}}function w(t,e){1&t&&(b.Ub(0,"p",6),b.Dc(1,"You don't have contacts yet."),b.Tb())}var k,D=((k=function(){function t(e,i,n){var a=this;c(this,t),this._store=e,this._service=i,this._serviceProfile=n,this.contacts=[],this.userLogged=this._serviceProfile.getUserLogged(),this.contacts$=this._store.pipe(Object(p.t)(y.e)),this.contacts$.subscribe(function(t){void 0!==t&&(a.contacts=t)})}return n(t,[{key:"ngOnInit",value:function(){this.getContacs()}},{key:"getContacs",value:function(){this._store.dispatch(new y.b(this.userLogged._id))}}]),t}()).\u0275fac=function(t){return new(t||k)(b.Ob(p.i),b.Ob(h.a),b.Ob(v.a))},k.\u0275cmp=b.Ib({type:k,selectors:[["meet-app-contact-list"]],features:[b.Cb([h.a])],decls:6,vars:2,consts:[[1,"contact-list"],[4,"ngIf","ngIfElse"],["noContacts",""],[4,"ngFor","ngForOf"],["matListAvatar","","src","../../../../../assets/images/avatar.png",3,"alt"],["matLine",""],[1,"mt-20"]],template:function(t,e){if(1&t&&(b.Ub(0,"section",0),b.Ub(1,"h3"),b.Dc(2,"Contacts"),b.Tb(),b.Bc(3,O,2,1,"mat-list",1),b.Bc(4,w,2,0,"ng-template",null,2,b.Cc),b.Tb()),2&t){var i=b.rc(5);b.Db(3),b.lc("ngIf",e.contacts.length)("ngIfElse",i)}},directives:[r.k,U.a,r.j,U.c,U.b,T.k],pipes:[u.c,u.a],styles:[".contact-list{padding:20px;border-top-right-radius:8px;border-top-left-radius:8px;background-color:#f1f1f1}.contact-list mat-list{margin-top:20px}.contact-list mat-list mat-list-item{cursor:pointer}.contact-list mat-list mat-list-item .mat-list-item-content{padding-right:0!important;padding-left:0!important}"],encapsulation:2}),k),I=a("bTqV"),j=a("NFeN");function L(t,e){if(1&t){var i=b.Vb();b.Ub(0,"mat-list-item"),b.Pb(1,"img",4),b.Ub(2,"h3",5),b.Dc(3),b.Tb(),b.Ub(4,"p",5),b.Ub(5,"span"),b.Dc(6),b.Tb(),b.Tb(),b.Ub(7,"button",6),b.cc("click",function(){b.uc(i);var t=e.$implicit;return b.gc(2).addContact(t)}),b.Ub(8,"mat-icon"),b.Dc(9,"add_circle"),b.Tb(),b.Tb(),b.Tb()}if(2&t){var n=e.$implicit;b.Db(1),b.mc("alt",n.name),b.Db(2),b.Fc(" ",n.name," "),b.Db(3),b.Fc("Email: ",n.email," ")}}function P(t,e){if(1&t&&(b.Ub(0,"mat-list"),b.Bc(1,L,10,3,"mat-list-item",3),b.Tb()),2&t){var i=b.gc();b.Db(1),b.lc("ngForOf",i.users)}}function x(t,e){1&t&&(b.Ub(0,"p",7),b.Dc(1,"You don't have users available to add."),b.Tb())}var F,$=((F=function(){function t(e,i){var n=this;c(this,t),this._store=e,this._serviceProfile=i,this.contacts=[],this.users=[],this.userLogged=this._serviceProfile.getUserLogged(),this.contacts$=this._store.pipe(Object(p.t)(y.e)),this.contacts$.subscribe(function(t){void 0!==t&&(n.contacts=t)}),this.users$=this._store.pipe(Object(p.t)(y.f)),this.users$.subscribe(function(t){void 0!==t&&(n.users=t.filter(function(t){var e=n.contacts.filter(function(e){return e._id===t._id});if(t._id!==n.userLogged._id&&0===e.length)return t}))})}return n(t,[{key:"ngOnInit",value:function(){this.getUsers()}},{key:"getUsers",value:function(){this._store.dispatch(new y.c)}},{key:"addContact",value:function(t){this._store.dispatch(new y.a({user:this.userLogged._id,contact:t._id}))}}]),t}()).\u0275fac=function(t){return new(t||F)(b.Ob(p.i),b.Ob(v.a))},F.\u0275cmp=b.Ib({type:F,selectors:[["meet-app-users-list"]],features:[b.Cb([h.a])],decls:6,vars:2,consts:[[1,"users-list"],[4,"ngIf","ngIfElse"],["noUsers",""],[4,"ngFor","ngForOf"],["matListAvatar","","src","../../../../../assets/images/avatar.png",3,"alt"],["matLine",""],["mat-icon-button","",3,"click"],[1,"mt-20"]],template:function(t,e){if(1&t&&(b.Ub(0,"section",0),b.Ub(1,"h3"),b.Dc(2,"Users"),b.Tb(),b.Bc(3,P,2,1,"mat-list",1),b.Bc(4,x,2,0,"ng-template",null,2,b.Cc),b.Tb()),2&t){var i=b.rc(5);b.Db(3),b.lc("ngIf",e.users.length)("ngIfElse",i)}},directives:[r.k,U.a,r.j,U.c,U.b,T.k,I.a,j.a],styles:[".users-list{padding:20px;border-top:3px solid #ccc;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:#f1f1f1}.users-list mat-list{margin-top:20px}.users-list mat-list .mat-list-item-content{padding-right:0!important;padding-left:0!important}"],encapsulation:2}),F),V=a("pLZG"),S=a("ZF+8"),A=["localVideo"],B=["remoteVideo"];function E(t,e){if(1&t){var i=b.Vb();b.Sb(0),b.Ub(1,"header",2),b.Ub(2,"button",3),b.cc("click",function(){return b.uc(i),b.gc().createCall()}),b.Dc(3,"Create Meet"),b.Tb(),b.Ub(4,"button",3),b.cc("click",function(){return b.uc(i),b.gc().joinCall()}),b.Dc(5,"Join Meet"),b.Tb(),b.Tb(),b.Rb()}}function M(t,e){if(1&t){var i=b.Vb();b.Sb(0),b.Ub(1,"div",4),b.Ub(2,"div",5),b.Pb(3,"video",6,7),b.Tb(),b.Ub(5,"div",8),b.Pb(6,"video",9,10),b.Tb(),b.Tb(),b.Ub(8,"div",11),b.Ub(9,"button",12),b.cc("click",function(){return b.uc(i),b.gc().endCall()}),b.hc(10,"async"),b.Ub(11,"mat-icon"),b.Dc(12,"call_end"),b.Tb(),b.Tb(),b.Tb(),b.Rb()}if(2&t){var n=b.gc();b.Db(6),b.lc("muted",!0),b.Db(3),b.lc("disabled",!b.ic(10,2,n.isCallStarted$))}}var G,N,R,q=((G=function(){function t(e,i,n,a){c(this,t),this._service=e,this._serviceProfile=i,this._utils=n,this._formBuilder=a,this.inCall=!1,this.userLogged=this._serviceProfile.getUserLogged(),this.isCallStarted$=this._service.isCallStarted$,this.peerId=this._service.initPeer(),this.modalForm=this._formBuilder.group({id:["",""]})}return n(t,[{key:"ngOnInit",value:function(){var t=this;this._service.localStream$.pipe(Object(V.a)(function(t){return!!t})).subscribe(function(e){return t.localVideo.nativeElement.srcObject=e}),this._service.remoteStream$.pipe(Object(V.a)(function(t){return!!t})).subscribe(function(e){return t.remoteVideo.nativeElement.srcObject=e})}},{key:"ngOnDestroy",value:function(){this._service.destroyPeer()}},{key:"createCall",value:function(){var t=this;this._utils.showDialog({width:500,data:{title:"Room created",message:this.peerId},onClose:function(){t._service.enableCallAnswer(),t.inCall=!0}})}},{key:"joinCall",value:function(){var t=this;this._utils.showDialog({width:500,data:{title:"Type the id of the room",formElement:this.modalForm,model:this.modalForm.value,confirm:!0,form:[{name:"id",type:"text",placeholder:"Room Id"}],onChange:function(e){t.modalForm.patchValue(e)}},onClose:function(e){e.action&&(t._service.establishMediaCall(t.modalForm.value.id),t.inCall=!0)}})}},{key:"endCall",value:function(){this._service.closeMediaCall(),this.inCall=!1}}]),t}()).\u0275fac=function(t){return new(t||G)(b.Ob(h.a),b.Ob(v.a),b.Ob(S.a),b.Ob(s.d))},G.\u0275cmp=b.Ib({type:G,selectors:[["meet-app-chat"]],viewQuery:function(t,e){var i;1&t&&(b.Gc(A,1),b.Gc(B,1)),2&t&&(b.qc(i=b.dc())&&(e.localVideo=i.first),b.qc(i=b.dc())&&(e.remoteVideo=i.first))},features:[b.Cb([h.a])],decls:3,vars:2,consts:[[1,"chat"],[4,"ngIf"],[1,"chat__header"],["mat-raised-button","","color","primary",3,"click"],[1,"chat__call","grid-bottom"],[1,"remote-video","col-10_xs-12"],["id","remote-video","poster","../../../../../assets/images/video-placeholder.jpg","autoplay","","playsinline",""],["remoteVideo",""],[1,"local-video","col-2_xs-12"],["id","local-video","autoplay","","playsinline","",3,"muted"],["localVideo",""],[1,"chat__actions"],["mat-icon-button","","color","accent",1,"mat-elevation-z2",3,"disabled","click"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Bc(1,E,6,0,"ng-container",1),b.Bc(2,M,13,4,"ng-container",1),b.Tb()),2&t&&(b.Db(1),b.lc("ngIf",!e.inCall),b.Db(1),b.lc("ngIf",e.inCall))},directives:[r.k,I.a,j.a],pipes:[r.b],styles:[".chat__header{text-align:right}.chat__header button{margin-right:10px}.chat__header button:last-child{margin-right:0}.chat__call video{-o-object-fit:cover;object-fit:cover}.chat__call .remote-video video{width:100%}.chat__actions{text-align:center}"],encapsulation:2}),G),J=[{path:"",component:(N=function(){function t(e,i){c(this,t),this._store=e,this._serviceProfile=i,this.isLoading$=this._store.pipe(Object(p.t)(m.c)),this.userLogged=this._serviceProfile.getUserLogged()}return n(t,[{key:"ngOnInit",value:function(){}},{key:"goTo",value:function(t){this._store.dispatch(new g.b({path:[t]}))}}]),t}(),N.\u0275fac=function(t){return new(t||N)(b.Ob(p.i),b.Ob(v.a))},N.\u0275cmp=b.Ib({type:N,selectors:[["meet-app-homepage"]],features:[b.Cb([h.a,v.a])],decls:10,vars:4,consts:[[1,"p-home-page"],[3,"show","overlay"],[1,"p-home-page__container","container","mat-elevation-z2"],[1,"grid"],[1,"p-home-page__lists","col-4_xs-12_md-5"],[1,"p-home-page__chat","col-8_xs-12_md-7"]],template:function(t,e){1&t&&(b.Ub(0,"section",0),b.Pb(1,"meet-app-loader",1),b.hc(2,"async"),b.Ub(3,"div",2),b.Ub(4,"div",3),b.Ub(5,"aside",4),b.Pb(6,"meet-app-contact-list"),b.Pb(7,"meet-app-users-list"),b.Tb(),b.Ub(8,"div",5),b.Pb(9,"meet-app-chat"),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t&&(b.Db(1),b.lc("show",b.ic(2,2,e.isLoading$))("overlay",!0))},directives:[_.a,D,$,q],pipes:[r.b],styles:[".p-home-page__container{padding:20px;border-radius:8px;background-color:#fff}"],encapsulation:2}),N),pathMatch:"full"}],K=((R=function t(){c(this,t)}).\u0275fac=function(t){return new(t||R)},R.\u0275mod=b.Mb({type:R}),R.\u0275inj=b.Lb({providers:t(h.b),imports:[[r.c,s.g,s.o,d,f.a,u.b,l.g.forChild(J)]]}),R)}}])}();