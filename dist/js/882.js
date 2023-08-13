"use strict";(self.webpackChunktest1=self.webpackChunktest1||[]).push([[882],{4882:(e,t,l)=>{l.d(t,{diagram:()=>f});var n=l(2121),a=l(7274),o=l(5625),i=l(9360),s=l(2724);l(7484),l(7967),l(7856),l(9451),l(9368);const d=e=>i.e.sanitizeText(e,(0,i.c)());let r={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const c=function(e,t,l,n,a){const o=Object.keys(e);i.l.info("keys:",o),i.l.info(e),o.filter((t=>e[t].parent==a)).forEach((function(l){var o,s;const r=e[l],c=r.cssClasses.join(" "),p=r.label??r.id,b={labelStyle:"",shape:"class_box",labelText:d(p),classData:r,rx:0,ry:0,class:c,style:"",id:r.id,domId:r.domId,tooltip:n.db.getTooltip(r.id,a)||"",haveCallback:r.haveCallback,link:r.link,width:"group"===r.type?500:void 0,type:r.type,padding:(null==(o=(0,i.c)().flowchart)?void 0:o.padding)??(null==(s=(0,i.c)().class)?void 0:s.padding)};t.setNode(r.id,b),a&&t.setParent(r.id,a),i.l.info("setNode",b)}))};function p(e){let t;switch(e){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const b={setConf:function(e){r={...r,...e}},draw:async function(e,t,l,n){i.l.info("Drawing class - ",t);const b=(0,i.c)().flowchart??(0,i.c)().class,f=(0,i.c)().securityLevel;i.l.info("config:",b);const u=(null==b?void 0:b.nodeSpacing)??50,g=(null==b?void 0:b.rankSpacing)??50,y=new o.k({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:u,ranksep:g,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),h=n.db.getNamespaces(),v=n.db.getClasses(),w=n.db.getRelations(),k=n.db.getNotes();let x;i.l.info(w),function(e,t,l,n){const a=Object.keys(e);i.l.info("keys:",a),i.l.info(e),a.forEach((function(l){var a,o;const s=e[l],r={shape:"rect",id:s.id,domId:s.domId,labelText:d(s.id),labelStyle:"",style:"fill: none; stroke: black",padding:(null==(a=(0,i.c)().flowchart)?void 0:a.padding)??(null==(o=(0,i.c)().class)?void 0:o.padding)};t.setNode(s.id,r),c(s.classes,t,0,n,s.id),i.l.info("setNode",r)}))}(h,y,0,n),c(v,y,0,n),function(e,t){const l=(0,i.c)().flowchart;let n=0;e.forEach((function(e){var o;n++;const s={classes:"relation",pattern:1==e.relation.lineType?"dashed":"solid",id:"id"+n,arrowhead:"arrow_open"===e.type?"none":"normal",startLabelRight:"none"===e.relationTitle1?"":e.relationTitle1,endLabelLeft:"none"===e.relationTitle2?"":e.relationTitle2,arrowTypeStart:p(e.relation.type1),arrowTypeEnd:p(e.relation.type2),style:"fill:none",labelStyle:"",curve:(0,i.o)(null==l?void 0:l.curve,a.c_6)};if(i.l.info(s,e),void 0!==e.style){const t=(0,i.k)(e.style);s.style=t.style,s.labelStyle=t.labelStyle}e.text=e.title,void 0===e.text?void 0!==e.style&&(s.arrowheadStyle="fill: #333"):(s.arrowheadStyle="fill: #333",s.labelpos="c",(null==(o=(0,i.c)().flowchart)?void 0:o.htmlLabels)??(0,i.c)().htmlLabels?(s.labelType="html",s.label='<span class="edgeLabel">'+e.text+"</span>"):(s.labelType="text",s.label=e.text.replace(i.e.lineBreakRegex,"\n"),void 0===e.style&&(s.style=s.style||"stroke: #333; stroke-width: 1.5px;fill:none"),s.labelStyle=s.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,s,n)}))}(w,y),function(e,t,l,n){i.l.info(e),e.forEach((function(e,o){var s,c;const p=e,b=p.text,f={labelStyle:"",shape:"note",labelText:d(b),noteData:p,rx:0,ry:0,class:"",style:"",id:p.id,domId:p.id,tooltip:"",type:"note",padding:(null==(s=(0,i.c)().flowchart)?void 0:s.padding)??(null==(c=(0,i.c)().class)?void 0:c.padding)};if(t.setNode(p.id,f),i.l.info("setNode",f),!p.class||!(p.class in n))return;const u=l+o,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:(0,i.o)(r.curve,a.c_6)};t.setEdge(p.id,p.class,g,u)}))}(k,y,w.length+1,v),"sandbox"===f&&(x=(0,a.Ys)("#i"+t));const m="sandbox"===f?(0,a.Ys)(x.nodes()[0].contentDocument.body):(0,a.Ys)("body"),T=m.select(`[id="${t}"]`),S=m.select("#"+t+" g");if(await(0,s.r)(S,y,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),i.u.insertTitle(T,"classTitleText",(null==b?void 0:b.titleTopMargin)??5,n.db.getDiagramTitle()),(0,i.p)(y,T,null==b?void 0:b.diagramPadding,null==b?void 0:b.useMaxWidth),!(null==b?void 0:b.htmlLabels)){const e="sandbox"===f?x.nodes()[0].contentDocument:document,l=e.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of l){const l=t.getBBox(),n=e.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",l.width),n.setAttribute("height",l.height),t.insertBefore(n,t.firstChild)}}}},f={parser:n.p,db:n.d,renderer:b,styles:n.s,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,n.d.clear()}}}}]);