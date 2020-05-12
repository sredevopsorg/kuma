(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-325081c4"],{"06bd":function(t,e,a){"use strict";var n=a("a05e"),r=a.n(n);r.a},1799:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("KButton",{ref:"paginatePrev",attrs:{disabled:!t.hasPrevious,appearance:"primary"},on:{click:function(e){return t.$emit("previous")}}},[t._v("\n    ‹ Previous\n  ")]),a("KButton",{ref:"paginateNext",attrs:{disabled:!t.hasNext,appearance:"primary"},on:{click:function(e){return t.$emit("next")}}},[t._v("\n    Next ›\n  ")])],1)},r=[],s={name:"Pagination",props:{hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}}},i=s,o=(a("06bd"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,"3545675c",null);e["a"]=l.exports},"1d10":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component-frame"},[t._t("default")],2)},r=[],s={name:"FrameSkeleton"},i=s,o=(a("8463"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,"664e217a",null);e["a"]=l.exports},2055:function(t,e,a){},2226:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overview"},[a("page-header",{attrs:{noflex:""}},[a("breadcrumbs"),a("h2",{staticClass:"xxl"},[t._v("\n      "+t._s(this.$route.meta.title)+"\n    ")])],1),a("MetricGrid",{attrs:{metrics:t.overviewMetrics}}),a("div",{staticClass:"md:grid md:grid-cols-3 md:gap-4 -mx-4"},[a("CardSkeleton",{staticClass:"mx-4",attrs:{"card-action-route":{path:"/wizard/mesh"},"card-title":"Create A Mesh","card-action-button-text":"Start Now"}},[a("template",{slot:"cardContent"},[a("p",{staticClass:"lg"},[t._v("\n          You can create a new isolated Mesh for a team, a product, or a line of business.\n        ")])])],2),a("CardSkeleton",{staticClass:"mx-4",attrs:{"card-action-route":t.dataplaneWizardRoute,"card-title":"Create A Dataplane","card-action-button-text":"Start Now"}},[a("template",{slot:"cardContent"},[a("p",{staticClass:"lg"},[t._v("\n          Create a new Dataplane here.\n        ")])])],2)],1),a("FrameSkeleton",[a("DataOverview",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,"is-empty":t.isEmpty,"empty-state":t.empty_state,"display-data-table":!0,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty},on:{reloadData:t.loadData}},[a("template",{slot:"pagination"},[a("Pagination",{attrs:{"has-previous":t.previous.length>0,"has-next":t.hasNext},on:{next:t.goToNextPage,previous:t.goToPreviousPage}})],1)],2)],1)],1)},r=[],s=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=a("2f62"),o=a("d7c2"),l=a("1d10"),c=a("1799"),u=a("43c3"),d=a("b6c6"),p=a("be10"),m=a("2778"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skeleton-card-wrapper"},[a("KCard",{class:{"is-centered":t.centerText},attrs:{title:t.cardTitle}},[a("template",{slot:"body"},[t._t("cardContent"),t.cardActionButtonText&&t.cardActionRoute?a("div",{staticClass:"skeleton-card__action mt-4"},[t._t("cardAction",[a("KButton",{attrs:{to:t.cardActionRoute,appearance:"primary"}},[t._v("\n            "+t._s(t.cardActionButtonText)+"\n          ")])])],2):t._e()],2)],2)],1)},h=[],b=a("d05b"),g=a("ce72"),v={name:"CardSkeleton",components:{KCard:b["a"],KButton:g["a"]},props:{cardTitle:{type:String,required:!0},cardActionRoute:{type:Object,required:!0},cardActionButtonText:{type:String,required:!0},centerText:{type:Boolean,default:!1}}},y=v,T=(a("ce43"),a("2877")),C=Object(T["a"])(y,f,h,!1,null,"8c07ac1c",null),_=C.exports;function D(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?D(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var j={name:"Overview",metaInfo:function(){return{title:this.$route.meta.title}},components:{FrameSkeleton:l["a"],Pagination:c["a"],PageHeader:u["a"],Breadcrumbs:d["a"],MetricGrid:p["a"],DataOverview:m["a"],CardSkeleton:_},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Meshes present."},tableData:{headers:[{label:"Mesh",key:"name"},{label:"Online Dataplanes",key:"onlineDpCount"}],data:[]},pageSize:10,pageOffset:null,next:null,hasNext:!1,previous:[]}},computed:O({},Object(i["b"])({title:"getTagline",dpList:"getDataplanesList",environment:"getEnvironment"}),{overviewMetrics:function(){return[{metric:"Meshes",value:this.$store.state.totalMeshCount},{metric:"Dataplanes",value:this.$store.state.totalDataplaneCount},{metric:"Health Checks",value:this.$store.state.totalHealthCheckCount},{metric:"Proxy Templates",value:this.$store.state.totalProxyTemplateCount},{metric:"Traffic Logs",value:this.$store.state.totalTrafficLogCount},{metric:"Traffic Permissions",value:this.$store.state.totalTrafficPermissionCount},{metric:"Traffic Routes",value:this.$store.state.totalTrafficRouteCount},{metric:"Traffic Traces",value:this.$store.state.totalTrafficTraceCount},{metric:"Fault Injections",value:this.$store.state.totalFaultInjectionCount}]},dataplaneWizardRoute:function(){return"universal"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}}}),watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.getCounts(),this.loadData()},goToPreviousPage:function(){this.pageOffset=this.previous.pop(),this.next=null,this.loadData()},goToNextPage:function(){this.previous.push(this.pageOffset),this.pageOffset=this.next,this.next=null,this.loadData()},getCounts:function(){this.$store.dispatch("getMeshTotalCount"),this.$store.dispatch("getDataplaneTotalCount"),this.$store.dispatch("getHealthCheckTotalCount"),this.$store.dispatch("getProxyTemplateTotalCount"),this.$store.dispatch("getTrafficLogTotalCount"),this.$store.dispatch("getTrafficPermissionTotalCount"),this.$store.dispatch("getTrafficRouteTotalCount"),this.$store.dispatch("getTrafficTraceTotalCount"),this.$store.dispatch("getFaultInjectionTotalCount")},loadData:function(){var t=this;this.isLoading=!0,this.isEmpty=!1;var e=function(){t.$store.dispatch("getAllDataplanes");var e=t.dpList,a={size:t.pageSize,offset:t.pageOffset};return t.$api.getAllMeshes(a).then((function(a){var n=a.items,r=[];a.next?(t.next=Object(o["a"])(a.next),t.hasNext=!0):t.hasNext=!1;for(var s=function(t){var a=n[t].name,s=function(){var t=e.filter((function(t){return t.mesh===a})).length,n=e.filter((function(t){return"Online"===t.status&&t.mesh===a})).length;return 0===t?"No Dataplanes":"".concat(n," of ").concat(t)};r.push({name:a,onlineDpCount:s()})},i=0;i<n.length;i++)s(i);n&&n.length?(t.tableData.data=[].concat(r),t.tableDataIsEmpty=!1):(t.tableData.data=[],t.tableDataIsEmpty=!0)})).catch((function(e){t.hasError=!0,console.error(e)})).finally((function(){setTimeout((function(){t.isLoading=!1}),"500")}))};e()}}},M=j,x=(a("c4a3"),Object(T["a"])(M,n,r,!1,null,null,null));e["default"]=x.exports},2699:function(t,e,a){},2778:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"data-overview"},[n("div",{staticClass:"data-table-controls mb-2"},[t._t("additionalControls"),t.displayRefreshControl?n("KButton",{staticClass:"ml-2",attrs:{appearance:"primary",size:"small",disabled:t.isLoading},on:{click:function(e){return t.$emit("reloadData")}}},[t.isLoading?n("KIcon",{attrs:{icon:"spinner",color:"#fff",size:"48"}}):t._e(),n("span",[t._v("Refresh")])],1):t._e()],2),t.isReady?n("div",{staticClass:"data-overview-content"},[!t.isLoading&&t.displayMetrics&&t.metricsData?n("MetricGrid",{attrs:{metrics:t.metricsData}}):t._e(),t.displayDataTable&&!t.tableDataIsEmpty&&t.tableData?n("div",{staticClass:"data-overview-table"},[n("KTable",{staticClass:"micro-table",class:{"data-table-is-hidden":t.tableDataIsEmpty,"has-border":t.tableHasBorder},attrs:{options:t.tableDataFiltered,"has-hover":""},on:{"row:click":t.tableRowHandler},scopedSlots:t._u([t.displayTableDataStatus?{key:"status",fn:function(e){var a=e.rowValue;return[n("div",{staticClass:"entity-status",class:{"is-offline":"offline"===a.toLowerCase()}},[n("span",{staticClass:"entity-status__dot"}),n("span",{staticClass:"entity-status__label"},[t._v(t._s(a))])])]}}:null,{key:"tags",fn:function(e){var a=e.rowValue;return t._l(a,(function(e,a){return n("span",{key:a,staticClass:"entity-tags",class:"entity-tags--"+a},[n("span",{staticClass:"entity-tags__label",class:"entity-tags__label--"+e.label.toLowerCase()},[t._v("\n              "+t._s(e.label)+"\n            ")]),n("span",{staticClass:"entity-tags__value",class:"entity-tags__value--"+e.value},[t._v("\n              "+t._s(e.value)+"\n            ")])])}))}},{key:"actions",fn:function(e){var a=e.row;return[t.tableDataFunctionText?n("a",{staticClass:"data-table-action-link",class:{"is-active":t.$store.state.selectedTableRow===a.name}},[t.$store.state.selectedTableRow===a.name?n("span",{staticClass:"action-link__active-state"},[t._v("\n              ✓\n              "),n("span",{staticClass:"sr-only"},[t._v("\n                Selected\n              ")])]):n("span",{staticClass:"action-link__normal-state"},[t._v("\n              "+t._s(t.tableDataFunctionText)+"\n            ")])]):t._e()]}}],null,!0)}),t._t("pagination")],2):t._e(),t.displayDataTable&&t.tableDataIsEmpty&&t.tableData?n("KEmptyState",{attrs:{"cta-is-hidden":""}},[n("template",{slot:"title"},[n("div",{staticClass:"card-icon mb-3"},[n("img",{attrs:{src:a("a448")}})]),t.emptyState.title?n("span",[t._v("\n          "+t._s(t.emptyState.title)+"\n        ")]):n("span",[t._v("\n          No Items Found\n        ")])]),t.emptyState.message?n("template",{slot:"message"},[t._v("\n        "+t._s(t.emptyState.message)+"\n      ")]):t._e()],2):t._e(),t.$slots.content?n("div",{staticClass:"data-overview-content mt-6"},[t._t("content")],2):t._e()],1):t._e(),t.isLoading?n("KEmptyState",{attrs:{"cta-is-hidden":""}},[n("template",{slot:"title"},[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v("\n      Data Loading...\n    ")])],2):t._e(),t.hasError?n("KEmptyState",{attrs:{"cta-is-hidden":""}},[n("template",{slot:"title"},[n("div",{staticClass:"card-icon mb-3"},[n("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n      An error has occurred while trying to load this data.\n    ")])],2):t._e()],1)},r=[],s=(a("7f7f"),a("75fc")),i=(a("ac6a"),a("ffc1"),a("c5f6"),a("be10")),o=a("1799"),l={name:"DataOverview",components:{MetricGrid:i["a"],Pagination:o["a"]},props:{pageSize:{type:Number,default:12},displayMetrics:{type:Boolean,default:!1},metricsData:{type:Array,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},emptyState:{type:Object,default:null},ctaAction:{type:Object,default:function(){}},showCta:{type:Boolean,default:!0},displayDataTable:{type:Boolean,default:!1},tableData:{type:Object,default:null},tableHasBorder:{type:Boolean,required:!1,default:!1},tableDataIsEmpty:{type:Boolean,default:!1},tableDataActionsLink:{type:String,default:null},tableActionsRouteName:{type:String,default:null},displayTableDataStatus:{type:Boolean,default:!0},displayRefreshControl:{type:Boolean,default:!0},tableDataRow:{type:String,required:!1,default:"name"},tableDataFunctionText:{type:String,required:!1,default:null}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading},tableRowCount:function(){return Object.entries(this.tableData.data).length},pageCount:function(){var t=Object.entries(this.tableData.data).length,e=this.pageSize;return Math.ceil(t/e)},tableDataFiltered:function(){var t=this.tableData.data,e=this.tableData.headers,a={headers:e,data:Object(s["a"])(t)};return a}},methods:{tableRowHandler:function(t,e,a){this.$emit("tableAction",{name:e.name,mesh:e.mesh})}}},c=l,u=(a("9947"),a("2877")),d=Object(u["a"])(c,n,r,!1,null,null,null);e["a"]=d.exports},"43c3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"page-header",class:{"flex justify-between items-center my-6":!t.noflex}},[t._t("default")],2)},r=[],s={props:{noflex:{type:Boolean,default:!1}}},i=s,o=(a("e234"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"79b0":function(t,e,a){"use strict";var n=a("9e30"),r=a.n(n);r.a},8463:function(t,e,a){"use strict";var n=a("e577"),r=a.n(n);r.a},"8d77":function(t,e,a){},9947:function(t,e,a){"use strict";var n=a("2699"),r=a.n(n);r.a},"9e30":function(t,e,a){},a05e:function(t,e,a){},a448:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0MiI+CiAgPHBhdGggZmlsbD0iI0Q5RDlEOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDggNHY1aC0yVjZIMnYzSDBWMkMwIC44OTU0MzA1Ljg5NTQzMSAwIDIgMGg0NGMxLjEwNDU2OSAwIDIgLjg5NTQzMDUgMiAydjJ6bS0yIDI2aC00di0yaDR2LTNoMnY4aC0ydi0zek0yIDMwdjNIMHYtOGgydjNoNHYySDJ6bTQ0LTEyaC00di0yaDR2LTNoMnY4aC0ydi0zek0yIDE4djNIMHYtOGgydjNoNHYySDJ6bTgtMmg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6TTEwIDI4aDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptMTIgMTRoLTR2LTJoNHYtM2gydjNjMCAxLjEwNDU2OTUtLjg5NTQzMSAyLTIgMnpNMiA0MGg0djJIMmMtMS4xMDQ1NjkgMC0yLS44OTU0MzA1LTItMnYtM2gydjN6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6TTIgMnYyaDQ0VjJIMnoiLz4KPC9zdmc+Cg=="},af21:function(t,e,a){},b6c6:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.hideBreadcrumbs?t._e():a("Krumbs",{attrs:{items:t.routes}})],1)},r=[],s=(a("8e6e"),a("456d"),a("ac6a"),a("8615"),a("bd86")),i=(a("28a5"),a("7f7f"),a("d7c2"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={computed:{pageMesh:function(){return this.$route.params.mesh},routes:function(){var t=this,e=[];this.$route.matched.map((function(a){t.calculateRouteText(a),t.calculateRouteTitle(a);var n=void 0!==a.redirect&&void 0!==a.redirect.name?a.redirect.name:a.name;t.isCurrentRoute(a)&&t.pageMesh&&"global-overview"!==t.$route.name&&e.push({key:t.pageMesh,to:{name:"global-overview"},title:"Global Overview",text:t.pageMesh}),t.isCurrentRoute(a)&&a.meta.parent&&"undefined"!==a.meta.parent?e.push({key:a.meta.parent,to:{name:a.meta.parent},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title}):t.isCurrentRoute(a)&&!a.meta.excludeAsBreadcrumb?e.push({key:n,to:{name:n},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title}):a.meta.parent&&"undefined"!==a.meta.parent&&e.push({key:a.meta.parent,to:{name:a.meta.parent},title:a.meta.title,text:a.meta.breadcrumb||a.meta.title})}));var a=this.calculateRouteTextAdvanced(this.$route);return a&&e.push({title:a,text:a}),e},hideBreadcrumbs:function(){return this.$route.query.hide_breadcrumb}},methods:{getBreadcrumbItem:function(t,e,a,n){return{key:t,to:e,title:a,text:n}},isCurrentRoute:function(t){return t.name&&t.name===this.$router.currentRoute.name||t.redirect===this.$router.currentRoute.name},calculateRouteFromQuery:function(t){var e=t.entity_id,a=t.entity_type;if(e&&a){var n=this.$router.resolve({name:"show-".concat(a.split("_")[0]),params:{id:e.split(",")[0]}}).normalizedTo,r=l({},n,{meta:l({},n.meta)}),s=r.params.id.split("-")[0];return e.split(",").length>1&&e.split(",")[1]&&(s=e.split(",")[1]),r.meta.breadcrumb=s,[l({},this.getBreadcrumbItem(r.name,r,this.calculateRouteTitle(r),this.calculateRouteText(r)))]}},calculateRouteText:function(t){if(t.path&&t.path.indexOf(":mesh")>-1){var e=this.$router.currentRoute.params;return(e&&e.mesh&&Object(i["d"])(e.mesh)?e.mesh.split("-")[0].trim():e.mesh)||t.meta.breadcrumb||t.meta.title}return t.meta&&(t.meta.breadcrumb||t.meta.title)||t.name||t.meta.breadcrumb||t.meta.title},calculateRouteTitle:function(t){return t.params&&t.params.mesh||t.path.indexOf(":mesh")>-1&&this.$router.currentRoute.params&&this.$router.currentRoute.params.mesh},calculateRouteTextAdvanced:function(t){var e=t.params,a="mesh-overview"===t.name,n=Object.assign({},e,{mesh:null});return a?e.mesh:Object.values(n).filter((function(t){return t}))[0]}}},u=c,d=(a("e7ab"),a("2877")),p=Object(d["a"])(u,n,r,!1,null,null,null);e["a"]=p.exports},be10:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.metrics?a("div",{staticClass:"info-grid"},t._l(t.metrics,(function(e,n){return null!==e.value?a("div",{key:n,staticClass:"metric",class:e.status,attrs:{"data-testid":e.metric}},[a("span",{staticClass:"metric-title"},[t._v(t._s(e.metric))]),a("span",{staticClass:"metric-value",class:{"has-error":n===t.hasError[n]}},[t._v(t._s(t._f("formatError")(t._f("formatValue")(e.value))))])]):t._e()})),0):t._e()},r=[],s=(a("456d"),a("ac6a"),a("6b54"),{name:"MetricsGrid",filters:{formatValue:function(t){return t?t.toLocaleString("en").toString():0},formatError:function(t){return"--"===t?"error calculating":t}},props:{metrics:{type:Array,required:!0,default:function(){}}},computed:{hasError:function(){var t=this,e={};return Object.keys(this.metrics).forEach((function(a){"--"===t.metrics[a].value&&(e[a]=a)})),e}}}),i=s,o=(a("79b0"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},c4a3:function(t,e,a){"use strict";var n=a("c74b"),r=a.n(n);r.a},c74b:function(t,e,a){},ce43:function(t,e,a){"use strict";var n=a("8d77"),r=a.n(n);r.a},e234:function(t,e,a){"use strict";var n=a("2055"),r=a.n(n);r.a},e577:function(t,e,a){},e7ab:function(t,e,a){"use strict";var n=a("af21"),r=a.n(n);r.a},ffc1:function(t,e,a){var n=a("5ca1"),r=a("504c")(!0);n(n.S,"Object",{entries:function(t){return r(t)}})}}]);