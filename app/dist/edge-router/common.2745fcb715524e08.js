"use strict";(self.webpackChunkedge_router=self.webpackChunkedge_router||[]).push([[592],{9640:(f,l,i)=>{i.d(l,{A:()=>u});var n=i(7643),o=i(5347);class u{constructor(t){this.io=[],this.ip="",this.port=0,this.type="modbus",this.txtime=5,this.pxtime=5,this.barcode="",this.publish=!1,this.timeout=60,this.enabled=!1,this.unitId=0,this.deviceId=(0,n.Z)(),this.isConnected=!1,this.description="",this.userName="",this.password="",void 0!==t&&null!=t&&(void 0!==t.io&&null!=t.io&&(this.io=t.io.map(d=>new o.N(d))),void 0!==t.ip&&null!=t.ip&&(this.ip=t.ip),void 0!==t.port&&null!=t.port&&(this.port=t.port),void 0!==t.type&&null!=t.type&&(this.type=t.type),void 0!==t.txtime&&null!=t.txtime&&(this.txtime=t.txtime),void 0!==t.pxtime&&null!=t.pxtime&&(this.pxtime=t.pxtime),void 0!==t.barcode&&null!=t.barcode&&(this.barcode=t.barcode),void 0!==t.publish&&null!=t.publish&&(this.publish=t.publish),void 0!==t.timeout&&null!=t.timeout&&(this.timeout=t.timeout),void 0!==t.enabled&&null!=t.enabled&&(this.enabled=t.enabled),void 0!==t.unitId&&null!=t.unitId&&(this.unitId=t.unitId),void 0!==t.deviceId&&null!=t.deviceId&&(this.deviceId=t.deviceId),void 0!==t.isConnected&&null!=t.isConnected&&(this.isConnected=t.isConnected),void 0!==t.description&&null!=t.description&&(this.description=t.description),void 0!==t.lastConnection&&null!=t.lastConnection&&(this.lastConnection=new Date(t.lastConnection)),void 0!==t.userName&&null!=t.userName&&(this.userName=t.userName),void 0!==t.password&&null!=t.password&&(this.password=t.password))}}},7643:(f,l,i)=>{function n(){return((new Date).getTime()/1e3|0).toString(16)+"xxxxxxxxxxxxxxxx".replace(/[x]/g,()=>(16*Math.random()|0).toString(16)).toLowerCase()}i.d(l,{Z:()=>n})},5347:(f,l,i)=>{i.d(l,{N:()=>o});var n=i(7643);class o{constructor(e){this.scaling={raw:{low:0,high:0},scaled:{low:0,high:0},type:"none"},this.publish={bit:0,key:"",enabled:!1,moduleId:0},this.masking={bit:0,enabled:!1},this.mqtt={userName:"",password:"",subscribe:{data:"",control:""},enabled:!1},this.modbus={isCoil:!1,isHoldingRegister:!1},this.key="",this.tagId="",this.value=0,this.shift=-1,this.inputId=(0,n.Z)(),this.register=0,this.moduleId=0,this.readable=!1,this.interface="",this.writeable=!1,this.description="",this.cofs=-1,this.command="",void 0!==e&&null!=e&&(void 0!==e.scaling&&null!=e.scaling&&(void 0!==e.scaling.raw&&null!=e.scaling.raw&&(void 0!==e.scaling.raw.low&&null!=e.scaling.raw.low&&(this.scaling.raw.low=e.scaling.raw.low),void 0!==e.scaling.raw.high&&null!=e.scaling.raw.high&&(this.scaling.raw.high=e.scaling.raw.high)),void 0!==e.scaling.scaled&&null!=e.scaling.scaled&&(void 0!==e.scaling.scaled.low&&null!=e.scaling.scaled.low&&(this.scaling.scaled.low=e.scaling.scaled.low),void 0!==e.scaling.scaled.high&&null!=e.scaling.scaled.high&&(this.scaling.scaled.high=e.scaling.scaled.high)),void 0!==e.scaling.type&&null!=e.scaling.type&&(this.scaling.type=e.scaling.type)),void 0!==e.publish&&null!=e.publish&&(void 0!==e.publish.bit&&null!=e.publish.bit&&(this.publish.bit=e.publish.bit),void 0!==e.publish.key&&null!=e.publish.key&&(this.publish.key=e.publish.key),void 0!==e.publish.enabled&&null!=e.publish.enabled&&(this.publish.enabled=e.publish.enabled),void 0!==e.publish.moduleId&&null!=e.publish.moduleId&&(this.publish.moduleId=e.publish.moduleId)),void 0!==e.masking&&null!=e.masking&&(void 0!==e.masking.bit&&null!=e.masking.bit&&(this.masking.bit=e.masking.bit),void 0!==e.masking.enabled&&null!=e.masking.enabled&&(this.masking.enabled=e.masking.enabled)),void 0!==e.mqtt&&null!=e.mqtt&&(void 0!==e.mqtt.userName&&null!=e.mqtt.userName&&(this.mqtt.userName=e.mqtt.userName),void 0!==e.mqtt.password&&null!=e.mqtt.password&&(this.mqtt.password=e.mqtt.password),void 0!==e.mqtt.subscribe&&null!=e.mqtt.subscribe&&(void 0!==e.mqtt.subscribe.data&&null!=e.mqtt.subscribe.data&&(this.mqtt.subscribe.data=e.mqtt.subscribe.data),void 0!==e.mqtt.subscribe.control&&null!=e.mqtt.subscribe.control&&(this.mqtt.subscribe.control=e.mqtt.subscribe.control)),void 0!==e.mqtt.enabled&&null!=e.mqtt.enabled&&(this.mqtt.enabled=e.mqtt.enabled)),void 0!==e.modbus&&null!=e.modbus&&(void 0!==e.modbus.isCoil&&null!=e.modbus.isCoil&&(this.modbus.isCoil=e.modbus.isCoil),void 0!==e.modbus.isHoldingRegister&&null!=e.modbus.isHoldingRegister&&(this.modbus.isHoldingRegister=e.modbus.isHoldingRegister)),void 0!==e.key&&null!=e.key&&(this.key=e.key),void 0!==e.tagId&&null!=e.tagId&&(this.tagId=e.tagId),void 0!==e.value&&null!=e.value&&(this.value=e.value),void 0!==e.shift&&null!=e.shift&&(this.shift=e.shift),void 0!==e.inputId&&null!=e.inputId&&(this.inputId=e.inputId),void 0!==e.register&&null!=e.register&&(this.register=e.register),void 0!==e.moduleId&&null!=e.moduleId&&(this.moduleId=e.moduleId),void 0!==e.readable&&null!=e.readable&&(this.readable=e.readable),void 0!==e.interface&&null!=e.interface&&(this.interface=e.interface),void 0!==e.writeable&&null!=e.writeable&&(this.writeable=e.writeable),void 0!==e.description&&null!=e.description&&(this.description=e.description),void 0!==e.cofs&&null!=e.cofs&&(this.cofs=e.cofs),void 0!==e.command&&null!=e.command&&(this.command=e.command))}}},2285:(f,l,i)=>{i.d(l,{s:()=>u});var n=i(7579),o=i(1135);class u{constructor(t,d){this.data=new n.x,this.status=new o.X(null),this.url=t,this.route=d,this.status.next("connecting"),this.socket=new WebSocket([this.url,"?route=",this.route].join("")),this.socket.onopen=s=>this.status.next("connected"),this.socket.onclose=s=>this.status.next("disconnected"),this.socket.onerror=s=>this.status.next("error"),this.socket.onmessage=s=>this.data.next(JSON.parse(s.data))}reconnect(){delete this.socket,this.status.next("connecting"),this.socket=new WebSocket([this.url,"?route=",this.route].join("")),this.socket.onopen=t=>this.status.next("connected"),this.socket.onclose=t=>this.status.next("disconnected"),this.socket.onerror=t=>this.status.next("error"),this.socket.onmessage=t=>this.data.next(JSON.parse(t.data))}}},7756:(f,l,i)=>{i.d(l,{x:()=>e});var n=i(5e3),o=i(7423),u=i(3874);let e=(()=>{class t{constructor(){}back(){window.history.back()}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["mat-back-button"]],decls:2,vars:0,consts:[["mat-icon-button","",3,"click"],["svgIcon","arrow_back"]],template:function(s,a){1&s&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return a.back()}),n._UZ(1,"mat-icon",1),n.qZA())},directives:[o.lW,u.Hw],styles:[""]}),t})()},2217:(f,l,i)=>{i.d(l,{l:()=>u});var n=i(9808),o=i(5e3);let u=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez]]}),e})()},4080:(f,l,i)=>{i.d(l,{A:()=>u});var n=i(5e3);const o=["*"];let u=(()=>{class e{constructor(){}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["mat-footer"]],ngContentSelectors:o,decls:1,vars:0,template:function(d,s){1&d&&(n.F$t(),n.Hsn(0))},styles:["mat-footer{flex:1 auto;color:#000000de;height:56px;display:flex;padding:0 16px;min-height:56px;max-height:56px;background:#f5f5f5;align-items:center}\n"],encapsulation:2}),e})()},5277:(f,l,i)=>{i.d(l,{v:()=>d});var n=i(5e3),o=i(9922),u=i(7423),e=i(3874),t=i(7544);let d=(()=>{class s{constructor(c){this.menu=c,this.badge=0,this.observers={}}ngOnInit(){this.observers.badge=this.menu.badge.subscribe(c=>{this.badge=0,Object.keys(c).map(h=>{this.badge+=c[h]})})}ngOnDestroy(){this.observers.badge.unsubscribe()}}return s.\u0275fac=function(c){return new(c||s)(n.Y36(o.h))},s.\u0275cmp=n.Xpm({type:s,selectors:[["mat-menu-button"]],decls:2,vars:1,consts:[["mat-icon-button","",3,"click"],["svgIcon","menu","matBadge","priority_high","matBadgeSize","medium","matBadgeColor","warn",3,"matBadgeHidden"]],template:function(c,h){1&c&&(n.TgZ(0,"button",0),n.NdJ("click",function(){return h.menu.toggle()}),n._UZ(1,"mat-icon",1),n.qZA()),2&c&&(n.xp6(1),n.Q6J("matBadgeHidden",0==h.badge))},directives:[u.lW,e.Hw,t.k],styles:["mat-menu-button .mat-badge-content{font-weight:500!important;font-family:Material Icons}\n"],encapsulation:2}),s})()},2604:(f,l,i)=>{i.d(l,{o:()=>u});var n=i(9808),o=i(5e3);let u=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez]]}),e})()},7375:(f,l,i)=>{i.d(l,{M:()=>u});var n=i(9808),o=i(5e3);let u=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[n.ez]]}),e})()}}]);