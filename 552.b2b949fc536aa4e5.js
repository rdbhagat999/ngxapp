"use strict";(self.webpackChunkngxapp=self.webpackChunkngxapp||[]).push([[552],{6441:(v,I,u)=>{u.d(I,{H:()=>y});var i=u(8256),m=u(727),k=u(1273);let y=(()=>{class p{constructor(){this.logger=(0,i.f3M)(k.m),this.subscribers=new m.w0}addSafeSubscriber(g){this.subscribers.add(g),this.logger.log("added subscription")}ngOnDestroy(){this.subscribers.unsubscribe(),this.logger.log("removed subscription")}}return p.\u0275fac=function(g){return new(g||p)},p.\u0275cmp=i.Xpm({type:p,selectors:[["app-base"]],decls:2,vars:0,template:function(g,S){1&g&&(i.TgZ(0,"p"),i._uU(1,"base works!"),i.qZA())}}),p})()},3710:(v,I,u)=>{u.d(I,{Sl:()=>M,th:()=>P});var i=u(8256),m=u(6895),k=u(9751);const y=["temp"];function p(n,o){1&n&&i.Hsn(0)}function f(n,o){if(1&n&&i.GkF(0,2),2&n){i.oxw();const t=i.MAs(1);i.Q6J("ngTemplateOutlet",t)}}const g=["*"],S=["itemsContainer"];function T(n,o){if(1&n&&(i.TgZ(0,"ag-vs-item"),i.ALo(1,"stickedClasses"),i.GkF(2,4),i.qZA()),2&n){const t=i.oxw();i.Tol(i.lcZ(1,9,t.currentStickyItem.comp.el.classList.value)),i.Udp("top",t.currentScroll-(t.currentStickyItem.diffTop?t.currentStickyItem.diffTop:0),"px")("height",t.currentStickyItem.height,"px")("min-height",t.currentStickyItem.height,"px"),i.xp6(2),i.Q6J("ngTemplateOutlet",t.currentStickyItem.comp.temp)}}const _=function(n){return{"sticked-outside":n}};class b{constructor(o){Object.assign(this,o)}}let x=(()=>{class n{constructor(t,e){this.elRef=t,this.appRef=e,this.class=!0,this.sticky=!1,this.viewOk=!1,this.onStickyChange=new i.vpe(!1),this.isSticked=!1}get el(){return this.elRef&&this.elRef.nativeElement}ngOnInit(){}ngAfterViewInit(){}ngOnChanges(t){"sticky"in t&&this.onStickyChange.next(this.sticky)}forceUpdateInputs(){this.viewOk=!1,this.appRef.tick(),this.viewOk=!0}getHtml(){return this.el.outerHTML}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(i.z2F))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ag-vs-item"]],viewQuery:function(t,e){if(1&t&&i.Gf(y,5),2&t){let s;i.iGM(s=i.CRH())&&(e.temp=s.first)}},hostVars:2,hostBindings:function(t,e){2&t&&i.ekj("ag-vs-item",e.class)},inputs:{sticky:"sticky"},features:[i.TTD],ngContentSelectors:g,decls:3,vars:1,consts:[["temp",""],[3,"ngTemplateOutlet",4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,p,1,0,"ng-template",null,0,i.W1O),i.YNc(2,f,1,1,"ng-container",1)),2&t&&(i.xp6(2),i.Q6J("ngIf",!e.isSticked))},dependencies:[m.O5,m.tP],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%] > ng-template[_ngcontent-%COMP%]{display:inherit;width:inherit;height:inherit}"]}),n})(),A=(()=>{class n{constructor(){this.exceptionClasses=["ag-virtual-scroll-odd","ag-virtual-scroll-even"]}transform(t){return t?(t.includes(" ")?t.split(" "):[t]).filter(s=>!this.exceptionClasses.some(l=>l===s)).join(" "):""}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=i.Yjl({name:"stickedClasses",type:n,pure:!0}),n})(),P=(()=>{class n{constructor(t,e){this.elRef=t,this.renderer=e,this.minRowHeight=40,this.height="auto",this.originalItems=[],this.onItemsRender=new i.vpe,this.prevOriginalItems=[],this.items=[],this.subscripAllVsItem=[],this._indexCurrentSticky=-1,this.indexNextSticky=-1,this.indexesPrevStick=[],this.currentScroll=0,this.contentHeight=0,this.paddingTop=0,this.startIndex=0,this.endIndex=0,this.isTable=!1,this.scrollIsUp=!1,this.lastScrollIsUp=!1,this.previousItemsHeight=[],this.containerWidth=0}get indexCurrentSticky(){return this._indexCurrentSticky}set indexCurrentSticky(t){this._indexCurrentSticky=t;let e=t===this.indexPrevSticky;!e&&t>=0?this.findCurrentStickyByIndex():(e||(this.indexNextSticky=-1),this.currentStickyItem&&(this.currentStickyItem.comp.isSticked=!1),this.currentStickyItem=null),this.prepareDataItems()}get indexPrevSticky(){return this.indexesPrevStick.length?this.indexesPrevStick[0]:-1}set indexPrevSticky(t){t<0?this.indexesPrevStick.length>0&&(this.indexesPrevStick=this.indexesPrevStick.slice(1)):this.indexesPrevStick.some(e=>e===t)||this.indexesPrevStick.push(t),this.indexesPrevStick.length&&(this.indexesPrevStick=this.indexesPrevStick.sort((e,s)=>s-e))}get itemsNoSticky(){return this.currentStickyItem?this.items.filter(t=>this.originalItems[this.currentStickyItem.index]!==t):this.items}get vsItems(){return this.queryVsItems&&this.queryVsItems.toArray()||[]}get numberItemsRendred(){return this.endIndex-this.startIndex}get el(){return this.elRef&&this.elRef.nativeElement}get itemsContainerEl(){return this.itemsContainerElRef&&this.itemsContainerElRef.nativeElement}ngAfterViewInit(){this.queryVsItems.changes.subscribe(()=>this.checkStickItem(this.scrollIsUp))}ngOnInit(){this.renderer.listen(this.el,"scroll",this.onScroll.bind(this))}ngOnChanges(t){setTimeout(()=>{"height"in t&&(this.el.style.height=this.height),"minRowHeight"in t&&"string"==typeof this.minRowHeight&&(parseInt(this.minRowHeight)?this.minRowHeight=parseInt(this.minRowHeight):(console.warn('The [min-row-height] @Input is invalid, the value must be of type "number".'),this.minRowHeight=40)),"originalItems"in t&&(this.originalItems||(this.originalItems=[]),this.currentAndPrevItemsAreDiff()?(this.previousItemsHeight=new Array(this.originalItems.length).fill(null),0!==this.el.scrollTop?this.el.scrollTop=0:(this.currentScroll=0,this.prepareDataItems(),this.checkIsTable(),this.queryVsItems.notifyOnChanges())):(this.originalItems.length>this.prevOriginalItems.length&&(this.previousItemsHeight=this.previousItemsHeight.concat(new Array(this.originalItems.length-this.prevOriginalItems.length).fill(null))),this.prepareDataItems(),this.checkIsTable(),this.queryVsItems.notifyOnChanges()),this.prevOriginalItems=this.originalItems)})}ngAfterContentChecked(){let t=this.itemsContainerEl&&this.itemsContainerEl.clientWidth;t!==this.containerWidth&&(this.containerWidth=t),this.manipuleRenderedItems()}currentAndPrevItemsAreDiff(){if(this.originalItems.length>=this.prevOriginalItems.length){let e=this.prevOriginalItems.length-1;for(let s=0;s<=e;s++)if(this.originalItems[s]!==this.prevOriginalItems[s])return!0;return!1}return!0}onScroll(){let t=this.el.scrollTop<this.currentScroll;this.currentScroll=this.el.scrollTop,this.prepareDataItems(),this.isTable=this.checkIsTable(),this.lastScrollIsUp=this.scrollIsUp,this.scrollIsUp=t}prepareDataItems(){this.registerCurrentItemsHeight(),this.prepareDataVirtualScroll()}registerCurrentItemsHeight(){let t=this.getInsideChildrens();for(let e=0;e<t.length;e++)this.previousItemsHeight[this.startIndex+e]=t[e].getBoundingClientRect().height}getDimensions(){let t={contentHeight:0,paddingTop:0,itemsThatAreGone:0};if(t.contentHeight=this.originalItems.reduce((e,s,l)=>e+(this.previousItemsHeight[l]||this.minRowHeight),0),this.currentScroll>=this.minRowHeight){let e=0,s=0,l=this.currentScroll;for(let h of this.previousItemsHeight){let r=h||this.minRowHeight;if(!(l>=r))break;e+=r,l-=r,s++}t.paddingTop=e,t.itemsThatAreGone=s}return t}prepareDataVirtualScroll(){let t=this.getDimensions();this.contentHeight=t.contentHeight,this.paddingTop=t.paddingTop,this.startIndex=t.itemsThatAreGone,this.endIndex=Math.min(this.startIndex+this.numberItemsCanRender(),this.originalItems.length-1),this.indexCurrentSticky>=0&&(this.startIndex>this.indexCurrentSticky||this.endIndex<this.indexCurrentSticky)?(this.currentStickyItem&&(this.currentStickyItem.outside=!0),this.items=[...this.originalItems.slice(this.startIndex,Math.min(this.endIndex+1,this.originalItems.length)),this.originalItems[this.indexCurrentSticky]]):(this.currentStickyItem&&(this.currentStickyItem.outside=!1),this.items=this.originalItems.slice(this.startIndex,Math.min(this.endIndex+1,this.originalItems.length))),this.onItemsRender.emit(new b({items:this.itemsNoSticky,startIndex:this.startIndex,endIndex:this.endIndex,length:this.itemsNoSticky.length})),this.manipuleRenderedItems()}numberItemsCanRender(){return Math.floor(this.el.clientHeight/this.minRowHeight)+2}manipuleRenderedItems(){let t=this.getInsideChildrens();for(let e=0;e<t.length;e++){let s=t[e];if("none"!==s.style.display){let l=this.startIndex+e;s.style.minHeight=`${this.minRowHeight}px`,s.style.height=`${this.minRowHeight}px`;let h=(l+1)%2==0?"even":"odd",r="even"==h?"odd":"even";s.classList.add(`ag-virtual-scroll-${h}`),s.classList.remove(`ag-virtual-scroll-${r}`)}}}getInsideChildrens(){let t=this.itemsContainerEl.children;return t.length>0&&"TABLE"===t[0].tagName.toUpperCase()&&(t=t[0].children,t.length>0&&(t="TBODY"===t[0].tagName.toUpperCase()?t[0].children:t[1].children)),t}checkIsTable(){let t=this.itemsContainerEl.children;return t.length>0&&"TABLE"===t[0].tagName.toUpperCase()&&(t=t[0].children,t.length>0&&"THEAD"===t[0].tagName.toUpperCase()&&(t[0].style.transform=`translateY(${Math.abs(this.paddingTop-this.currentScroll)}px)`),!0)}checkStickItem(t){!this.isTable&&this.vsItems.length>0?this.updateVsItems().subscribe(()=>{if(this.indexCurrentSticky>=0){if(!this.currentStickyItem)return void this.findCurrentStickyByIndex(!0);-1===this.indexNextSticky&&(this.indexNextSticky=this.getIndexNextSticky(t)),this.currentStickIsEnded(t)&&(t?this.indexPrevSticky>=0?this.setPrevAsCurrentSticky():(this.indexCurrentSticky=this.getIndexCurrentSticky(t),this.indexNextSticky=this.indexCurrentSticky>=0?this.getIndexNextSticky(t):null):(this.indexPrevSticky=this.indexCurrentSticky,this.indexCurrentSticky=this.getIndexCurrentSticky(t),this.indexNextSticky=this.getIndexNextSticky(t)))}else this.indexCurrentSticky=this.getIndexCurrentSticky(t),this.indexNextSticky=this.getIndexNextSticky(t)}):(this.indexCurrentSticky=-1,this.indexNextSticky=-1)}findCurrentStickyByIndex(t=!1){let e=0,s=this.vsItems.length-1;if(this.vsItems.length-this.numberItemsCanRender()>0&&!this.vsItems.some((h,r)=>this.indexCurrentSticky===this.startIndex+r)){e=s;let h=this.vsItems[s],r=this.indexCurrentSticky,c=this.previousItemsHeight.slice(0,r).reduce((a,d)=>a+(d||this.minRowHeight),0);h.isSticked=!0,this.currentStickyItem=new C({comp:h,index:r,vsIndex:e,offsetTop:c,height:h.el.offsetHeight,outside:!0})}else for(let h of this.vsItems){let r=this.startIndex+e;if(this.indexCurrentSticky===r){let c=this.previousItemsHeight.slice(0,r).reduce((a,d)=>a+(d||this.minRowHeight),0);h.isSticked=!0,this.currentStickyItem=new C({comp:h,index:r,vsIndex:e,offsetTop:c,height:h.el.offsetHeight});break}e++}if(t&&this.currentStickyItem){let h=this.currentStickyItem.height,r=this.paddingTop+h+Math.abs(this.el.scrollTop-this.paddingTop),c=this.indexNextSticky>=0?this.previousItemsHeight.slice(0,this.indexNextSticky).reduce((a,d)=>a+(d||this.minRowHeight),0):null;if(null!==c&&r>=c){let a=r-c;if(a>=h)return this.currentStickyItem.diffTop=h,!0;this.currentStickyItem.diffTop=a}else this.currentStickyItem.diffTop=0}}setPrevAsCurrentSticky(){this.currentStickyItem&&this.currentStickyItem.comp.sticky&&(this.indexNextSticky=this.indexCurrentSticky),this.indexCurrentSticky=this.indexPrevSticky,this.indexPrevSticky=-1}getIndexCurrentSticky(t){let e=0;for(let s of this.vsItems){let l=e+this.startIndex,h=this.previousItemsHeight.slice(0,l).reduce((r,c)=>r+(c||this.minRowHeight),0);if(s&&s.sticky&&this.el.scrollTop>=h&&(-1===this.indexCurrentSticky||l!==this.indexCurrentSticky))return l;e++}return-1}getIndexNextSticky(t){if(this.indexCurrentSticky>=0){let e=0;for(let s of this.vsItems.slice(0,this.numberItemsCanRender())){let l=e+this.startIndex;if(s.sticky&&l>this.indexCurrentSticky)return l;e++}}return-1}currentStickIsEnded(t){let e=this.currentStickyItem.height;if(!t||this.currentStickyItem.diffTop>0){let s=this.paddingTop+e+Math.abs(this.el.scrollTop-this.paddingTop),l=this.indexNextSticky>=0?this.previousItemsHeight.slice(0,this.indexNextSticky).reduce((h,r)=>h+(r||this.minRowHeight),0):null;if(null!==l&&s>=l){let h=s-l;if(h>=e)return this.currentStickyItem.diffTop=e,!0;this.currentStickyItem.diffTop=h}else this.currentStickyItem.diffTop=0}else if(this.paddingTop+Math.abs(this.el.scrollTop-this.paddingTop)<=this.currentStickyItem.offsetTop)return!0;return!1}updateVsItems(){return new k.y(t=>{this.subscripAllVsItem.length&&(this.subscripAllVsItem.forEach(s=>s.subscrip.unsubscribe()),this.subscripAllVsItem=[]);let e=setInterval(()=>{let s=this.vsItems.length-this.numberItemsCanRender(),l=this.vsItems.length-1;this.vsItems.every((r,c)=>{let a=this.startIndex+c;s>0&&c===l&&(a=this.indexCurrentSticky),(!this.currentStickyItem||r!==this.currentStickyItem.comp)&&(r.isSticked=!1),this.subscripAllVsItem.some(d=>d.comp===r)||this.subscripAllVsItem.push({comp:r,subscrip:r.onStickyChange.subscribe(d=>{this.onStickyComponentChanged(r,a)})});try{r.forceUpdateInputs()}catch{return!1}return!0})&&(clearInterval(e),this.manipuleRenderedItems(),t.next())})})}onStickyComponentChanged(t,e){if(e===this.indexCurrentSticky)t.sticky||(this.indexPrevSticky>=0?this.setPrevAsCurrentSticky():(this.indexCurrentSticky=this.getIndexCurrentSticky(!1),this.indexNextSticky=this.indexCurrentSticky>=0?this.getIndexNextSticky(!1):null));else if(-1!==this.indexCurrentSticky&&e<this.indexCurrentSticky||e===this.indexPrevSticky)t.sticky?this.indexPrevSticky=e:this.indexesPrevStick=this.indexesPrevStick.filter(s=>s!==e);else{if(!(-1!==this.indexCurrentSticky&&e>this.indexCurrentSticky||e===this.indexNextSticky))return;t.sticky&&(-1===this.indexNextSticky||e<this.indexNextSticky)?this.indexNextSticky=e:t.sticky||(this.indexNextSticky=-1)}this.queryVsItems.notifyOnChanges()}ngOnDestroy(){}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(i.SBq),i.Y36(i.Qsj))},n.\u0275cmp=i.Xpm({type:n,selectors:[["ag-virtual-scroll"]],contentQueries:function(t,e,s){if(1&t&&i.Suo(s,x,4),2&t){let l;i.iGM(l=i.CRH())&&(e.queryVsItems=l)}},viewQuery:function(t,e){if(1&t&&i.Gf(S,7),2&t){let s;i.iGM(s=i.CRH())&&(e.itemsContainerElRef=s.first)}},inputs:{minRowHeight:["min-row-height","minRowHeight"],height:"height",originalItems:["items","originalItems"]},outputs:{onItemsRender:"onItemsRender"},features:[i.TTD],ngContentSelectors:g,decls:5,vars:8,consts:[[1,"content-height"],[1,"items-container",3,"ngClass"],["itemsContainer",""],[3,"class","top","height","minHeight",4,"ngIf"],[3,"ngTemplateOutlet"]],template:function(t,e){1&t&&(i.F$t(),i._UZ(0,"div",0),i.TgZ(1,"div",1,2),i.Hsn(3),i.qZA(),i.YNc(4,T,3,11,"ag-vs-item",3)),2&t&&(i.Udp("height",e.contentHeight,"px"),i.xp6(1),i.Udp("transform","translateY("+e.paddingTop+"px)"),i.Q6J("ngClass",i.VKq(6,_,null==e.currentStickyItem?null:e.currentStickyItem.outside)),i.xp6(3),i.Q6J("ngIf",(null==e.currentStickyItem?null:e.currentStickyItem.comp)&&e.currentStickyItem.comp.isSticked))},dependencies:[m.mk,m.O5,m.tP,x,A],styles:["[_nghost-%COMP%]{display:block;position:relative;height:100%;width:100%;overflow-y:auto}[_nghost-%COMP%]   .content-height[_ngcontent-%COMP%]{width:1px;opacity:0}[_nghost-%COMP%]   .items-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}[_nghost-%COMP%]  .items-container.sticked-outside>.ag-vs-item:last-child{position:absolute;top:0;left:-100%}[_nghost-%COMP%] >.ag-vs-item{position:absolute;top:0;left:0;box-shadow:0 5px 5px #0000001a;background:#FFF}"]}),n})();class C{constructor(o){this.offsetTop=0,this.diffTop=0,this.isUp=!1,this.height=0,this.outside=!1,o&&Object.assign(this,o)}}let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[m.ez]}),n})()}}]);