(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{CcPE:function(t,e,s){"use strict";s.d(e,"a",function(){return c});var r=s("fXoL"),i=s("d3yR"),n=s("bTqV"),o=s("NFeN"),a=s("TU8p");let c=(()=>{class t{constructor(t){this.menu=t,this.badge=0,this.observers={}}ngOnInit(){this.observers.badge=this.menu.badge.subscribe(t=>{this.badge=0,Object.keys(t).map(e=>{this.badge+=t[e]})})}ngOnDestroy(){this.observers.badge.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(i.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["mat-menu-button"]],decls:2,vars:1,consts:[["mat-icon-button","",3,"click"],["svgIcon","menu","matBadge","priority_high","matBadgeSize","medium","matBadgeColor","warn",3,"matBadgeHidden"]],template:function(t,e){1&t&&(r.Vb(0,"button",0),r.cc("click",function(){return e.menu.toggle()}),r.Qb(1,"mat-icon",1),r.Ub()),2&t&&(r.Db(1),r.mc("matBadgeHidden",0==e.badge))},directives:[n.a,o.a,a.a],styles:["mat-menu-button .mat-badge-content{font-weight:500!important;font-family:Material Icons}"],encapsulation:2}),t})()},TU8p:function(t,e,s){"use strict";s.d(e,"a",function(){return m}),s.d(e,"b",function(){return l});var r=s("FKr1"),i=s("u47x"),n=s("8LU1"),o=s("R1ws"),a=s("fXoL");let c=0;class d{}const b=Object(r.s)(d);let m=(()=>{class t extends b{constructor(t,e,s,r,i){super(),this._ngZone=t,this._elementRef=e,this._ariaDescriber=s,this._renderer=r,this._animationMode=i,this._hasContent=!1,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=c++}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=Object(n.c)(t)}get description(){return this._description}set description(t){if(t!==this._description){const e=this._badgeElement;this._updateHostAriaDescription(t,this._description),this._description=t,e&&(t?e.setAttribute("aria-label",t):e.removeAttribute("aria-label"))}}get hidden(){return this._hidden}set hidden(t){this._hidden=Object(n.c)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}ngOnChanges(t){const e=t.content;if(e){const t=e.currentValue;this._hasContent=null!=t&&`${t}`.trim().length>0,this._updateTextContent()}}ngOnDestroy(){const t=this._badgeElement;t&&(this.description&&this._ariaDescriber.removeDescription(t,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(t))}getBadgeElement(){return this._badgeElement}_updateTextContent(){return this._badgeElement?this._badgeElement.textContent=this._stringifyContent():this._badgeElement=this._createBadgeElement(),this._badgeElement}_createBadgeElement(){const t=this._renderer.createElement("span"),e="mat-badge-active",s="mat-badge-content";return this._clearExistingBadges(s),t.setAttribute("id",`mat-badge-content-${this._id}`),t.classList.add(s),t.textContent=this._stringifyContent(),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this.description&&t.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateHostAriaDescription(t,e){const s=this._updateTextContent();e&&this._ariaDescriber.removeDescription(s,e),t&&this._ariaDescriber.describe(s,t)}_setColor(t){if(t!==this._color){const e=this._elementRef.nativeElement.classList;this._color&&e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}}_clearExistingBadges(t){const e=this._elementRef.nativeElement;let s=e.children.length;for(;s--;){const r=e.children[s];r.classList.contains(t)&&e.removeChild(r)}}_stringifyContent(){const t=this.content;return null==t?"":`${t}`}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(a.B),a.Pb(a.l),a.Pb(i.c),a.Pb(a.G),a.Pb(o.a,8))},t.\u0275dir=a.Kb({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,e){2&t&&a.Hb("mat-badge-overlap",e.overlap)("mat-badge-above",e.isAbove())("mat-badge-below",!e.isAbove())("mat-badge-before",!e.isAfter())("mat-badge-after",e.isAfter())("mat-badge-small","small"===e.size)("mat-badge-medium","medium"===e.size)("mat-badge-large","large"===e.size)("mat-badge-hidden",e.hidden||!e._hasContent)("mat-badge-disabled",e.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[a.Ab,a.Bb]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[i.a,r.f],r.f]}),t})()},wC7X:function(t,e,s){"use strict";s.d(e,"a",function(){return c});var r=s("ofXK"),i=s("NFeN"),n=s("TU8p"),o=s("bTqV"),a=s("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[r.c,i.b,n.b,o.b]]}),t})()},wdPO:function(t,e,s){"use strict";s.r(e),s.d(e,"ChangePasswordPageModule",function(){return A});var r=s("mrSG"),i=s("3Pt+"),n=s("fXoL"),o=s("9ZKQ"),a=s("tyNb"),c=s("VKgo"),d=s("dWDE"),b=s("/t3+"),m=s("CcPE"),l=s("kmnG"),u=s("ofXK"),h=s("4jEk"),g=s("qFsG"),p=s("bTqV"),f=s("bv9b");function _(t,e){1&t&&n.Qb(0,"mat-progress-bar",10)}function v(t,e){if(1&t&&(n.Vb(0,"mat-error"),n.zc(1),n.Ub()),2&t){const t=n.gc();n.Db(1),n.Bc(" ",t.errors.password," ")}}function w(t,e){if(1&t&&(n.Vb(0,"mat-error"),n.zc(1),n.Ub()),2&t){const t=n.gc();n.Db(1),n.Bc(" ",t.errors.confirm," ")}}let y=(()=>{class t{constructor(t,e,s,r){this.toast=t,this.router=e,this.service=s,this.formerror=r,this.form=new i.d({confirm:new i.b(null,[i.s.required]),password:new i.b(null,[i.s.required])}),this.errors={confirm:"",password:""},this.loading=!1,this.observers={}}submit(){return Object(r.a)(this,void 0,void 0,function*(){this.loading=!0;const t=yield this.service.changePassword(this.form.value);t.ok?(this.router.navigate(["/devices"]),this.toast.success("Password was changed!")):this.toast.error(t.result.message),this.loading=!1})}ngOnInit(){this.observers.form=this.form.valueChanges.subscribe(()=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.observers.form.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(o.a),n.Pb(a.b),n.Pb(c.a),n.Pb(d.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["change-password-page"]],decls:21,vars:4,consts:[[1,"spacer"],["mode","indeterminate",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","password","name","password","placeholder","new password","formControlName","password","required",""],["new",""],[4,"ngIf"],["matInput","","type","password","name","confirm","placeholder","confirm password","formControlName","confirm","required",""],["confirm",""],["mat-flat-button","","type","submit","color","primary"],["mode","indeterminate"]],template:function(t,e){1&t&&(n.Vb(0,"mat-toolbar"),n.Qb(1,"mat-menu-button"),n.Vb(2,"mat-label",0),n.zc(3," Change Password "),n.Ub(),n.Ub(),n.yc(4,_,1,0,"mat-progress-bar",1),n.Vb(5,"mat-content"),n.Vb(6,"form",2),n.cc("ngSubmit",function(){return!e.loading&&!e.form.invalid&&e.submit()}),n.Vb(7,"mat-form-field",3),n.Vb(8,"mat-label"),n.zc(9," New Password "),n.Ub(),n.Qb(10,"input",4,5),n.yc(12,v,2,1,"mat-error",6),n.Ub(),n.Vb(13,"mat-form-field",3),n.Vb(14,"mat-label"),n.zc(15," Confirm Password "),n.Ub(),n.Qb(16,"input",7,8),n.yc(18,w,2,1,"mat-error",6),n.Ub(),n.Vb(19,"button",9),n.zc(20," submit "),n.Ub(),n.Ub(),n.Ub()),2&t&&(n.Db(4),n.mc("ngIf",e.loading),n.Db(2),n.mc("formGroup",e.form),n.Db(6),n.mc("ngIf",e.errors.password),n.Db(6),n.mc("ngIf",e.errors.confirm))},directives:[b.a,m.a,l.f,u.l,h.a,i.t,i.m,i.e,l.c,g.a,i.a,i.l,i.c,i.r,p.a,f.a,l.b],styles:["form[_ngcontent-%COMP%]{width:100%;margin:16px auto;max-width:400px}"]}),t})();var C=s("NFeN"),B=s("d3UM"),P=s("H0Zp"),D=s("wC7X");const E=[{path:"",component:y}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.Nb({type:t}),t.\u0275inj=n.Mb({imports:[[i.g,u.c,C.b,g.b,B.b,p.b,b.b,P.a,l.e,D.a,i.q,f.b,a.e.forChild(E)]]}),t})()}}]);