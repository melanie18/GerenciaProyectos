(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Lvw3:function(r,e,t){"use strict";t.r(e),t.d(e,"routes",function(){return T}),t.d(e,"ProfileModule",function(){return w});var o=t("ofXK"),i=t("tyNb"),l=t("3Pt+"),n=t("QUrN"),a=t("fXoL");let s=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({imports:[[o.c]]}),r})();var u=t("PCNd"),b=t("l7P3"),c=t("1KGp"),p=t("rhrw"),m=t("ZF+8"),f=t("Ep5b"),d=t("kmnG"),h=t("qFsG"),g=t("bTqV");function _(r,e){1&r&&(a.Ub(0,"mat-error"),a.Dc(1," Name is required "),a.Tb())}function v(r,e){1&r&&(a.Ub(0,"mat-error"),a.Dc(1," Email is required "),a.Tb())}function U(r,e){1&r&&(a.Ub(0,"mat-error"),a.Dc(1," Please enter a valid email "),a.Tb())}const T=[{path:"",component:(()=>{class r{constructor(r,e,t,o){this._formBuilder=r,this._service=e,this._utils=t,this._store=o,this.isLoading$=this._store.pipe(Object(b.t)(p.d)),this.profileFormGroup=this._formBuilder.group({name:["",l.q.required],email:["",l.q.required]}),this.user$=this._store.pipe(Object(b.t)(p.e)),this.user$.subscribe(r=>{void 0!==r&&(this.user=r,this.profileFormGroup.patchValue({name:this.user.name,email:this.user.email}))})}ngOnInit(){}getField(r){return this.profileFormGroup.get(r)}onUpdateProfile(){this.profileFormGroup.valid&&this._store.dispatch(new p.c({data:this.profileFormGroup.value,id:this.user.id}))}}return r.\u0275fac=function(e){return new(e||r)(a.Ob(l.d),a.Ob(c.a),a.Ob(m.a),a.Ob(b.i))},r.\u0275cmp=a.Ib({type:r,selectors:[["meet-app-profile"]],features:[a.Cb([c.a])],decls:24,vars:9,consts:[[1,"p-profile"],[3,"show","overlay"],[1,"p-profile__container","container","mat-elevation-z2"],["autocomplete","false",1,"o-forms",3,"formGroup","ngSubmit"],[1,"o-forms__title"],[1,"o-forms__container-fields"],[1,"o-forms__field"],["appearance","fill"],["matInput","","formControlName","name"],[4,"ngIf"],["matInput","","formControlName","email"],[1,"o-forms__actions","t-center"],["mat-raised-button","","type","submit","color","primary",3,"disabled"]],template:function(r,e){if(1&r&&(a.Ub(0,"section",0),a.Pb(1,"meet-app-loader",1),a.hc(2,"async"),a.Ub(3,"div",2),a.Ub(4,"form",3),a.cc("ngSubmit",function(){return e.onUpdateProfile()}),a.Ub(5,"h2",4),a.Dc(6,"Profile"),a.Tb(),a.Ub(7,"div",5),a.Ub(8,"div",6),a.Ub(9,"mat-form-field",7),a.Ub(10,"mat-label"),a.Dc(11,"Name"),a.Tb(),a.Pb(12,"input",8),a.Bc(13,_,2,0,"mat-error",9),a.Tb(),a.Tb(),a.Ub(14,"div",6),a.Ub(15,"mat-form-field",7),a.Ub(16,"mat-label"),a.Dc(17,"Email"),a.Tb(),a.Pb(18,"input",10),a.Bc(19,v,2,0,"mat-error",9),a.Bc(20,U,2,0,"mat-error",9),a.Tb(),a.Tb(),a.Tb(),a.Ub(21,"div",11),a.Ub(22,"button",12),a.Dc(23,"Update Profile"),a.Tb(),a.Tb(),a.Tb(),a.Tb(),a.Tb()),2&r){let r=null,t=null,o=null;a.Db(1),a.lc("show",a.ic(2,7,e.isLoading$))("overlay",!0),a.Db(3),a.lc("formGroup",e.profileFormGroup),a.Db(9),a.lc("ngIf",null==(r=e.getField("name"))||null==r.errors?null:r.errors.required),a.Db(6),a.lc("ngIf",null==(t=e.getField("email"))||null==t.errors?null:t.errors.required),a.Db(1),a.lc("ngIf",!(null!=(o=e.getField("email"))&&null!=o.errors&&o.errors.required)&&(null==(o=e.getField("email"))||null==o.errors?null:o.errors.pattern)),a.Db(2),a.lc("disabled",!e.profileFormGroup.valid)}},directives:[f.a,l.r,l.l,l.f,d.d,d.g,h.b,l.c,l.k,l.e,o.k,g.a,d.c],pipes:[o.b],styles:[".p-profile__container[_ngcontent-%COMP%]{padding:20px;border-radius:8px;background-color:#fff}"]}),r})(),pathMatch:"full"}];let w=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=a.Mb({type:r}),r.\u0275inj=a.Lb({providers:[...c.b],imports:[[o.c,l.g,l.o,n.b,s,u.a,i.g.forChild(T)]]}),r})()}}]);