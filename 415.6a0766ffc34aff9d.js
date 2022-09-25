"use strict";(self.webpackChunkngxapp=self.webpackChunkngxapp||[]).push([[415],{7415:(w,a,l)=>{l.r(a),l.d(a,{PostsModule:()=>M});var r=l(6895),i=l(2045),p=l(3710),t=l(8256),c=l(6441),d=l(529),g=l(262),m=l(9646),v=l(2340),f=l(1273);let h=(()=>{class e{constructor(){this.httpService=(0,t.f3M)(d.eN),this.loggerService=(0,t.f3M)(f.m)}getPosts(){return this.httpService.get(`${v.N.API_URL}/photos`,{reportProgress:!0}).pipe((0,g.K)(o=>(this.loggerService.log("PostService: getPosts"),(0,m.of)([]))))}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),u=(()=>{class e{constructor(){this.post=null}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-post"]],inputs:{post:"post"},decls:8,vars:3,consts:[[1,"row","g-0","border","rounded","overflow-hidden","flex-md-row","mb-4","shadow-sm","h-md-250","position-relative"],[1,"col","p-4","d-flex","flex-column","position-static"],[1,"mb-2"],[1,"card-text","mb-auto"],[1,"col-auto","d-none","d-lg-block"],["loading","lazy",1,"img-thumbnail","rounded",3,"src","alt"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3),t.qZA(),t.TgZ(4,"p",3),t._uU(5," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "),t.qZA()(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()),2&o&&(t.xp6(3),t.Oqu(null==s.post?null:s.post.title),t.xp6(4),t.Q6J("src",null==s.post?null:s.post.url,t.LSH)("alt",null==s.post?null:s.post.title))},styles:["img[_ngcontent-%COMP%]{height:190px;max-height:190px}"],changeDetection:0}),e})();function y(e,n){1&e&&(t.TgZ(0,"div",10)(1,"h3"),t._uU(2,"No posts were found."),t.qZA()())}function P(e,n){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"app-post",14),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Q6J("post",o)}}function C(e,n){if(1&e&&(t.TgZ(0,"ag-virtual-scroll",11,12),t.YNc(2,P,2,1,"div",13),t.qZA()),2&e){const o=t.MAs(1),s=t.oxw().ngIf;t.Q6J("items",s)("min-row-height",190),t.xp6(2),t.Q6J("ngForOf",o.items)}}function O(e,n){if(1&e&&(t.TgZ(0,"div",6)(1,"div",7),t.YNc(2,y,3,0,"div",8),t.YNc(3,C,3,3,"ng-template",null,9,t.W1O),t.qZA()()),2&e){const o=n.ngIf,s=t.MAs(4);t.xp6(2),t.Q6J("ngIf",0==o.length)("ngIfElse",s)}}const x=[{path:"",component:(()=>{class e extends c.H{constructor(){super(),this.postService=(0,t.f3M)(h),this.postList$=this.postService.getPosts()}ngOnInit(){}trackByFn(o,s){return s?.id}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-posts"]],features:[t.qOj],decls:8,vars:3,consts:[[1,"py-1","text-center","container"],[1,"row","py-lg-2"],[1,"col-lg-6","col-md-8","mx-auto"],[1,"fw-light"],[1,"album","py-2","bg-light"],["class","container",4,"ngIf"],[1,"container"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["class","col",4,"ngIf","ngIfElse"],["elseBlk",""],[1,"col"],["height","450px",1,"",3,"items","min-row-height"],["vs",""],["class","col",4,"ngFor","ngForOf"],[3,"post"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Lastest Posts"),t.qZA()()(),t.TgZ(5,"div",4),t.YNc(6,O,5,2,"div",5),t.ALo(7,"async"),t.qZA()()),2&o&&(t.xp6(6),t.Q6J("ngIf",t.lcZ(7,1,s.postList$)))},dependencies:[r.sg,r.O5,p.th,u,r.Ov],styles:[".bd-placeholder-img[_ngcontent-%COMP%]{font-size:1.125rem;text-anchor:middle;-webkit-user-select:none;user-select:none}@media (min-width: 768px){.bd-placeholder-img-lg[_ngcontent-%COMP%]{font-size:3.5rem}}.b-example-divider[_ngcontent-%COMP%]{height:3rem;background-color:#0000001a;border:solid rgba(0,0,0,.15);border-width:1px 0;box-shadow:inset 0 .5em 1.5em #0000001a,inset 0 .125em .5em #00000026}.b-example-vr[_ngcontent-%COMP%]{flex-shrink:0;width:1.5rem;height:100vh}.bi[_ngcontent-%COMP%]{vertical-align:-.125em;fill:currentColor}.nav-scroller[_ngcontent-%COMP%]{position:relative;z-index:2;height:2.75rem;overflow-y:hidden}.nav-scroller[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{display:flex;flex-wrap:nowrap;padding-bottom:1rem;margin-top:-1px;overflow-x:auto;text-align:center;white-space:nowrap;-webkit-overflow-scrolling:touch}.dapplets-overlay-frame[_ngcontent-%COMP%]{position:fixed;z-index:2147483647;top:0;left:100%;height:100%;margin:0;padding:0;border:0;background:#fff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-size:14px;line-height:20px;direction:ltr;-webkit-tap-highlight-color:rgba(255,255,255,0)}.dapplets-overlay-collapsed[_ngcontent-%COMP%]{transform:translate(0)!important}.dapplets-overlay-hidden[_ngcontent-%COMP%]{display:none}@media screen and (min-width: 0){.dapplets-overlay-frame[_ngcontent-%COMP%]{width:auto!important;transition:transform .15s cubic-bezier(.55,0,.2,.8);transform:translate(-100%)}}.dapplets-overlay-frame.dapplets-overlay-collapsed[_ngcontent-%COMP%]   [class*=toggleOverlay][_ngcontent-%COMP%], .dapplets-overlay-frame.dapplets-overlay-collapsed[_ngcontent-%COMP%]   .toggleOverlay[_ngcontent-%COMP%], .dapplets-overlay-collapsed[_ngcontent-%COMP%]   .toggleOverlay[_ngcontent-%COMP%]{left:-100px}@media screen and (min-width: 0) and (max-width: 640px){.dapplets-overlay-frame[_ngcontent-%COMP%]{width:100%!important;transition:transform .15s cubic-bezier(.55,0,.2,.8);transform:translate(-100%)}.dapplets-overlay-frame.dapplets-overlay-collapsed[_ngcontent-%COMP%]   [class*=toggleOverlay][_ngcontent-%COMP%], .dapplets-overlay-frame.dapplets-overlay-collapsed[_ngcontent-%COMP%]   .toggleOverlay[_ngcontent-%COMP%], .dapplets-overlay-collapsed[_ngcontent-%COMP%]   .toggleOverlay[_ngcontent-%COMP%]{left:-100px}}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.ez,p.Sl,i.Bz.forChild(x),i.Bz]}),e})()}}]);