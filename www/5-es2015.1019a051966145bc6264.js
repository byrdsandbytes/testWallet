(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"WLN+":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var o=u("pMnS"),a=u("MKJQ"),b=u("sZkV"),c=u("iInd"),r=u("SVse"),e=u("FkVd");class s{constructor(l){this.transactionService=l,this.userAccountId="fFXDe0RztFrv05TJXpAz"}ngOnInit(){this.transactions=this.transactionService.getTransactions(this.userAccountId),this.transactions.subscribe(l=>{this.walletBalance=0,l.forEach(l=>{this.walletBalance=this.walletBalance+l.amount,console.log("Wallet Balance is:",this.walletBalance)})})}}var p=t.ob({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,6,"ion-text",[["class","ion-text-center"]],null,null,null,a.L,a.r)),t.pb(1,49152,null,0,b.sb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CHF"])),(l()(),t.qb(4,0,null,0,2,"h1",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.Ib(5,null,[" "," "])),t.Eb(6,2)],null,(function(l,n){var u=n.component,i=t.Jb(n,5,0,l(n,6,0,t.Bb(n.parent,0),u.walletBalance,"1.2-2"));l(n,5,0,i)}))}function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,9,"ion-item",[["button",""]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Bb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Bb(l,4).onClick(u)&&i),i}),a.G,a.m)),t.pb(1,49152,null,0,b.F,[t.h,t.k,t.x],{button:[0,"button"]},null),t.pb(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(3,2),t.pb(4,737280,null,0,b.Gb,[r.i,b.Cb,t.k,c.m,[2,c.n]],null,null),(l()(),t.Ib(5,0,[" "," "])),(l()(),t.qb(6,0,null,0,3,"ion-note",[["slot","end"]],null,null,null,a.J,a.p)),t.pb(7,49152,null,0,b.T,[t.h,t.k,t.x],null,null),(l()(),t.Ib(8,0,[" "," "," "])),t.Eb(9,2)],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/transaction",n.context.$implicit.id);l(n,2,0,u),l(n,4,0)}),(function(l,n){l(n,5,0,n.context.$implicit.name);var u=t.Jb(n,8,0,l(n,9,0,t.Bb(n.parent,0),n.context.$implicit.amount,"1.2-2"));l(n,8,0,u,n.context.$implicit.currency)}))}function f(l){return t.Kb(0,[t.Db(0,r.e,[t.s]),(l()(),t.qb(1,0,null,null,6,"ion-header",[],null,null,null,a.D,a.j)),t.pb(2,49152,null,0,b.z,[t.h,t.k,t.x],null,null),(l()(),t.qb(3,0,null,0,4,"ion-toolbar",[],null,null,null,a.N,a.t)),t.pb(4,49152,null,0,b.xb,[t.h,t.k,t.x],null,null),(l()(),t.qb(5,0,null,0,2,"ion-title",[],null,null,null,a.M,a.s)),t.pb(6,49152,null,0,b.vb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Transaction List"])),(l()(),t.qb(8,0,null,null,17,"ion-content",[],null,null,null,a.z,a.f)),t.pb(9,49152,null,0,b.s,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,2,null,k)),t.pb(11,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),t.Db(131072,r.b,[t.h]),(l()(),t.qb(13,0,null,0,7,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.B,a.g)),t.pb(14,49152,null,0,b.u,[t.h,t.k,t.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t.qb(15,0,null,0,5,"ion-fab-button",[["routerLink","/transaction"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Bb(l,17).onClick()&&i),"click"===n&&(i=!1!==t.Bb(l,18).onClick(u)&&i),i}),a.A,a.h)),t.pb(16,49152,null,0,b.v,[t.h,t.k,t.x],null,null),t.pb(17,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.pb(18,737280,null,0,b.Gb,[r.i,b.Cb,t.k,c.m,[2,c.n]],null,null),(l()(),t.qb(19,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,a.E,a.k)),t.pb(20,49152,null,0,b.A,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(21,0,null,0,4,"ion-list",[],null,null,null,a.I,a.o)),t.pb(22,49152,null,0,b.M,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,2,null,h)),t.pb(24,278528,null,0,r.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,r.b,[t.h])],(function(l,n){var u=n.component;l(n,11,0,t.Jb(n,11,0,t.Bb(n,12).transform(u.transactions))),l(n,14,0,"end","bottom"),l(n,17,0,"/transaction"),l(n,18,0),l(n,20,0,"add"),l(n,24,0,t.Jb(n,24,0,t.Bb(n,25).transform(u.transactions)))}),null)}function m(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,1,"app-transaction-list",[],null,null,null,f,p)),t.pb(1,114688,null,0,s,[e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var z=t.mb("app-transaction-list",s,m,{},{},[]),d=u("s7LF");class v{}u.d(n,"TransactionListPageModuleNgFactory",(function(){return x}));var x=t.nb(i,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[o.a,z]],[3,t.j],t.v]),t.zb(4608,r.m,r.l,[t.s,[2,r.s]]),t.zb(4608,d.g,d.g,[]),t.zb(4608,b.a,b.a,[t.x,t.g]),t.zb(4608,b.Bb,b.Bb,[b.a,t.j,t.p]),t.zb(4608,b.Fb,b.Fb,[b.a,t.j,t.p]),t.zb(1073742336,r.c,r.c,[]),t.zb(1073742336,d.f,d.f,[]),t.zb(1073742336,d.a,d.a,[]),t.zb(1073742336,b.zb,b.zb,[]),t.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.zb(1073742336,v,v,[]),t.zb(1073742336,i,i,[]),t.zb(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);