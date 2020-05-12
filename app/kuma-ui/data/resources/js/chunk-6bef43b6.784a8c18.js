(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bef43b6"],{"2ada":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard"},[a("div",{staticClass:"wizard__content"},[a("StepSkeleton",{ref:"stepSystem",attrs:{steps:e.steps,"advance-check":!0,"sidebar-content":e.sidebarContent,"next-disabled":e.nextDisabled}},[a("template",{slot:"general"},[a("p",[e._v("\n            Welcome to the wizard to create a new Dataplane entity in "+e._s(e.title)+".\n            We will be providing you with a few steps that will get you started.\n          ")]),a("p",[e._v("\n            As you know, the Kuma GUI is read-only.\n          ")]),a("Switcher"),a("h3",[e._v("\n            To get started, please select on what Mesh you would like to add the Dataplane:\n          ")]),a("p",[e._v("\n            If you've got an existing Mesh that you would like to associate with your\n            Dataplane, you can select it below, or create a new one using our Mesh Wizard.\n          ")]),a("KCard",{staticClass:"my-6",attrs:{"has-shadow":""}},[a("template",{slot:"body"},[a("FormFragment",{attrs:{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""}},[a("div",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.validate.meshName,expression:"validate.meshName"}],staticClass:"k-input w-100",attrs:{id:"dp-mesh"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.validate,"meshName",t.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[e._v("\n                      Select an existing Mesh…\n                    ")]),e._l(e.meshes.items,(function(t){return a("option",{key:t.name,domProps:{value:t.name}},[e._v("\n                      "+e._s(t.name)+"\n                    ")])}))],2)]),a("div",[a("label",{staticClass:"k-input-label mr-4"},[e._v("\n                    or\n                  ")]),a("KButton",{attrs:{to:{name:"create-mesh"},appearance:"primary"}},[e._v("\n                    Create a new Mesh\n                  ")])],1)])],1)],2)],1),a("template",{slot:"topology"},[a("h3",[e._v("\n            Setup Dataplane Mode\n          ")]),a("p",[e._v("\n            You can create a data plane for a service or a data plane for an Ingress gateway.\n          ")]),a("FormFragment",{attrs:{"all-inline":"","equal-cols":"","hide-label-col":"","shift-right":""}},[a("div",[a("label",{attrs:{for:"service-dataplane"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneType,expression:"validate.univDataplaneType"}],staticClass:"k-input",attrs:{id:"service-dataplane",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},domProps:{checked:e._q(e.validate.univDataplaneType,"dataplane-type-service")},on:{change:function(t){return e.$set(e.validate,"univDataplaneType","dataplane-type-service")}}}),a("span",[e._v("\n                  Service Dataplane\n                ")])]),a("label",{attrs:{for:"gateway-dataplane"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneType,expression:"validate.univDataplaneType"}],staticClass:"k-input",attrs:{id:"gateway-dataplane",type:"radio",name:"dataplane-type",value:"dataplane-type-gateway"},domProps:{checked:e._q(e.validate.univDataplaneType,"dataplane-type-gateway")},on:{change:function(t){return e.$set(e.validate,"univDataplaneType","dataplane-type-gateway")}}}),a("span",[e._v("\n                  Gateway Dataplane\n                ")])])])]),a("FormFragment",{attrs:{"all-inline":"",title:"Service name"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneServiceName,expression:"validate.univDataplaneServiceName"}],staticClass:"k-input w-100 mr-4",attrs:{id:"service-name",type:"text"},domProps:{value:e.validate.univDataplaneServiceName},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneServiceName",t.target.value)}}})]),a("FormFragment",{attrs:{"all-inline":"",title:"Dataplane ID","for-attr":"dataplane-id"}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneId,expression:"validate.univDataplaneId"}],staticClass:"k-input w-100",attrs:{id:"dataplane-id",type:"text",disabled:e.validate.univDataplaneCustomIdDisabled},domProps:{value:e.validate.univDataplaneId},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneId",t.target.value)}}})]),a("div",[a("KButton",{attrs:{appearance:"primary"},on:{click:function(t){e.validate.univDataplaneCustomIdDisabled=!1}}},[e._v("\n                Edit\n              ")]),a("HelperTooltip",[e._v("\n                This is a unique ID for the Dataplane instance.\n              ")])],1)])],1),a("template",{slot:"networking"},[a("h3",[e._v("\n            Networking\n          ")]),a("p",[e._v("\n            It's time to now configure the networking settings so that the Dataplane\n            can connect to the local service, and other data planes can consume\n            your service.\n          ")]),a("p",[a("strong",[e._v("All fields below are required to proceed.")])]),a("FormFragment",{attrs:{"all-inline":"",title:"IP Address","for-attr":"network-address"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkAddress,expression:"validate.univDataplaneNetworkAddress"}],staticClass:"k-input w-100",attrs:{id:"network-address",type:"text"},domProps:{value:e.validate.univDataplaneNetworkAddress},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkAddress",t.target.value)}}}),a("HelperTooltip",[e._v("\n              The IP address that other services will use to consume this data plane.\n            ")])],1),a("FormFragment",{attrs:{"all-inline":"",title:"Service Port","for-attr":"network-service-port"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkServicePort,expression:"validate.univDataplaneNetworkServicePort"}],staticClass:"k-input w-100",attrs:{id:"network-service-port",type:"text"},domProps:{value:e.validate.univDataplaneNetworkServicePort},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkServicePort",t.target.value)}}}),a("HelperTooltip",[e._v("\n              The port where your service is listening on the machine.\n            ")])],1),a("FormFragment",{attrs:{"all-inline":"","fill-first":"",title:"Data plane port","for-attr":"network-dataplane-port"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkDPPort,expression:"validate.univDataplaneNetworkDPPort"}],staticClass:"k-input w-100",attrs:{id:"network-dataplane-port",type:"text"},domProps:{value:e.validate.univDataplaneNetworkDPPort},on:{input:function(t){t.target.composing||e.$set(e.validate,"univDataplaneNetworkDPPort",t.target.value)}}}),a("HelperTooltip",[e._v("\n              The data plane port (that other services will use to consume this service).\n            ")])],1),a("FormFragment",{attrs:{"all-inline":"",title:"Protocol","for-attr":"network-dataplane-protocol"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.validate.univDataplaneNetworkProtocol,expression:"validate.univDataplaneNetworkProtocol"}],staticClass:"k-input w-100",attrs:{id:"network-dataplane-protocol",name:"network-dataplane-protocol"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.validate,"univDataplaneNetworkProtocol",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"tcp"},domProps:{selected:"tcp"===e.validate.univDataplaneNetworkProtocol}},[e._v("\n                TCP\n              ")]),a("option",{attrs:{value:"http"},domProps:{selected:"http"===e.validate.univDataplaneNetworkProtocol}},[e._v("\n                HTTP\n              ")])]),a("HelperTooltip",[e._v("\n              The protocol of the service.\n            ")])],1)],1),a("template",{slot:"complete"},[e.validate.meshName?a("div",[!1===e.scanFound?a("div",[a("h3",[e._v("\n                Install a new Dataplane\n              ")]),a("p",[e._v("\n                You can now execute the following commands to automatically inject\n                the sidebar proxy in every Pod, and by doing so creating the Dataplane.\n              ")]),a("Tabs",{attrs:{loaders:!1,tabs:e.tabs,"has-border":!0,"initial-tab-override":"universal"}},[a("template",{slot:"universal"},[a("CodeView",{attrs:{title:"Universal","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.codeOutput}})],1)],2)],1):e._e(),a("Scanner",{attrs:{"loader-function":e.scanForEntity,"should-start":!0,"has-error":e.scanError,"can-complete":e.scanFound}},[a("template",{slot:"loading-title"},[a("h3",[e._v("Searching…")])]),a("template",{slot:"loading-content"},[a("p",[e._v("We are looking for your dataplane.")])]),a("template",{slot:"complete-title"},[a("h3",[e._v("Done!")])]),a("template",{slot:"complete-content"},[a("p",[e._v("\n                  Your Dataplane\n                  "),e.validate.univDataplaneId?a("strong",[e._v("\n                    "+e._s(e.validate.univDataplaneId)+"\n                  ")]):e._e(),e._v("\n                  was found!\n                ")]),a("p",[e._v("\n                  Proceed to the next step where we will explain how to start\n                  your new Dataplane.\n                ")]),a("p",[a("KButton",{attrs:{appearance:"primary"},on:{click:function(t){return e.$refs.stepSystem.goToNextStep()}}},[e._v("\n                    Start Your Dataplane\n                  ")])],1)]),a("template",{slot:"error-title"},[a("h3",[e._v("Mesh not found")])]),a("template",{slot:"error-content"},[a("p",[e._v("We were unable to find your mesh.")])])],2)],1):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[a("p",[e._v("\n                Please return to the first step and make sure to select an\n                existing Mesh, or create a new one.\n              ")])])],2)],1),a("template",{slot:"start"},[e.validate.meshName?a("div",[a("h3",[e._v("\n              Start your Dataplane\n            ")]),a("p",[e._v("\n              Now that "+e._s(e.title)+" knows that the configured Dataplane will eventually\n              connect to it, it's time to first generate the credentials that will allow\n              the Dataplane to successfully authenticate itself with the control plane,\n              and then finally start the Dataplane process (powered by Envoy).\n            ")]),a("Tabs",{attrs:{loaders:!1,tabs:e.tabs,"has-border":!0,"initial-tab-override":"universal"}},[a("template",{slot:"universal"},[a("CodeView",{attrs:{title:"Generate Dataplane Token","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.generateDpTokenCodeOutput}}),a("CodeView",{attrs:{title:"Start Dataplane Process","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:e.startDpCodeOutput}})],1)],2)],1):a("KAlert",{attrs:{appearance:"danger"}},[a("template",{slot:"alertMessage"},[a("p",[e._v("\n                Please return to the first step and make sure to select an\n                existing Mesh, or create a new one.\n              ")])])],2)],1),a("template",{slot:"dataplane"},[a("h3",[e._v("Dataplane")]),a("p",[e._v("\n            In "+e._s(e.title)+", a Dataplane entity represents a sidebar proxy running\n            alongside one of your services. Dataplanes can be added in any Mesh\n            that you may have created, and in Kubernetes, they will be auto-injected\n            by "+e._s(e.title)+".\n          ")])]),a("template",{slot:"example"},[a("h3",[e._v("Example")]),a("p",[e._v("\n            Below is an example of a Dataplane resource output:\n          ")]),a("code",[a("pre",[e._v("type: Dataplane\nmesh: default\nname: dp-echo-1\nnetworking:\n  address: 10.0.0.1\n  inbound:\n  - port: 10000\n    servicePort: 9000\n    tags:\n      service: echo")])])])],2)],1)])},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("a481"),a("6b54"),a("bd86")),o=a("2f62"),l=a("cfb0"),s=a("ad2f"),p=a("2791"),u=a("251b"),v=a("4c4d"),c=a("e108"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("KPop",{staticClass:"help-icon",attrs:{trigger:"hover"}},[a("a",[e._v("?")]),a("div",{attrs:{slot:"content"},slot:"content"},[e._t("default")],2)])},m=[],h={},g=h,w=a("2877"),f=Object(w["a"])(g,d,m,!1,null,null,null),D=f.exports,b=a("12d5"),y=a("c3b5"),k=a("9ef1"),_=a.n(k);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var S={name:"DataplaneWizardUniversal",metaInfo:{title:"Create a new Dataplane on Universal"},components:{FormFragment:p["a"],Tabs:u["a"],StepSkeleton:v["a"],Switcher:c["a"],HelperTooltip:D,CodeView:b["a"],Scanner:y["a"]},mixins:[s["a"],l["a"]],data:function(){return{schema:_.a,steps:[{label:"General",slug:"general"},{label:"Topology",slug:"topology"},{label:"Networking",slug:"networking"},{label:"Install",slug:"complete"},{label:"Start",slug:"start"}],tabs:[{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"dataplane"},{name:"example"}],startScanner:!1,scanFound:!1,scanError:!1,isComplete:!1,nextDisabled:!0,validate:{meshName:"",univDataplaneType:"dataplane-type-service",univDataplaneServiceName:"",univDataplaneId:"",univDataplaneCustomIdDisabled:!0,univDataplaneNetworkAddress:null,univDataplaneNetworkServicePort:null,univDataplaneNetworkDPPort:null,univDataplaneNetworkProtocol:"tcp"},vmsg:[]}},computed:N({},Object(o["b"])({title:"getTagline",version:"getVersion",environment:"getEnvironment",formData:"getStoredWizardData",selectedTab:"getSelectedTab",meshes:"getMeshList"}),{randString:function(){return Math.random().toString(36).substring(2,8)},codeOutput:function(){var e=Object.assign({},this.schema),t=this.validate,a=t.meshName,n=t.univDataplaneType,r=t.univDataplaneServiceName,i=t.univDataplaneId,o=t.univDataplaneNetworkAddress,l=t.univDataplaneNetworkServicePort,s=t.univDataplaneNetworkDPPort,p=t.univDataplaneNetworkProtocol;if(a){e.name=i,e.mesh=a,"dataplane-type-service"===n?(e.networking.gateway&&delete e.networking.gateway,e.networking={address:o,inbound:[{port:s,servicePort:l,tags:{service:r,protocol:p}}]}):"dataplane-type-gateway"===n&&(e.networking.inbound&&delete e.networking.inbound,e.networking={address:o,gateway:{tags:{service:r}}});var u='" | kumactl apply -f -',v=this.formatForCLI(e,u);return v}},generateDpTokenCodeOutput:function(){var e=this.validate,t=(e.meshName,e.univDataplaneId),a="kumactl generate dataplane-token --dataplane=".concat(t," > kuma-token-").concat(t);return a},startDpCodeOutput:function(){var e=this.$store.getters.getConfig.general.advertisedHostname,t=this.validate,a=t.meshName,n=t.univDataplaneId,r="kuma-dp run \\\n      --name=".concat(n," \\\n      --mesh=").concat(a," \\\n      --cp-address=").concat(e," \\\n      --dataplane-token-file=kuma-token-").concat(n);return r}}),watch:{validate:{handler:function(){var e=JSON.stringify(this.validate),t=this.validate.meshName,a=this.validate,n=a.univDataplaneServiceName,r=a.univDataplaneId,i=a.univDataplaneNetworkAddress,o=a.univDataplaneNetworkServicePort,l=a.univDataplaneNetworkDPPort,s=a.univDataplaneNetworkProtocol;localStorage.setItem("storedFormData",e),t.length?this.nextDisabled=!1:this.nextDisabled=!0,2===this.$route.query.step&&(this.nextDisabled=!(i&&o&&l&&s)),1===this.$route.query.step&&(this.nextDisabled=!n||!r)},deep:!0},$route:function(){var e=this.$route.query.step,t=this.validate,a=t.univDataplaneServiceName,n=t.univDataplaneId,r=t.univDataplaneNetworkAddress,i=t.univDataplaneNetworkServicePort,o=t.univDataplaneNetworkDPPort,l=t.univDataplaneNetworkProtocol;1===e&&(this.nextDisabled=!a||!n),2===e&&(this.nextDisabled=!(r&&i&&o&&l))},"validate.univDataplaneId":function(e){var t=e.replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();this.validate.univDataplaneId=t},"validate.univDataplaneServiceName":function(e){var t=e.replace(/[^a-zA-Z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),a="".concat(e,"-").concat(this.randString).replace(/\s+/g,"-").replace(/-+/g,"-").trim();this.validate.univDataplaneServiceName=t,""===this.validate.univDataplaneServiceName?this.validate.univDataplaneId="":this.validate.univDataplaneId=a},"validate.univDataplaneNetworkServicePort":function(e){var t=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkServicePort=t},"validate.univDataplaneNetworkDPPort":function(e){var t=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkDPPort=t}},methods:{scanForEntity:function(){var e=this,t=this.validate,a=t.meshName,n=t.univDataplaneId;this.scanComplete=!1,this.scanError=!1,a&&n&&this.$api.getDataplaneFromMesh(a,n).then((function(t){t&&t.name.length>0?(e.isRunning=!0,e.scanFound=!0):e.scanError=!0})).catch((function(t){e.scanError=!0,console.error(t)})).finally((function(){e.scanComplete=!0}))}}},x=S,C=Object(w["a"])(x,n,r,!1,null,null,null);t["default"]=C.exports},"9ef1":function(e,t){e.exports={type:"Dataplane",mesh:null,name:null,networking:{}}},a481:function(e,t,a){"use strict";var n=a("cb7c"),r=a("4bf8"),i=a("9def"),o=a("4588"),l=a("0390"),s=a("5f1b"),p=Math.max,u=Math.min,v=Math.floor,c=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,h){return[function(n,r){var i=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,i,r):a.call(String(i),n,r)},function(e,t){var r=h(a,e,this,t);if(r.done)return r.value;var v=n(e),c=String(this),d="function"===typeof t;d||(t=String(t));var w=v.global;if(w){var f=v.unicode;v.lastIndex=0}var D=[];while(1){var b=s(v,c);if(null===b)break;if(D.push(b),!w)break;var y=String(b[0]);""===y&&(v.lastIndex=l(c,i(v.lastIndex),f))}for(var k="",_=0,P=0;P<D.length;P++){b=D[P];for(var N=String(b[0]),S=p(u(o(b.index),c.length),0),x=[],C=1;C<b.length;C++)x.push(m(b[C]));var O=b.groups;if(d){var I=[N].concat(x,S,c);void 0!==O&&I.push(O);var T=String(t.apply(void 0,I))}else T=g(N,c,S,x,O,t);S>=_&&(k+=c.slice(_,S)+T,_=S+N.length)}return k+c.slice(_)}];function g(e,t,n,i,o,l){var s=n+e.length,p=i.length,u=d;return void 0!==o&&(o=r(o),u=c),a.call(l,u,(function(a,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(s);case"<":l=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>p){var c=v(u/10);return 0===c?a:c<=p?void 0===i[c-1]?r.charAt(1):i[c-1]+r.charAt(1):a}l=i[u-1]}return void 0===l?"":l}))}}))},e108:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wizard-switcher"},[a("KEmptyState",{staticClass:"my-6 empty-state--wide-content empty-state--compact",attrs:{"cta-is-hidden":"","is-error":!e.environment}},["kubernetes"===e.environment||"universal"===e.environment?a("template",{slot:"title"},[e._v("\n      Running on "+e._s(e.environment)+"\n    ")]):e._e(),a("template",{slot:"message"},["kubernetes"===e.environment?a("div",[this.$route.name===e.wizardRoutes.kubernetes?a("div",[a("p",[e._v("\n            We have detected that you are running on a "),a("strong",[e._v("Kubernetes environment")]),e._v(",\n            and we are going to be showing you instructions for Kubernetes unless you\n            decide to visualize the instructions for Universal.\n          ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.universal},appearance:"primary"}},[e._v("\n              Switch to Universal instructions\n            ")])],1)]):this.$route.name===e.wizardRoutes.universal?a("div",[a("p",[e._v("\n            We have detected that you are running on a "),a("strong",[e._v("Kubernetes environment")]),e._v(",\n            but you are viewing instructions for Universal.\n          ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.kubernetes},appearance:"primary"}},[e._v("\n              Switch back to Kubernetes instructions\n            ")])],1)]):e._e()]):"universal"===e.environment?a("div",[this.$route.name===e.wizardRoutes.kubernetes?a("div",[a("p",[e._v("\n            We have detected that you are running on a "),a("strong",[e._v("Universal environment")]),e._v(",\n            but you are viewing instructions for Kubernetes.\n          ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.universal},appearance:"primary"}},[e._v("\n              Switch back to Universal instructions\n            ")])],1)]):this.$route.name===e.wizardRoutes.universal?a("div",[a("p",[e._v("\n            We have detected that you are running on a "),a("strong",[e._v("Universal environment")]),e._v(",\n            and we are going to be showing you instructions for Universal unless you\n            decide to visualize the instructions for Universal.\n          ")]),a("p",[a("KButton",{attrs:{to:{name:e.wizardRoutes.kubernetes},appearance:"primary"}},[e._v("\n              Switch to Kubernetes instructions\n            ")])],1)]):e._e()]):e._e()])],2)],1)},r=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),o=a("2f62");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"Switcher",data:function(){return{wizardRoutes:{kubernetes:"kubernetes-dataplane",universal:"universal-dataplane"}}},computed:s({},Object(o["b"])({environment:"getEnvironment"}),{instructionsCtaText:function(){return"universal"===this.environment?"Switch to Kubernetes instructions":"Switch to Universal instructions"},instructionsCtaRoute:function(){return"kubernetes"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}}})},u=p,v=a("2877"),c=Object(v["a"])(u,n,r,!1,null,null,null);t["a"]=c.exports}}]);