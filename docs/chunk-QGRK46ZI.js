import{$ as R,A as f,B as r,D as a,E as s,F as p,G as S,H as x,I as v,J as o,K as P,L as l,R as b,S as _,_ as k,a as C,aa as N,b as w,ba as O,ia as T,j as u,ja as V,ka as c,l as E,m as d,p as I,q as M,u as n,v as H,z as h}from"./chunk-2I7ZVQFY.js";function A(i,t){if(i&1&&(a(0,"span"),o(1),b(2,"date"),s()),i&2){let e=v().$implicit;r("background","#f8d7da")("width","100%")("display","block"),n(),P(_(2,7,e.date,"dd-MM-YYYY"))}}function L(i,t){if(i&1){let e=S();a(0,"span"),h(1,A,3,10,"span",3),p(2,"br"),o(3),p(4,"br"),o(5),p(6,"br"),o(7),b(8,"date"),p(9,"br")(10,"br"),a(11,"span",4),x("click",function(){let D=I(e).index,j=v();return M(j.onDelete(D))}),o(12,"DELETE"),s(),p(13,"hr"),s()}if(i&2){let e=t.$implicit;n(),f("ngIf",e.showDateTitle),n(2),l(" Amount: ",e.amount,"\u20AC "),n(2),l(" Category: ",e.category," "),n(2),l(" Date: ",_(8,12,e.date,"dd-MM-YYYY HH:mm")," "),n(4),r("color","orange")("cursor","pointer"),n(2),r("background","#f8d7da")("height","2px")}}var y=class i{constructor(t){this.router=t}expenses=[];totalAmount=0;temporaryDate=0;ngOnInit(){this.expenses=JSON.parse(localStorage.getItem("expenses")||"[]").map(t=>w(C({},t),{showDateTitle:this.isDatePanelVisible(t.date)})),this.sumValues()}onDelete(t){confirm(`Press a button!
Either OK or Cancel.`)==!0&&(this.expenses.splice(t,1),localStorage.setItem("expenses",JSON.stringify(this.expenses)),this.sumValues())}onSwipeRight(){this.router.navigate(["/"])}isDatePanelVisible(t){return this.temporaryDate===0?(this.temporaryDate=t,!0):new Date(this.temporaryDate).toDateString()===new Date(t).toDateString()?!1:(this.temporaryDate=t,!0)}sumValues(){this.totalAmount=this.expenses.reduce((t,e)=>{let m=t+e.amount;return Math.round(m*100)/100},0)}static \u0275fac=function(e){return new(e||i)(H(T))};static \u0275cmp=E({type:i,selectors:[["app-history"]],decls:11,vars:15,consts:[[1,"history-container",3,"swiperight"],[3,"routerLink"],[4,"ngFor","ngForOf"],[3,"background","width","display",4,"ngIf"],[3,"click"]],template:function(e,m){e&1&&(a(0,"div",0),x("swiperight",function(){return m.onSwipeRight()}),a(1,"span",1),o(2,"< Back"),s(),p(3,"br"),a(4,"div")(5,"span"),o(6,"\u041E\u0431\u0449\u0438\u0439 \u0440\u0430\u0441\u0445\u043E\u0434: "),s(),a(7,"span"),o(8),s()(),p(9,"hr"),h(10,L,14,15,"span",2),s()),e&2&&(n(),r("color","blue")("cursor","pointer"),f("routerLink","/"),n(3),r("margin","10","px"),n(3),r("color","red"),n(),l("",m.totalAmount," $"),n(),r("background","#f8d7da")("height","2px"),n(),f("ngForOf",m.expenses))},dependencies:[V,k,R,N],styles:[".history-container[_ngcontent-%COMP%]{touch-action:pan-y;overflow:scroll}"]})};var B=[{path:"",component:y}],g=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=d({type:i});static \u0275inj=u({imports:[c.forChild(B),c]})};var F=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=d({type:i});static \u0275inj=u({imports:[c,g,O]})};export{F as HistoryModule};
