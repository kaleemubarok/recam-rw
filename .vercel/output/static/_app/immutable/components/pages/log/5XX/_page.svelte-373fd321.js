import{S as it,i as ct,s as dt,k as c,a as M,q as w,V as ut,l as d,h as n,c as x,m as h,r as k,n as t,C as a,b as O,Q as $,D as ht,o as _t,T as pt,p as K,W as ft,u as Y}from"../../../../chunks/index-d1f1804c.js";import{a as lt}from"../../../../chunks/auth-380363b5.js";import{e as bt}from"../../../../chunks/env-public-6aa99648.js";import{f as rt}from"../../../../chunks/index-a9af9306.js";function ot(v,e,i){const r=v.slice();return r[2]=e[i],r[4]=i,r}function vt(v){let e;return{c(){e=w("loading...")},l(i){e=k(i,"loading...")},m(i,r){O(i,e,r)},p:$,d(i){i&&n(e)}}}function mt(v){let e,i,r,o,u,y,g,G,I,m,P,W,T,N,B,D,R,A,p,C,j,E,H=v[0].logs,_=[];for(let f=0;f<H.length;f+=1)_[f]=nt(ot(v,H,f));return{c(){e=c("table"),i=c("thead"),r=c("tr"),o=c("th"),u=w("#"),y=M(),g=c("th"),G=w("Waktu"),I=M(),m=c("th"),P=w("Endpoint"),W=M(),T=c("th"),N=w("Communication Attempt"),B=M(),D=c("th"),R=w("Response"),A=M(),p=c("th"),C=w("Action"),j=M(),E=c("tbody");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){e=d(f,"TABLE",{class:!0,id:!0,role:!0,"aria-describedby":!0});var b=h(e);i=d(b,"THEAD",{});var l=h(i);r=d(l,"TR",{});var s=h(r);o=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,style:!0,"aria-sort":!0,"aria-label":!0});var V=h(o);u=k(V,"#"),V.forEach(n),y=x(s),g=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,style:!0,"aria-label":!0});var S=h(g);G=k(S,"Waktu"),S.forEach(n),I=x(s),m=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,"aria-label":!0,style:!0});var X=h(m);P=k(X,"Endpoint"),X.forEach(n),W=x(s),T=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,"aria-label":!0,style:!0});var L=h(T);N=k(L,"Communication Attempt"),L.forEach(n),B=x(s),D=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,style:!0,"aria-label":!0});var z=h(D);R=k(z,"Response"),z.forEach(n),A=x(s),p=d(s,"TH",{scope:!0,class:!0,tabindex:!0,"aria-controls":!0,rowspan:!0,colspan:!0,style:!0,"aria-label":!0});var q=h(p);C=k(q,"Action"),q.forEach(n),s.forEach(n),l.forEach(n),j=x(b),E=d(b,"TBODY",{});var U=h(E);for(let Q=0;Q<_.length;Q+=1)_[Q].l(U);U.forEach(n),b.forEach(n),this.h()},h(){t(o,"scope","col"),t(o,"class","sorting"),t(o,"tabindex","0"),t(o,"aria-controls","DataTables_Table_0"),t(o,"rowspan","1"),t(o,"colspan","1"),K(o,"width","27px"),t(o,"aria-sort","descending"),t(o,"aria-label","#: activate to sort column ascending"),t(g,"scope","col"),t(g,"class","sorting"),t(g,"tabindex","0"),t(g,"aria-controls","DataTables_Table_0"),t(g,"rowspan","1"),t(g,"colspan","1"),K(g,"width","120px"),t(g,"aria-label","Cover: activate to sort column ascending"),t(m,"scope","col"),t(m,"class","sorting"),t(m,"tabindex","0"),t(m,"aria-controls","DataTables_Table_0"),t(m,"rowspan","1"),t(m,"colspan","1"),t(m,"aria-label","Name: activate to sort column ascending"),K(m,"width","250px"),t(T,"scope","col"),t(T,"class","sorting"),t(T,"tabindex","0"),t(T,"aria-controls","DataTables_Table_0"),t(T,"rowspan","1"),t(T,"colspan","1"),t(T,"aria-label","Name: activate to sort column ascending"),K(T,"width","200px"),t(D,"scope","col"),t(D,"class","sorting"),t(D,"tabindex","0"),t(D,"aria-controls","DataTables_Table_0"),t(D,"rowspan","1"),t(D,"colspan","1"),K(D,"width","90px"),t(D,"aria-label","Tipe Kelas: activate to sort column ascending"),t(p,"scope","col"),t(p,"class","sorting"),t(p,"tabindex","0"),t(p,"aria-controls","DataTables_Table_0"),t(p,"rowspan","1"),t(p,"colspan","1"),K(p,"width","148px"),t(p,"aria-label","Action: activate to sort column ascending"),t(e,"class","table datatables dataTable no-footer"),t(e,"id","DataTables_Table_0"),t(e,"role","grid"),t(e,"aria-describedby","DataTables_Table_0_info")},m(f,b){O(f,e,b),a(e,i),a(i,r),a(r,o),a(o,u),a(r,y),a(r,g),a(g,G),a(r,I),a(r,m),a(m,P),a(r,W),a(r,T),a(T,N),a(r,B),a(r,D),a(D,R),a(r,A),a(r,p),a(p,C),a(e,j),a(e,E);for(let l=0;l<_.length;l+=1)_[l].m(E,null)},p(f,b){if(b&1){H=f[0].logs;let l;for(l=0;l<H.length;l+=1){const s=ot(f,H,l);_[l]?_[l].p(s,b):(_[l]=nt(s),_[l].c(),_[l].m(E,null))}for(;l<_.length;l+=1)_[l].d(1);_.length=H.length}},d(f){f&&n(e),ft(_,f)}}}function gt(v){let e,i,r;return{c(){e=c("a"),i=w("Details"),this.h()},l(o){e=d(o,"A",{href:!0,class:!0,target:!0});var u=h(e);i=k(u,"Details"),u.forEach(n),this.h()},h(){t(e,"href",r="/log/"+v[2].id),t(e,"class","btn btn-secondary"),t(e,"target","_self")},m(o,u){O(o,e,u),a(e,i)},p(o,u){u&1&&r!==(r="/log/"+o[2].id)&&t(e,"href",r)},d(o){o&&n(e)}}}function Tt(v){let e,i,r;return{c(){e=c("a"),i=w("Details"),this.h()},l(o){e=d(o,"A",{style:!0,href:!0,class:!0,target:!0});var u=h(e);i=k(u,"Details"),u.forEach(n),this.h()},h(){K(e,"background","#ffc107"),t(e,"href",r="/log/"+v[2].id),t(e,"class","btn btn-secondary"),t(e,"target","_self")},m(o,u){O(o,e,u),a(e,i)},p(o,u){u&1&&r!==(r="/log/"+o[2].id)&&t(e,"href",r)},d(o){o&&n(e)}}}function nt(v){let e,i,r=(v[4]+=1)+"",o,u,y,g=rt(new Date(v[2].created_at),"dd/MM/yyyy HH:mm:ss")+"",G,I,m,P="["+v[2].type+"] "+v[2].host_addr,W,T,N,B=v[2].trial_attempt+"",D,R,A,p=v[2].response_code+"",C,j,E,H;function _(l,s){return l[2].is_resolved=="N"?Tt:gt}let f=_(v),b=f(v);return{c(){e=c("tr"),i=c("th"),o=w(r),u=M(),y=c("td"),G=w(g),I=M(),m=c("td"),W=w(P),T=M(),N=c("td"),D=w(B),R=M(),A=c("td"),C=w(p),j=M(),E=c("td"),b.c(),H=M(),this.h()},l(l){e=d(l,"TR",{class:!0});var s=h(e);i=d(s,"TH",{scope:!0,class:!0});var V=h(i);o=k(V,r),V.forEach(n),u=x(s),y=d(s,"TD",{});var S=h(y);G=k(S,g),S.forEach(n),I=x(s),m=d(s,"TD",{width:!0});var X=h(m);W=k(X,P),X.forEach(n),T=x(s),N=d(s,"TD",{});var L=h(N);D=k(L,B),L.forEach(n),R=x(s),A=d(s,"TD",{});var z=h(A);C=k(z,p),z.forEach(n),j=x(s),E=d(s,"TD",{});var q=h(E);b.l(q),q.forEach(n),H=x(s),s.forEach(n),this.h()},h(){t(i,"scope","row"),t(i,"class","sorting"),t(m,"width","40%"),t(e,"class","align-middle even")},m(l,s){O(l,e,s),a(e,i),a(i,o),a(e,u),a(e,y),a(y,G),a(e,I),a(e,m),a(m,W),a(e,T),a(e,N),a(N,D),a(e,R),a(e,A),a(A,C),a(e,j),a(e,E),b.m(E,null),a(e,H)},p(l,s){s&1&&g!==(g=rt(new Date(l[2].created_at),"dd/MM/yyyy HH:mm:ss")+"")&&Y(G,g),s&1&&P!==(P="["+l[2].type+"] "+l[2].host_addr)&&Y(W,P),s&1&&B!==(B=l[2].trial_attempt+"")&&Y(D,B),s&1&&p!==(p=l[2].response_code+"")&&Y(C,p),f===(f=_(l))&&b?b.p(l,s):(b.d(1),b=f(l),b&&(b.c(),b.m(E,null)))},d(l){l&&n(e),b.d()}}}function Dt(v){let e,i,r,o,u,y,g,G,I,m,P,W,T,N,B,D,R,A,p,C,j,E,H,_;function f(s,V){return s[0]?mt:vt}let b=f(v),l=b(v);return{c(){e=c("meta"),i=M(),r=c("div"),o=c("div"),u=c("div"),y=c("h1"),g=w("Dashboard - Riwayat Gagal"),G=M(),I=c("p"),m=w("Daftar komunikasi API yang belum berhasil "),P=c("br"),W=w("akibat kegagalan di sisi "),T=c("i"),N=w("endpoint"),B=w(" tujuan"),D=M(),R=c("div"),A=c("div"),p=c("div"),C=c("div"),j=c("div"),E=c("div"),H=c("div"),_=c("div"),l.c(),this.h()},l(s){const V=ut("svelte-ai7pmv",document.head);e=d(V,"META",{name:!0,content:!0}),V.forEach(n),i=x(s),r=d(s,"DIV",{class:!0});var S=h(r);o=d(S,"DIV",{class:!0});var X=h(o);u=d(X,"DIV",{class:!0});var L=h(u);y=d(L,"H1",{class:!0});var z=h(y);g=k(z,"Dashboard - Riwayat Gagal"),z.forEach(n),G=x(L),I=d(L,"P",{class:!0});var q=h(I);m=k(q,"Daftar komunikasi API yang belum berhasil "),P=d(q,"BR",{class:!0}),W=k(q,"akibat kegagalan di sisi "),T=d(q,"I",{});var U=h(T);N=k(U,"endpoint"),U.forEach(n),B=k(q," tujuan"),q.forEach(n),L.forEach(n),X.forEach(n),S.forEach(n),D=x(s),R=d(s,"DIV",{class:!0});var Q=h(R);A=d(Q,"DIV",{class:!0,id:!0});var F=h(A);p=d(F,"DIV",{class:!0});var J=h(p);C=d(J,"DIV",{class:!0});var Z=h(C);j=d(Z,"DIV",{class:!0});var tt=h(j);E=d(tt,"DIV",{id:!0,class:!0});var et=h(E);H=d(et,"DIV",{class:!0});var at=h(H);_=d(at,"DIV",{class:!0});var st=h(_);l.l(st),st.forEach(n),at.forEach(n),et.forEach(n),tt.forEach(n),Z.forEach(n),J.forEach(n),F.forEach(n),Q.forEach(n),this.h()},h(){document.title="Dashboard - ReCAM",t(e,"name","description"),t(e,"content","Dashboard ReCAM system"),t(y,"class","header-primary mb-3"),t(P,"class","desktop"),t(I,"class","subtitle-primary"),t(u,"class","col-lg-12"),t(o,"class","row"),t(r,"class","container"),t(_,"class","col-sm-12"),t(H,"class","row"),t(E,"id","DataTables_Table_0_wrapper"),t(E,"class","dataTables_wrapper dt-bootstrap5 no-footer"),t(j,"class","table-responsive pb-3"),t(C,"class","default-card"),t(p,"class","col-lg-12 col-12"),t(A,"class","row basic-form my-5"),t(A,"id","list"),t(R,"class","container")},m(s,V){a(document.head,e),O(s,i,V),O(s,r,V),a(r,o),a(o,u),a(u,y),a(y,g),a(u,G),a(u,I),a(I,m),a(I,P),a(I,W),a(I,T),a(T,N),a(I,B),O(s,D,V),O(s,R,V),a(R,A),a(A,p),a(p,C),a(C,j),a(j,E),a(E,H),a(H,_),l.m(_,null)},p(s,[V]){b===(b=f(s))&&l?l.p(s,V):(l.d(1),l=b(s),l&&(l.c(),l.m(_,null)))},i:$,o:$,d(s){n(e),s&&n(i),s&&n(r),s&&n(D),s&&n(R),l.d()}}}function Et(v,e,i){let r;ht(v,lt,u=>i(1,r=u));let o;return _t(async()=>{const y=await(await fetch(bt.PUBLIC_API_ENDPOINT+"/logs/5XX",{method:"GET",headers:{"content-type":"application/json",Authorization:r}})).json();y.error?pt(lt,r=null,r):i(0,o=y)}),[o]}class At extends it{constructor(e){super(),ct(this,e,Et,Dt,dt,{})}}export{At as default};