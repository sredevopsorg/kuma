(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e236f7d"],{"06bd":function(t,a,e){"use strict";var s=e("a05e"),n=e.n(s);n.a},"0ada":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"label-list"},[t.isReady?e("div",{staticClass:"label-list-content"},[t.isLoading||t.isEmpty?t._e():e("KCard",{attrs:{title:t.title,"border-variant":"noBorder"}},[e("template",{slot:"body"},[e("ul",{staticClass:"label-list__items",class:t.colClass},t._l(t.items,(function(a,s){return e("li",{key:s},[e("h4",{staticClass:"label-list__items__title"},[t._v("\n              "+t._s(s)+"\n            ")]),"tags"===s?e("p",{staticClass:"label-list__items__value"},t._l(a,(function(a,s){return e("span",{key:a,staticClass:"tag-cols my-2"},[e("span",{staticClass:"tag-cols__label"},[t._v("\n                  "+t._s(s)+":\n                ")]),e("span",{staticClass:"tag-cols__value"},[t._v("\n                  "+t._s(a)+"\n                ")])])})),0):e("p",[t._v("\n              "+t._s(a)+"\n            ")])])})),0)])],2)],1):t._e(),t.isLoading?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v("\n      Data Loading...\n    ")])],2):t._e(),t.isEmpty&&!t.isLoading?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n      There is no data to display.\n    ")])],2):t._e(),t.hasError?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n      An error has occurred while trying to load this data.\n    ")])],2):t._e()],1)},n=[],i=(e("ac6a"),e("ffc1"),{name:"LabelList",props:{items:{type:Object,default:null},title:{type:String,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading},colClass:function(){var t=Object.entries(this.items).length;return t>6?"has-columns cols-2":t>=9?"has-columns cols-3":null}}}),l=i,o=(e("8410"),e("2877")),r=Object(o["a"])(l,s,n,!1,null,"7d528372",null);a["a"]=r.exports},1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pagination"},[e("KButton",{ref:"paginatePrev",attrs:{disabled:!t.hasPrevious,appearance:"primary"},on:{click:function(a){return t.$emit("previous")}}},[t._v("\n    ‹ Previous\n  ")]),e("KButton",{ref:"paginateNext",attrs:{disabled:!t.hasNext,appearance:"primary"},on:{click:function(a){return t.$emit("next")}}},[t._v("\n    Next ›\n  ")])],1)},n=[],i={name:"Pagination",props:{hasPrevious:{type:Boolean,default:!1},hasNext:{type:Boolean,default:!1}}},l=i,o=(e("06bd"),e("2877")),r=Object(o["a"])(l,s,n,!1,null,"3545675c",null);a["a"]=r.exports},"17ed":function(t,a,e){"use strict";var s=e("1bfa"),n=e.n(s);n.a},"1bfa":function(t,a,e){},"1d10":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"component-frame"},[t._t("default")],2)},n=[],i={name:"FrameSkeleton"},l=i,o=(e("8463"),e("2877")),r=Object(o["a"])(l,s,n,!1,null,"664e217a",null);a["a"]=r.exports},2699:function(t,a,e){},2778:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"data-overview"},[s("div",{staticClass:"data-table-controls mb-2"},[t._t("additionalControls"),t.displayRefreshControl?s("KButton",{staticClass:"ml-2",attrs:{appearance:"primary",size:"small",disabled:t.isLoading},on:{click:function(a){return t.$emit("reloadData")}}},[t.isLoading?s("KIcon",{attrs:{icon:"spinner",color:"#fff",size:"48"}}):t._e(),s("span",[t._v("Refresh")])],1):t._e()],2),t.isReady?s("div",{staticClass:"data-overview-content"},[!t.isLoading&&t.displayMetrics&&t.metricsData?s("MetricGrid",{attrs:{metrics:t.metricsData}}):t._e(),t.displayDataTable&&!t.tableDataIsEmpty&&t.tableData?s("div",{staticClass:"data-overview-table"},[s("KTable",{staticClass:"micro-table",class:{"data-table-is-hidden":t.tableDataIsEmpty,"has-border":t.tableHasBorder},attrs:{options:t.tableDataFiltered,"has-hover":""},on:{"row:click":t.tableRowHandler},scopedSlots:t._u([t.displayTableDataStatus?{key:"status",fn:function(a){var e=a.rowValue;return[s("div",{staticClass:"entity-status",class:{"is-offline":"offline"===e.toLowerCase()}},[s("span",{staticClass:"entity-status__dot"}),s("span",{staticClass:"entity-status__label"},[t._v(t._s(e))])])]}}:null,{key:"tags",fn:function(a){var e=a.rowValue;return t._l(e,(function(a,e){return s("span",{key:e,staticClass:"entity-tags",class:"entity-tags--"+e},[s("span",{staticClass:"entity-tags__label",class:"entity-tags__label--"+a.label.toLowerCase()},[t._v("\n              "+t._s(a.label)+"\n            ")]),s("span",{staticClass:"entity-tags__value",class:"entity-tags__value--"+a.value},[t._v("\n              "+t._s(a.value)+"\n            ")])])}))}},{key:"actions",fn:function(a){var e=a.row;return[t.tableDataFunctionText?s("a",{staticClass:"data-table-action-link",class:{"is-active":t.$store.state.selectedTableRow===e.name}},[t.$store.state.selectedTableRow===e.name?s("span",{staticClass:"action-link__active-state"},[t._v("\n              ✓\n              "),s("span",{staticClass:"sr-only"},[t._v("\n                Selected\n              ")])]):s("span",{staticClass:"action-link__normal-state"},[t._v("\n              "+t._s(t.tableDataFunctionText)+"\n            ")])]):t._e()]}}],null,!0)}),t._t("pagination")],2):t._e(),t.displayDataTable&&t.tableDataIsEmpty&&t.tableData?s("KEmptyState",{attrs:{"cta-is-hidden":""}},[s("template",{slot:"title"},[s("div",{staticClass:"card-icon mb-3"},[s("img",{attrs:{src:e("a448")}})]),t.emptyState.title?s("span",[t._v("\n          "+t._s(t.emptyState.title)+"\n        ")]):s("span",[t._v("\n          No Items Found\n        ")])]),t.emptyState.message?s("template",{slot:"message"},[t._v("\n        "+t._s(t.emptyState.message)+"\n      ")]):t._e()],2):t._e(),t.$slots.content?s("div",{staticClass:"data-overview-content mt-6"},[t._t("content")],2):t._e()],1):t._e(),t.isLoading?s("KEmptyState",{attrs:{"cta-is-hidden":""}},[s("template",{slot:"title"},[s("div",{staticClass:"card-icon mb-3"},[s("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v("\n      Data Loading...\n    ")])],2):t._e(),t.hasError?s("KEmptyState",{attrs:{"cta-is-hidden":""}},[s("template",{slot:"title"},[s("div",{staticClass:"card-icon mb-3"},[s("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n      An error has occurred while trying to load this data.\n    ")])],2):t._e()],1)},n=[],i=(e("7f7f"),e("75fc")),l=(e("ac6a"),e("ffc1"),e("c5f6"),e("be10")),o=e("1799"),r={name:"DataOverview",components:{MetricGrid:l["a"],Pagination:o["a"]},props:{pageSize:{type:Number,default:12},displayMetrics:{type:Boolean,default:!1},metricsData:{type:Array,default:null},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},emptyState:{type:Object,default:null},ctaAction:{type:Object,default:function(){}},showCta:{type:Boolean,default:!0},displayDataTable:{type:Boolean,default:!1},tableData:{type:Object,default:null},tableHasBorder:{type:Boolean,required:!1,default:!1},tableDataIsEmpty:{type:Boolean,default:!1},tableDataActionsLink:{type:String,default:null},tableActionsRouteName:{type:String,default:null},displayTableDataStatus:{type:Boolean,default:!0},displayRefreshControl:{type:Boolean,default:!0},tableDataRow:{type:String,required:!1,default:"name"},tableDataFunctionText:{type:String,required:!1,default:null}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading},tableRowCount:function(){return Object.entries(this.tableData.data).length},pageCount:function(){var t=Object.entries(this.tableData.data).length,a=this.pageSize;return Math.ceil(t/a)},tableDataFiltered:function(){var t=this.tableData.data,a=this.tableData.headers,e={headers:a,data:Object(i["a"])(t)};return e}},methods:{tableRowHandler:function(t,a,e){this.$emit("tableAction",{name:a.name,mesh:a.mesh})}}},c=r,d=(e("9947"),e("2877")),u=Object(d["a"])(c,s,n,!1,null,null,null);a["a"]=u.exports},"2f21":function(t,a,e){"use strict";var s=e("79e5");t.exports=function(t,a){return!!t&&s((function(){a?t.call(null,(function(){}),1):t.call(null)}))}},4496:function(t,a,e){},"55dd":function(t,a,e){"use strict";var s=e("5ca1"),n=e("d8e8"),i=e("4bf8"),l=e("79e5"),o=[].sort,r=[1,2,3];s(s.P+s.F*(l((function(){r.sort(void 0)}))||!l((function(){r.sort(null)}))||!e("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),n(t))}})},"79b0":function(t,a,e){"use strict";var s=e("9e30"),n=e.n(s);n.a},8218:function(t,a,e){"use strict";e("7f7f"),e("55dd");a["a"]={methods:{sortEntities:function(t){var a=t.sort((function(t,a){return t.name>a.name||t.name===a.name&&t.mesh>a.mesh?1:-1}));return a}}}},8410:function(t,a,e){"use strict";var s=e("4496"),n=e.n(s);n.a},8463:function(t,a,e){"use strict";var s=e("e577"),n=e.n(s);n.a},9947:function(t,a,e){"use strict";var s=e("2699"),n=e.n(s);n.a},"9e30":function(t,a,e){},a05e:function(t,a,e){},a448:function(t,a){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0MiI+CiAgPHBhdGggZmlsbD0iI0Q5RDlEOSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDggNHY1aC0yVjZIMnYzSDBWMkMwIC44OTU0MzA1Ljg5NTQzMSAwIDIgMGg0NGMxLjEwNDU2OSAwIDIgLjg5NTQzMDUgMiAydjJ6bS0yIDI2aC00di0yaDR2LTNoMnY4aC0ydi0zek0yIDMwdjNIMHYtOGgydjNoNHYySDJ6bTQ0LTEyaC00di0yaDR2LTNoMnY4aC0ydi0zek0yIDE4djNIMHYtOGgydjNoNHYySDJ6bTgtMmg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6TTEwIDI4aDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptOCAwaDR2MmgtNHYtMnptMTIgMTRoLTR2LTJoNHYtM2gydjNjMCAxLjEwNDU2OTUtLjg5NTQzMSAyLTIgMnpNMiA0MGg0djJIMmMtMS4xMDQ1NjkgMC0yLS44OTU0MzA1LTItMnYtM2gydjN6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6bTggMGg0djJoLTR2LTJ6TTIgMnYyaDQ0VjJIMnoiLz4KPC9zdmc+Cg=="},be10:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.metrics?e("div",{staticClass:"info-grid"},t._l(t.metrics,(function(a,s){return null!==a.value?e("div",{key:s,staticClass:"metric",class:a.status,attrs:{"data-testid":a.metric}},[e("span",{staticClass:"metric-title"},[t._v(t._s(a.metric))]),e("span",{staticClass:"metric-value",class:{"has-error":s===t.hasError[s]}},[t._v(t._s(t._f("formatError")(t._f("formatValue")(a.value))))])]):t._e()})),0):t._e()},n=[],i=(e("456d"),e("ac6a"),e("6b54"),{name:"MetricsGrid",filters:{formatValue:function(t){return t?t.toLocaleString("en").toString():0},formatError:function(t){return"--"===t?"error calculating":t}},props:{metrics:{type:Array,required:!0,default:function(){}}},computed:{hasError:function(){var t=this,a={};return Object.keys(this.metrics).forEach((function(e){"--"===t.metrics[e].value&&(a[e]=e)})),a}}}),l=i,o=(e("79b0"),e("2877")),r=Object(o["a"])(l,s,n,!1,null,null,null);a["a"]=r.exports},e577:function(t,a,e){},ff9d:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"yaml-view"},[t.isReady?e("div",{staticClass:"yaml-view-content"},[t.isLoading||t.isEmpty?t._e():e("KCard",{attrs:{title:t.title,"border-variant":"noBorder"}},[e("template",{slot:"body"},[e("prism",{staticClass:"code-block",attrs:{language:"yaml",code:t.yamlContent}})],1),e("template",{slot:"actions"},[t.content?e("KClipboardProvider",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.copyToClipboard;return[e("KPop",{attrs:{placement:"bottom"}},[e("KButton",{attrs:{appearance:"primary"},on:{click:function(){s(t.yamlContent)}}},[t._v("\n              Copy YAML to Clipboard\n            ")]),e("div",{attrs:{slot:"content"},slot:"content"},[e("p",[t._v("Entity copied to clipboard!")])])],1)]}}],null,!1,3263455707)}):t._e()],1)],2)],1):t._e(),!0===t.loaders?e("div",[t.isLoading?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{attrs:{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"}})],1),t._v("\n        Data Loading...\n      ")])],2):t._e(),t.isEmpty&&!t.isLoading?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n        There is no data to display.\n      ")])],2):t._e(),t.hasError?e("KEmptyState",{attrs:{"cta-is-hidden":""}},[e("template",{slot:"title"},[e("div",{staticClass:"card-icon mb-3"},[e("KIcon",{staticClass:"kong-icon--centered",attrs:{color:"var(--yellow-base)",icon:"warning",size:"42"}})],1),t._v("\n        An error has occurred while trying to load this data.\n      ")])],2):t._e()],1):t._e()])},n=[],i=e("2ccf"),l=e.n(i),o=(e("a878"),e("e80b")),r=e.n(o),c={name:"YamlView",components:{prism:l.a},props:{title:{type:String,default:null},content:{type:Object,default:null},loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},computed:{isReady:function(){return!this.isEmpty&&!this.hasError&&!this.isLoading},yamlContent:function(){var t=this.content;return r()(t)}}},d=c,u=(e("17ed"),e("2877")),p=Object(u["a"])(d,s,n,!1,null,"a2fb0460",null);a["a"]=p.exports},ffc1:function(t,a,e){var s=e("5ca1"),n=e("504c")(!0);s(s.S,"Object",{entries:function(t){return n(t)}})}}]);