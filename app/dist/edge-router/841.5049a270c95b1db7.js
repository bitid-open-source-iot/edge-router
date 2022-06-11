"use strict";(self.webpackChunkedge_router=self.webpackChunkedge_router||[]).push([[841],{5612:(B,f,a)=>{a.d(f,{G:()=>p});var i=a(9808),s=a(3874),e=a(7544),v=a(7423),g=a(5e3);let p=(()=>{class l{}return l.\u0275fac=function(E){return new(E||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[[i.ez,s.Ps,e.g,v.ot]]}),l})()},5841:(B,f,a)=>{a.r(f),a.d(f,{ChangePasswordPageModule:()=>R});var i=a(5861),s=a(3075),e=a(5e3),v=a(649),g=a(1083),p=a(1693),l=a(2109),u=a(4594),E=a(5277),_=a(7322),d=a(9808),c=a(5899),t=a(8863),n=a(7531),b=a(7423);function M(o,h){1&o&&e._UZ(0,"mat-progress-bar",10)}function P(o,h){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.errors.password," ")}}function A(o,h){if(1&o&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.errors.confirm," ")}}let D=(()=>{class o{constructor(r,m,C,w){this.toast=r,this.router=m,this.service=C,this.formerror=w,this.form=new s.cw({confirm:new s.NI(null,[s.kI.required]),password:new s.NI(null,[s.kI.required])}),this.errors={confirm:"",password:""},this.loading=!1,this.observers={}}submit(){var r=this;return(0,i.Z)(function*(){r.loading=!0;const m=yield r.service.changePassword(r.form.value);m.ok?(r.router.navigate(["/devices"]),r.toast.success("Password was changed!")):r.toast.error(m.result.message),r.loading=!1})()}ngOnInit(){this.observers.form=this.form.valueChanges.subscribe(()=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.observers.form.unsubscribe()}}return o.\u0275fac=function(r){return new(r||o)(e.Y36(v.k),e.Y36(g.F0),e.Y36(p.l),e.Y36(l.J))},o.\u0275cmp=e.Xpm({type:o,selectors:[["change-password-page"]],decls:21,vars:4,consts:[[1,"spacer"],["mode","indeterminate",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","password","name","password","placeholder","new password","formControlName","password","required",""],["new",""],[4,"ngIf"],["matInput","","type","password","name","confirm","placeholder","confirm password","formControlName","confirm","required",""],["confirm",""],["mat-flat-button","","type","submit","color","primary"],["mode","indeterminate"]],template:function(r,m){1&r&&(e.TgZ(0,"mat-toolbar"),e._UZ(1,"mat-menu-button"),e.TgZ(2,"mat-label",0),e._uU(3," Change Password "),e.qZA(),e.qZA(),e.YNc(4,M,1,0,"mat-progress-bar",1),e.TgZ(5,"mat-content"),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return!m.loading&&!m.form.invalid&&m.submit()}),e.TgZ(7,"mat-form-field",3),e.TgZ(8,"mat-label"),e._uU(9," New Password "),e.qZA(),e._UZ(10,"input",4,5),e.YNc(12,P,2,1,"mat-error",6),e.qZA(),e.TgZ(13,"mat-form-field",3),e.TgZ(14,"mat-label"),e._uU(15," Confirm Password "),e.qZA(),e._UZ(16,"input",7,8),e.YNc(18,A,2,1,"mat-error",6),e.qZA(),e.TgZ(19,"button",9),e._uU(20," submit "),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.xp6(4),e.Q6J("ngIf",m.loading),e.xp6(2),e.Q6J("formGroup",m.form),e.xp6(6),e.Q6J("ngIf",m.errors.password),e.xp6(6),e.Q6J("ngIf",m.errors.confirm))},directives:[u.Ye,E.v,_.hX,d.O5,c.pW,t.s,s._Y,s.JL,s.sg,_.KE,n.Nt,s.Fj,s.JJ,s.u,s.Q7,_.TO,b.lW],styles:["form[_ngcontent-%COMP%]{width:100%;margin:16px auto;max-width:400px}"]}),o})();var O=a(3874),T=a(4107),y=a(4274),I=a(5612);const Z=[{path:"",component:D}];let R=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[s.u5,d.ez,O.Ps,n.c,T.LD,b.ot,u.g0,y.X,_.lN,I.G,s.UX,c.Cv,g.Bz.forChild(Z)]]}),o})()},7544:(B,f,a)=>{a.d(f,{k:()=>E,g:()=>_});var i=a(5e3),s=a(508),e=a(5664),v=a(3191),g=a(6360);let p=0;const l=(0,s.Id)(class{}),u="mat-badge-content";let E=(()=>{class d extends l{constructor(t,n,b,M,P){super(),this._ngZone=t,this._elementRef=n,this._ariaDescriber=b,this._renderer=M,this._animationMode=P,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=p++,this._isInitialized=!1}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,v.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateHostAriaDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,v.Ig)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const t=this._renderer.createElement("span"),n="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(u),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(n)})}):t.classList.add(n),t}_updateRenderedContent(t){const n=`${null!=t?t:""}`.trim();this._isInitialized&&n&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=n),this._content=n}_updateHostAriaDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),t&&this._ariaDescriber.describe(this._elementRef.nativeElement,t),this._description=t}_setColor(t){const n=this._elementRef.nativeElement.classList;n.remove(`mat-badge-${this._color}`),t&&n.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${u}`);for(const n of Array.from(t))n!==this._badgeElement&&n.remove()}}return d.\u0275fac=function(t){return new(t||d)(i.Y36(i.R0b),i.Y36(i.SBq),i.Y36(e.$s),i.Y36(i.Qsj),i.Y36(g.Qb,8))},d.\u0275dir=i.lG2({type:d,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,n){2&t&&i.ekj("mat-badge-overlap",n.overlap)("mat-badge-above",n.isAbove())("mat-badge-below",!n.isAbove())("mat-badge-before",!n.isAfter())("mat-badge-after",n.isAfter())("mat-badge-small","small"===n.size)("mat-badge-medium","medium"===n.size)("mat-badge-large","large"===n.size)("mat-badge-hidden",n.hidden||!n.content)("mat-badge-disabled",n.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[i.qOj]}),d})(),_=(()=>{class d{}return d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[[e.rt,s.BQ],s.BQ]}),d})()}}]);