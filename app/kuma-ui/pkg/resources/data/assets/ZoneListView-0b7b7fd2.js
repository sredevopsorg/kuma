import{d as P,u as W,r as a,v as M,y as R,z as C,A as Y,j as y,b as T,e as q,i as F,g as Z,h as G,f as Q,B as O,o as v}from"./index-a24b4f04.js";import{_ as U}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-f2ba4e33.js";import{_ as $}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-56f80b37.js";import{D as j}from"./DataOverview-8bfe7e82.js";import{u as J}from"./store-07fabdaf.js";import{u as K}from"./index-f7ac63b4.js";import{Q as b}from"./QueryParameter-70743f73.js";import"./kongponents.es-5adaddec.js";import"./AccordionList-8e75dbac.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-7b080a3a.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-8ed542ca.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-f02238bb.js";import"./TabsWidget-6a5a1765.js";import"./ErrorBlock-8e1d70a5.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-4f020979.js";import"./datadogLogEvents-302eea7b.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-17ba340a.js";import"./TagList-67c1d0cb.js";import"./StatusBadge-ab90d1ed.js";const H={class:"zones"},X={key:1,class:"kcard-stack"},ee={class:"kcard-border"},te={key:0,class:"kcard-border"},_e=P({__name:"ZoneListView",props:{selectedZoneName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(V){const d=V,n=K(),D={title:"No Data",message:"There are no Zones present."},z=W(),_=J(),f=a(!0),g=a(null),r=a({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0}],data:[]}),l=a(null),k=a(null),E=a(d.offset),h=a(new Set),w=a(new Set);M(()=>z.params.mesh,function(){z.name==="zone-list-view"&&S(0)}),R(function(){S(d.offset)});function S(e){_.getters["config/getMulticlusterStatus"]&&I(e)}async function I(e){var o;E.value=e,b.set("offset",e>0?e:null),f.value=!0,g.value=null;const t=O;try{const[{items:s,next:u},{items:c},{items:m}]=await Promise.all([n.getAllZoneOverviews({size:t,offset:e}),C(n.getAllZoneIngressOverviews.bind(n)),C(n.getAllZoneEgressOverviews.bind(n))]);k.value=u,r.value.data=x(s??[]),h.value=new Set(c.map(p=>p.zoneIngress.zone)),w.value=new Set(m.map(p=>p.zoneEgress.zone)),await N({name:d.selectedZoneName??((o=r.value.data[0])==null?void 0:o.entity.name)})}catch(s){r.value.data=[],l.value=null,h.value=new Set,w.value=new Set,s instanceof Error?g.value=s:console.error(s)}finally{f.value=!1}}function x(e){return e.map(t=>{var A;const{name:o}=t,s={name:"zone-detail-view",params:{zone:o}};let u="-",c="",m=!0;(((A=t.zoneInsight)==null?void 0:A.subscriptions)??[]).forEach(i=>{if(i.version&&i.version.kumaCp){u=i.version.kumaCp.version;const{kumaCpGlobalCompatible:L=!0}=i.version.kumaCp;m=L,i.config&&(c=JSON.parse(i.config).store.type)}});const B=Y(t.zoneInsight);return{entity:t,detailViewRoute:s,status:B,zoneCpVersion:u,storeType:c,hasIngress:h.value.has(t.name)?"Yes":"No",hasEgress:w.value.has(t.name)?"Yes":"No",withWarnings:!m}})}async function N({name:e}){if(e===void 0){l.value=null,b.set("zone",null);return}try{l.value=await n.getZoneOverview({name:e}),b.set("zone",e)}catch(t){console.error(t)}}return(e,t)=>{var o;return v(),y("div",H,[T(_).getters["config/getMulticlusterStatus"]===!1?(v(),q(U,{key:0})):(v(),y("div",X,[F("div",ee,[Z(j,{"selected-entity-name":(o=l.value)==null?void 0:o.name,"page-size":T(O),"is-loading":f.value,error:g.value,"empty-state":D,"table-data":r.value,"table-data-is-empty":r.value.data.length===0,"show-warnings":r.value.data.some(s=>s.withWarnings),next:k.value,"page-offset":E.value,onTableAction:N,onLoadData:I},null,8,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset"])]),G(),l.value!==null?(v(),y("div",te,[Z($,{"zone-overview":l.value},null,8,["zone-overview"])])):Q("",!0)]))])}}});export{_e as default};
