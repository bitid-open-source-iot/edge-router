(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{CcPE:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i("fXoL"),s=i("d3yR"),r=i("bTqV"),a=i("NFeN"),o=i("TU8p");let c=(()=>{class t{constructor(t){this.menu=t,this.badge=0,this.observers={}}ngOnInit(){this.observers.badge=this.menu.badge.subscribe(t=>{this.badge=0,Object.keys(t).map(e=>{this.badge+=t[e]})})}ngOnDestroy(){this.observers.badge.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Pb(s.a))},t.\u0275cmp=n.Jb({type:t,selectors:[["mat-menu-button"]],decls:2,vars:1,consts:[["mat-icon-button","",3,"click"],["svgIcon","menu","matBadge","priority_high","matBadgeSize","medium","matBadgeColor","warn",3,"matBadgeHidden"]],template:function(t,e){1&t&&(n.Vb(0,"button",0),n.cc("click",function(){return e.menu.toggle()}),n.Qb(1,"mat-icon",1),n.Ub()),2&t&&(n.Db(1),n.mc("matBadgeHidden",0==e.badge))},directives:[r.a,a.a,o.a],styles:["mat-menu-button .mat-badge-content{font-weight:500!important;font-family:Material Icons}"],encapsulation:2}),t})()},QZRe:function(t,e,i){"use strict";i.r(e),i.d(e,"ChangeEmailPageModule",function(){return D});var n=i("mrSG"),s=i("3Pt+"),r=i("fXoL"),a=i("9ZKQ"),o=i("tyNb"),c=i("VKgo"),d=i("dWDE"),m=i("/t3+"),b=i("CcPE"),l=i("kmnG"),u=i("ofXK"),h=i("4jEk"),g=i("qFsG"),p=i("bTqV"),f=i("bv9b");function _(t,e){1&t&&r.Qb(0,"mat-progress-bar",7)}function v(t,e){if(1&t&&(r.Vb(0,"mat-error"),r.zc(1),r.Ub()),2&t){const t=r.gc();r.Db(1),r.Bc(" ",t.errors.email," ")}}let y=(()=>{class t{constructor(t,e,i,n){this.toast=t,this.router=e,this.service=i,this.formerror=n,this.form=new s.d({email:new s.b(null,[s.s.required,s.s.email])}),this.errors={email:""},this.loading=!1,this.observers={}}submit(){return Object(n.a)(this,void 0,void 0,function*(){this.loading=!0;const t=yield this.service.changeEmail(this.form.value);t.ok?(this.router.navigate(["/devices"],{replaceUrl:!0}),this.toast.success("Email was changed!")):this.toast.error(t.result.message),this.loading=!1})}ngOnInit(){this.observers.form=this.form.valueChanges.subscribe(()=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.observers.form.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(a.a),r.Pb(o.b),r.Pb(c.a),r.Pb(d.a))},t.\u0275cmp=r.Jb({type:t,selectors:[["change-email-page"]],decls:14,vars:3,consts:[[1,"spacer"],["mode","indeterminate",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["mat-flat-button","","type","submit","color","primary"],["mode","indeterminate"]],template:function(t,e){1&t&&(r.Vb(0,"mat-toolbar"),r.Qb(1,"mat-menu-button"),r.Vb(2,"mat-label",0),r.zc(3," Change Email "),r.Ub(),r.Ub(),r.yc(4,_,1,0,"mat-progress-bar",1),r.Vb(5,"mat-content"),r.Vb(6,"form",2),r.cc("ngSubmit",function(){return!e.loading&&!e.form.invalid&&e.submit()}),r.Vb(7,"mat-form-field",3),r.Vb(8,"mat-label"),r.zc(9," Email "),r.Ub(),r.Qb(10,"input",4),r.yc(11,v,2,1,"mat-error",5),r.Ub(),r.Vb(12,"button",6),r.zc(13," submit "),r.Ub(),r.Ub(),r.Ub()),2&t&&(r.Db(4),r.mc("ngIf",e.loading),r.Db(2),r.mc("formGroup",e.form),r.Db(5),r.mc("ngIf",e.errors.email))},directives:[m.a,b.a,l.f,u.l,h.a,s.t,s.m,s.e,l.c,g.a,s.a,s.l,s.c,s.r,p.a,f.a,l.b],styles:["form[_ngcontent-%COMP%]{width:100%;margin:16px auto;max-width:400px}"]}),t})();var C=i("NFeN"),E=i("d3UM"),w=i("H0Zp"),B=i("wC7X");const A=[{path:"",component:y}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Nb({type:t}),t.\u0275inj=r.Mb({imports:[[s.g,u.c,C.b,g.b,E.b,p.b,m.b,w.a,l.e,B.a,s.q,f.b,o.e.forChild(A)]]}),t})()},TU8p:function(t,e,i){"use strict";i.d(e,"a",function(){return b}),i.d(e,"b",function(){return l});var n=i("FKr1"),s=i("u47x"),r=i("8LU1"),a=i("R1ws"),o=i("fXoL");let c=0;class d{}const m=Object(n.s)(d);let b=(()=>{class t extends m{constructor(t,e,i,n,s){super(),this._ngZone=t,this._elementRef=e,this._ariaDescriber=i,this._renderer=n,this._animationMode=s,this._hasContent=!1,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=c++}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=Object(r.c)(t)}get description(){return this._description}set description(t){if(t!==this._description){const e=this._badgeElement;this._updateHostAriaDescription(t,this._description),this._description=t,e&&(t?e.setAttribute("aria-label",t):e.removeAttribute("aria-label"))}}get hidden(){return this._hidden}set hidden(t){this._hidden=Object(r.c)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}ngOnChanges(t){const e=t.content;if(e){const t=e.currentValue;this._hasContent=null!=t&&`${t}`.trim().length>0,this._updateTextContent()}}ngOnDestroy(){const t=this._badgeElement;t&&(this.description&&this._ariaDescriber.removeDescription(t,this.description),this._renderer.destroyNode&&this._renderer.destroyNode(t))}getBadgeElement(){return this._badgeElement}_updateTextContent(){return this._badgeElement?this._badgeElement.textContent=this._stringifyContent():this._badgeElement=this._createBadgeElement(),this._badgeElement}_createBadgeElement(){const t=this._renderer.createElement("span"),e="mat-badge-active",i="mat-badge-content";return this._clearExistingBadges(i),t.setAttribute("id",`mat-badge-content-${this._id}`),t.classList.add(i),t.textContent=this._stringifyContent(),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this.description&&t.setAttribute("aria-label",this.description),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateHostAriaDescription(t,e){const i=this._updateTextContent();e&&this._ariaDescriber.removeDescription(i,e),t&&this._ariaDescriber.describe(i,t)}_setColor(t){if(t!==this._color){const e=this._elementRef.nativeElement.classList;this._color&&e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}}_clearExistingBadges(t){const e=this._elementRef.nativeElement;let i=e.children.length;for(;i--;){const n=e.children[i];n.classList.contains(t)&&e.removeChild(n)}}_stringifyContent(){const t=this.content;return null==t?"":`${t}`}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(o.B),o.Pb(o.l),o.Pb(s.c),o.Pb(o.G),o.Pb(a.a,8))},t.\u0275dir=o.Kb({type:t,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,e){2&t&&o.Hb("mat-badge-overlap",e.overlap)("mat-badge-above",e.isAbove())("mat-badge-below",!e.isAbove())("mat-badge-before",!e.isAfter())("mat-badge-after",e.isAfter())("mat-badge-small","small"===e.size)("mat-badge-medium","medium"===e.size)("mat-badge-large","large"===e.size)("mat-badge-hidden",e.hidden||!e._hasContent)("mat-badge-disabled",e.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],position:["matBadgePosition","position"],size:["matBadgeSize","size"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],description:["matBadgeDescription","description"],hidden:["matBadgeHidden","hidden"],content:["matBadge","content"]},features:[o.Ab,o.Bb]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[s.a,n.f],n.f]}),t})()},wC7X:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var n=i("ofXK"),s=i("NFeN"),r=i("TU8p"),a=i("bTqV"),o=i("fXoL");let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({imports:[[n.c,s.b,r.b,a.b]]}),t})()}}]);