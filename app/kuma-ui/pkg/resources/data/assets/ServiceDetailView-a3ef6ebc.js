import{d as L,c as f,r as I,o as t,e as F,h as n,w as r,q as N,a as i,g as s,t as p,b as u,f as d,G as E,B as G,F as J,s as O,W as j}from"./index-f7c01925.js";import{m as H,g as R,D as h,S as M,R as Q,A as U,o as $,q as z,E as V,r as A,_ as X,f as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-324747fa.js";import{_ as Z}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-a34a4956.js";import{T as D}from"./TagList-6e0f0506.js";import{T as ee}from"./TextWithCopyButton-8e33b644.js";import{_ as re}from"./RouteTitle.vue_vue_type_script_setup_true_lang-9ad3da03.js";import{D as te,K as se}from"./KFilterBar-e404d336.js";import{T as ie}from"./TabsWidget-8d5e20d9.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-fc519291.js";import"./CopyButton-dd19b827.js";import"./AppCollection-06a42595.js";import"./dataplane-30467516.js";import"./notEmpty-7f452b20.js";const ae={class:"stack"},le={class:"variable-columns"},ne=L({__name:"ServiceSummary",props:{service:{},externalService:{default:null}},setup(k){const e=k,y=H(),{t:m}=R(),S=f(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.networking.address:e.service.addressPort??null),T=f(()=>{var v;return e.service.serviceType==="external"&&e.externalService!==null?(v=e.externalService.networking.tls)!=null&&v.enabled?"Enabled":"Disabled":null}),a=f(()=>e.service.serviceType==="external"?null:e.service.dataplanes??null),l=f(()=>e.service.serviceType==="external"?null:e.service.status??null),g=f(()=>e.service.serviceType==="external"&&e.externalService!==null?e.externalService.tags:null);async function x(v){const{mesh:b,name:_}=e.externalService;return await y.getExternalService({mesh:b,name:_},v)}return(v,b)=>{const _=I("RouterLink");return t(),F("div",ae,[n(u(E),null,{body:r(()=>[N("div",le,[l.value!==null?(t(),i(h,{key:0},{title:r(()=>[s(p(u(m)("http.api.property.status")),1)]),body:r(()=>[n(M,{status:l.value},null,8,["status"])]),_:1})):d("",!0),s(),n(h,null,{title:r(()=>[s(p(u(m)("http.api.property.name")),1)]),body:r(()=>[n(ee,{text:e.service.name},{default:r(()=>[n(_,{to:{name:"service-detail-view",params:{service:e.service.name,mesh:e.service.mesh}}},{default:r(()=>[s(p(e.service.name),1)]),_:1},8,["to"])]),_:1},8,["text"])]),_:1}),s(),S.value!==null?(t(),i(h,{key:1},{title:r(()=>[s(p(u(m)("http.api.property.address")),1)]),body:r(()=>[s(p(S.value),1)]),_:1})):d("",!0),s(),T.value!==null?(t(),i(h,{key:2},{title:r(()=>[s(p(u(m)("http.api.property.tls")),1)]),body:r(()=>[s(p(T.value),1)]),_:1})):d("",!0),s(),a.value!==null?(t(),i(Q,{key:3,online:a.value.online??0,total:a.value.total??0},{title:r(()=>[s(p(u(m)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])):d("",!0),s(),g.value!==null?(t(),i(h,{key:4},{title:r(()=>[s(p(u(m)("http.api.property.tags")),1)]),body:r(()=>[n(D,{tags:g.value},null,8,["tags"])]),_:1})):d("",!0)])]),_:1}),s(),e.service.serviceType==="external"&&e.externalService!==null?(t(),i(Z,{key:0,id:"code-block-service",resource:e.service,"resource-fetcher":x,"is-searchable":"","code-max-height":"250px"},null,8,["resource"])):d("",!0)])}}}),oe=L({__name:"ServiceDetailView",props:{page:{},size:{},search:{},query:{},gatewayType:{},mesh:{},service:{}},setup(k){const e=k,{t:y}=R(),m=[{hash:"#overview",title:y("services.routes.item.tabs.overview")},{hash:"#dataPlaneProxies",title:y("services.routes.item.tabs.data_plane_proxies")}];return(S,T)=>(t(),i(X,{name:"service-detail-view","data-testid":"service-detail-view"},{default:r(({route:a})=>[n(U,{breadcrumbs:[{to:{name:"services-list-view",params:{mesh:a.params.mesh}},text:u(y)("services.routes.item.breadcrumbs")}]},{title:r(()=>[N("h2",null,[n(re,{title:u(y)("services.routes.item.title",{name:a.params.service}),render:!0},null,8,["title"])])]),default:r(()=>[s(),n($,{src:`/meshes/${a.params.mesh}/service-insights/${a.params.service}`},{default:r(({data:l,isLoading:g,error:x})=>[g?(t(),i(z,{key:0})):x?(t(),i(V,{key:1,error:x},null,8,["error"])):l===void 0?(t(),i(A,{key:2})):(t(),i($,{key:3,"should-make-request":l.serviceType==="external",src:`/meshes/${a.params.mesh}/external-services/${a.params.service}`},{default:r(({data:v,isLoading:b,error:_})=>[l.serviceType==="external"&&b?(t(),i(z,{key:0})):l.serviceType==="external"&&_?(t(),i(V,{key:1,error:_},null,8,["error"])):l.serviceType==="external"&&v===void 0?(t(),i(A,{key:2})):(t(),i(ie,{key:3,tabs:m.filter(c=>c.hash==="#overview"?!0:l.serviceType!=="external")},G({overview:r(()=>[n(ne,{service:l,"external-service":v},null,8,["service","external-service"])]),_:2},[(l==null?void 0:l.serviceType)!=="external"?{name:"dataPlaneProxies",fn:r(()=>[n($,{src:`/meshes/${a.params.mesh}/dataplanes/for/${a.params.service}/of/${e.gatewayType}?page=${e.page}&size=${e.size}&search=${e.search}`},{default:r(({data:c,error:K})=>{var q,B,C,P;return[(t(!0),F(J,null,O([typeof((P=(C=(B=(q=c==null?void 0:c.items)==null?void 0:q[0])==null?void 0:B.dataplane)==null?void 0:C.networking)==null?void 0:P.gateway)>"u"],w=>(t(),i(u(E),{key:w},{body:r(()=>[n(te,{"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":e.page,"page-size":e.size,total:c==null?void 0:c.total,items:c==null?void 0:c.items,error:K,gateways:w,onChange:({page:o,size:W})=>{a.update({page:String(o),size:String(W)})}},{toolbar:r(()=>[n(se,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:o=>a.update({query:o.query,s:o.query.length>0?JSON.stringify(o.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),s(),w?(t(),i(u(j),{key:0,label:"Type","overlay-label":!0,items:[{label:"All",value:"all"},{label:"Builtin",value:"builtin"},{label:"Delegated",value:"delegated"}].map(o=>({...o,selected:o.value===e.gatewayType})),appearance:"select",onSelected:o=>a.update({gatewayType:String(o.value)})},{"item-template":r(({item:o})=>[s(p(o.label),1)]),_:2},1032,["items","onSelected"])):d("",!0)]),_:2},1032,["page-number","page-size","total","items","error","gateways","onChange"])]),_:2},1024))),128))]}),_:2},1032,["src"])]),key:"0"}:void 0]),1032,["tabs"]))]),_:2},1032,["should-make-request","src"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});const ke=Y(oe,[["__scopeId","data-v-9fd98cea"]]);export{ke as default};
