"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[1196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"Overview/Metrics",id:"version-1.1.0/Overview/Metrics",title:"Metrics",description:"metric-sequence",source:"@site/versioned_docs/version-1.1.0/Overview/Metrics.md",sourceDirName:"Overview",slug:"/Overview/Metrics",permalink:"/1.1.0/Overview/Metrics",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Overview/Metrics.md",tags:[],version:"1.1.0",frontMatter:{}},p={},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metric-sequence",src:n(3753).Z,width:"438",height:"252"})),(0,i.kt)("p",null,"Metrics Card help you to present chart style information, Ex: device temperature. Sequence flow just same with State Card."),(0,i.kt)("p",null,"Take a look at the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-26}","{17-26}":!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "metrics": [\n          {\n            "name": "cpu_temperature",\n            "displayName": "CPU Temperature",\n            "description": "Present CPU Temprature in chart.",\n            "displayCategory": "ChartCategory1",\n            "displayType": "temperature",\n            "displayUnit": "",\n            "value": ""\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"After Sending ",(0,i.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," JSON above, Allxon Portal will show Metrics Card below. Diagram is empty, because it's still in initialize state."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metric-init",src:n(7539).Z,width:"588",height:"632"})),(0,i.kt)("p",null,"Let's try send ",(0,i.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginMetric")," to upload data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "jsonrpc": "2.0",\n   "method": "v2/notifyPluginMetric",\n   "params": {\n      "appGUID": "${PLUGIN_APP_GUID}",\n      "moduleName": "${PLUGIN_NAME}",\n      "epoch": "",\n      "metrics": [\n         {\n            "name": "cpu_temperature",\n            "value": "298.15"\n         }\n      ]\n   }\n}\n')),(0,i.kt)("p",null,"You may curious why ",(0,i.kt)("inlineCode",{parentName:"p"},'"value"')," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"298.5"'),", because if your ",(0,i.kt)("inlineCode",{parentName:"p"},'"displayType"')," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},'"temperature"'),", Allxon Portal would assume your ",(0,i.kt)("inlineCode",{parentName:"p"},'"value"')," unit is Kelvin."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This ",(0,i.kt)("a",{parentName:"p",href:"https://www.unitconverters.net/"},"link")," help you to convert between Celcius and Kelvin.")),(0,i.kt)("p",null,"Metric Card will display like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metric-first-shot",src:n(4458).Z,width:"594",height:"503"})),(0,i.kt)("p",null,"Keep sending second shot of ",(0,i.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginMetric"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"metric-second-shot",src:n(2565).Z,width:"603",height:"501"})))}u.isMDXComponent=!0},7539:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metric-init-6c0dafc313f27879360e53ccfdd049b3.png"},3753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metric-sequence-c4b2d0b045b634e3ecb914fcd7f02827.png"},4458:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics-first-shot-db8081d566195cbf50e06367d4246f53.png"},2565:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics-second-shot-d1b032f4621545e7927ae9e0c10e5eb0.png"}}]);