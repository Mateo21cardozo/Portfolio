import{Ca as $,Da as A,Ea as F,Fa as c,Ga as u,Ha as d,Ia as U,Ja as z,L as l,M as B,O as C,Oa as m,Pa as j,Q as h,Qa as V,R as D,Ra as H,V as T,W as R,X as O,_a as G,ha as P,la as k,na as w,qa as g,ra as y,ta as N,ya as x}from"./chunk-VNTZ2B4D.js";var X=null;function b(){return X}function ct(i){X??=i}var Y=class{};var I=new C(""),M=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=l({token:e,factory:()=>D(se),providedIn:"platform"});let i=e;return i})(),dt=new C(""),se=(()=>{let e=class e extends M{constructor(){super(),this._doc=D(I),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return b().getBaseHref(this._doc)}onPopState(t){let n=b().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=b().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=l({token:e,factory:()=>new e,providedIn:"platform"});let i=e;return i})();function L(i,e){if(i.length==0)return e;if(e.length==0)return i;let s=0;return i.endsWith("/")&&s++,e.startsWith("/")&&s++,s==2?i+e.substring(1):s==1?i+e:i+"/"+e}function Z(i){let e=i.match(/#|\?|$/),s=e&&e.index||i.length,t=s-(i[s-1]==="/"?1:0);return i.slice(0,t)+i.slice(s)}function f(i){return i&&i[0]!=="?"?"?"+i:i}var E=(()=>{let e=class e{historyGo(t){throw new Error("")}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=l({token:e,factory:()=>D(oe),providedIn:"root"});let i=e;return i})(),J=new C(""),oe=(()=>{let e=class e extends E{constructor(t,n){super(),this._platformLocation=t,this._removeListenerFns=[],this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??D(I).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return L(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+f(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,o){let a=this.prepareExternalUrl(r+f(o));this._platformLocation.pushState(t,n,a)}replaceState(t,n,r,o){let a=this.prepareExternalUrl(r+f(o));this._platformLocation.replaceState(t,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(h(M),h(J,8))},e.\u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),lt=(()=>{let e=class e extends E{constructor(t,n){super(),this._platformLocation=t,this._baseHref="",this._removeListenerFns=[],n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=L(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,r,o){let a=this.prepareExternalUrl(r+f(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.pushState(t,n,a)}replaceState(t,n,r,o){let a=this.prepareExternalUrl(r+f(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}};e.\u0275fac=function(n){return new(n||e)(h(M),h(J,8))},e.\u0275prov=l({token:e,factory:e.\u0275fac});let i=e;return i})(),ae=(()=>{let e=class e{constructor(t){this._subject=new P,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=de(Z(W(n))),this._locationStrategy.onPopState(r=>{this._subject.emit({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+f(n))}normalize(t){return e.stripTrailingSlash(ce(this._basePath,W(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+f(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+f(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n,complete:r})}};e.normalizeQueryParams=f,e.joinWithSlash=L,e.stripTrailingSlash=Z,e.\u0275fac=function(n){return new(n||e)(h(E))},e.\u0275prov=l({token:e,factory:()=>ue(),providedIn:"root"});let i=e;return i})();function ue(){return new ae(h(E))}function ce(i,e){if(!i||!e.startsWith(i))return e;let s=e.substring(i.length);return s===""||["/",";","?","#"].includes(s[0])?s:e}function W(i){return i.replace(/\/index.html$/,"")}function de(i){if(new RegExp("^(https?:)?//").test(i)){let[,s]=i.split(/\/\/[^\/]+/);return s}return i}function ft(i,e){e=encodeURIComponent(e);for(let s of i.split(";")){let t=s.indexOf("="),[n,r]=t==-1?[s,""]:[s.slice(0,t),s.slice(t+1)];if(n.trim()===e)return decodeURIComponent(r)}return null}var S=class{constructor(e,s,t,n){this.$implicit=e,this.ngForOf=s,this.index=t,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Q=(()=>{let e=class e{set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}constructor(t,n,r){this._viewContainer=t,this._template=n,this._differs=r,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;if(!this._differ&&t)if(0)try{}catch{}else this._differ=this._differs.find(t).create(this.ngForTrackBy)}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((r,o,a)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new S(r.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)n.remove(o===null?void 0:o);else if(o!==null){let p=n.get(o);n.move(p,a),K(p,r)}});for(let r=0,o=n.length;r<o;r++){let p=n.get(r).context;p.index=r,p.count=o,p.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);K(o,r)})}static ngTemplateContextGuard(t,n){return!0}};e.\u0275fac=function(n){return new(n||e)(y(x),y(N),y(G))},e.\u0275dir=O({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let i=e;return i})();function K(i,e){i.context.$implicit=e.item}var ee=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=R({type:e}),e.\u0275inj=B({});let i=e;return i})(),le="browser",fe="server";function he(i){return i===le}function ht(i){return i===fe}var gt=(()=>{let e=class e{};e.\u0275prov=l({token:e,providedIn:"root",factory:()=>he(D(k))?new v(D(I),window):new _});let i=e;return i})(),v=class{constructor(e,s){this.document=e,this.window=s,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let s=ge(this.document,e);s&&(this.scrollToElement(s),s.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let s=e.getBoundingClientRect(),t=s.left+this.window.pageXOffset,n=s.top+this.window.pageYOffset,r=this.offset();this.window.scrollTo(t-r[0],n-r[1])}};function ge(i,e){let s=i.getElementById(e)||i.getElementsByName(e)[0];if(s)return s;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let t=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),n=t.currentNode;for(;n;){let r=n.shadowRoot;if(r){let o=r.getElementById(e)||r.querySelector(`[name="${e}"]`);if(o)return o}n=t.nextNode()}}return null}var _=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},q=class{};function pe(i,e){if(i&1&&(U(0),c(1,"div",9)(2,"div",10)(3,"div",11)(4,"div",12),d(5,"i",13),u()(),d(6,"img",14),u()(),c(7,"div",15)(8,"div",16)(9,"div",17)(10,"div",18),d(11,"button",19),u(),c(12,"div",20)(13,"div",1)(14,"div",7)(15,"div",21)(16,"h2",22),m(17),u(),c(18,"div",3),d(19,"div",4),c(20,"div",5),d(21,"i",6),u(),d(22,"div",4),u(),d(23,"img",23),c(24,"p",24),m(25),u(),c(26,"button",25),d(27,"i",26),m(28," Close Window "),u()()()()()()()(),z()),i&2){let s=e.$implicit;g(2),A("data-bs-target","#"+s.id),g(4),F("src",s.logo,w)("alt",s.title),g(),A("id",s.id)("aria-labelledby",s.id),g(10),V(" ",s.title," "),g(6),F("src",s.logo,w)("alt",s.title),g(2),j(s.description)}}var yt=(()=>{let e=class e{constructor(){this.projects=[{id:"bricke",title:"Bricke",logo:"assets/img/portfolio/logo.svg",description:"En Bricke, un e-commerce dedicado al intercambio y venta de productos entre personas, trabajo como junior front-end developer. Mis responsabilidades incluyen el an\xE1lisis de problemas, la definici\xF3n de casos de uso y otras tareas relacionadas. Utilizo Angular para el desarrollo del front-end y Figma para el dise\xF1o de vistas. El equipo est\xE1 compuesto por un l\xEDder t\xE9cnico front-end, dos desarrolladores backend, una dise\xF1adora de producto y un tester. Empleamos metodolog\xEDas Kanban y gestionamos el proyecto mediante Trello."},{id:"serverless",title:"Serverless Project",logo:"assets/img/portfolio/serverlessLogo.png",description:"Este proyecto utiliza tecnolog\xEDas como Serverless y AWS Lambda para el back-end, y Angular CLI para el front-end, con JavaScript como lenguaje principal. La aplicaci\xF3n se enfoca en la presentaci\xF3n y manejo de personajes de Dragon Ball. Conecta en una lambda que consume una API de Dragon Ball para obtener y gestionar informaci\xF3n sobre los personajes."},{id:"spotiApp",title:"SpotiApp Project",logo:"assets/img/portfolio/spotiappLogo.jpg",description:"Este proyecto, desarrollado a partir de un curso de Udemy, utiliza Angular y Bootstrap para crear una aplicaci\xF3n que consume la API de Spotify. Incluye la gesti\xF3n de rutas y par\xE1metros en Angular, carruseles con Bootstrap 4, y la obtenci\xF3n de datos sobre artistas, \xE1lbumes y audio mediante HTTP. Adem\xE1s, maneja datos as\xEDncronos con observables, enlaza campos de texto usando ngModel, y ofrece widgets de Spotify y reproducci\xF3n de audio con HTML5, as\xED como integraci\xF3n de mapas."},{id:"acyac",title:"Acyac",logo:"assets/img/portfolio/PHP-logo.png",description:" ACyac es un sitio web dise\xF1ado para gestionar eventos en una biblioteca popular y sal\xF3n de eventos. El sitio permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los eventos, La interfaz ha sido desarrollada utilizando Bootstrap,os datos de los eventos se almacenan en una base de datos local alojada en un servidor XAMPP. La conexi\xF3n entre la base de datos y la aplicaci\xF3n se realiza mediante PHP"},{id:"formularios",title:"Formularios Templates y Reactivos",logo:"assets/img/portfolio/formularioLogo.png",description:"Este proyecto en Angular CLI usa una API de pa\xEDses para demostrar el manejo de formularios, incluyendo el uso de `ngModel`, validaciones predefinidas y personalizadas, y validaciones as\xEDncronas. Tambi\xE9n cubre la realizaci\xF3n de submit con `ngSubmit`, el env\xEDo de datos solo cuando el formulario es v\xE1lido, la creaci\xF3n de formularios en el componente, la carga de informaci\xF3n por defecto y la suscripci\xF3n a cambios en los valores del formulario."},{id:"theweekend",title:"the Weekend Project",logo:"assets/img/portfolio/theweekendLogo.png",description:"The Weekend es un software dise\xF1ado para gestionar los turnos en una barber\xEDa que lleva el mismo nombre. El proyecto cuenta con un backend local desarrollado en JSON, y est\xE1 construido utilizando Bootstrap para el dise\xF1o del sitio web. La aplicaci\xF3n se conecta al backend local en Node.js, permitiendo a los usuarios reservar citas a trav\xE9s de formularios de reservas y completar encuestas de satisfacci\xF3n para evaluar su experiencia."},{id:"farmapp",title:"FarmApp",logo:"assets/img/portfolio/farmappLogo.png",description:"Farmapp es una aplicaci\xF3n en desarrollo dise\xF1ada para facilitar la b\xFAsqueda de farmacias de turno cercanas y permitir a los usuarios contactarlas desde la comodidad de su hogar. Utilizando el framework Ionic y la integraci\xF3n con Mapbox, Farmapp ofrece una experiencia intuitiva para localizar farmacias en tiempo real. Con un backend construido en Serverless Framework, la app asegura eficiencia y escalabilidad. El dise\xF1o de la aplicaci\xF3n, realizado en Figma, garantiza una experiencia de usuario fluida. Estoy trabajando en la app junto al equipo de Bricke, enfocados en mejorar la utilidad de Farmapp y prepar\xE1ndola para su lanzamiento. Farmapp tiene el potencial de convertirse en una herramienta esencial para quienes necesitan acceso r\xE1pido y c\xF3modo a los servicios farmac\xE9uticos."},{id:"heroesApp",title:"Heroes Project",logo:"assets/img/portfolio/angularLogo.png",description:"Este proyecto, desarrollado a partir de un curso de Udemy, utiliza TypeScript, Angular CLI y Bootstrap. Implementa el m\xF3dulo HTTP para interactuar con los servicios RESTful de Firebase, realizando operaciones como POST, GET, DELETE y PUT. Tambi\xE9n incluye configuraciones en la consola de Firebase para gestionar los servicios y datos."},{id:"listaTareas",title:"Listas Tareas en Node",logo:"assets/img/portfolio/listaTareasLogo.jpg",description:"Este proyecto es una aplicaci\xF3n de consola interactiva desarrollada como parte de un curso de Udemy, utilizando Node.js como framework principal. La aplicaci\xF3n emplea paquetes como Inquirer y Yargs para crear una experiencia de usuario fluida y din\xE1mica en la l\xEDnea de comandos. Este enfoque permite manejar diversas operaciones de manera eficiente y con una interfaz amigable para el usuario."}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=T({type:e,selectors:[["app-portfolio"]],standalone:!0,features:[H],decls:11,vars:1,consts:[["id","portfolio",1,"page-section","portfolio","my-md-5"],[1,"container"],[1,"page-section-heading","text-center","text-uppercase","text-secondary","mb-0"],[1,"divider-custom"],[1,"divider-custom-line"],[1,"divider-custom-icon"],[1,"fas","fa-star"],[1,"row","justify-content-center"],[4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","mb-5"],["data-bs-toggle","modal",1,"portfolio-item","mx-auto"],[1,"portfolio-item-caption","d-flex","align-items-center","justify-content-center","h-100","w-100"],[1,"portfolio-item-caption-content","text-center","text-white"],[1,"fas","fa-plus","fa-3x"],[1,"img-fluid",3,"src","alt"],["tabindex","-1","aria-hidden","true",1,"portfolio-modal","modal","fade"],[1,"modal-dialog","modal-xl"],[1,"modal-content"],[1,"modal-header","border-0"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body","text-center","pb-5"],[1,"col-lg-8","image-container"],[1,"portfolio-modal-title","text-secondary","text-uppercase","mb-0"],[1,"rounded","mb-5",3,"src","alt"],[1,"mb-4"],["data-bs-dismiss","modal",1,"btn","btn-primary"],[1,"fas","fa-xmark","fa-fw"]],template:function(n,r){n&1&&(c(0,"section",0)(1,"div",1)(2,"h2",2),m(3," Portfolio "),u(),c(4,"div",3),d(5,"div",4),c(6,"div",5),d(7,"i",6),u(),d(8,"div",4),u(),c(9,"div",7),$(10,pe,29,9,"ng-container",8),u()()()),n&2&&(g(10),F("ngForOf",r.projects))},dependencies:[ee,Q]});let i=e;return i})();export{b as a,ct as b,Y as c,I as d,dt as e,E as f,oe as g,lt as h,ae as i,ft as j,ee as k,le as l,ht as m,gt as n,q as o,yt as p};
