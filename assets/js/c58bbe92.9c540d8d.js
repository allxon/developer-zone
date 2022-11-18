"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[9365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,p={unversionedId:"Implement Features/Metrics",id:"Implement Features/Metrics",title:"Metrics",description:"metric-sequence",source:"@site/docs/Implement Features/Metrics.md",sourceDirName:"Implement Features",slug:"/Implement Features/Metrics",permalink:"/Implement Features/Metrics",draft:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Implement Features/Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/Implement Features/Alerts"},next:{title:"Events",permalink:"/Implement Features/Events"}},s={},l=[],c={toc:l};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metric-sequence",src:n(2975).Z,width:"680",height:"347"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Metrics")," feature helps you to present information in a ",(0,a.kt)("strong",{parentName:"p"},"Charts")," card on the Portal, such as device temperature. The sequence flow is just the same as that of the ",(0,a.kt)("strong",{parentName:"p"},"States")," card."),(0,a.kt)("p",null,"Here is an example of creating the ",(0,a.kt)("strong",{parentName:"p"},"Charts")," card:"),(0,a.kt)("p",null,"First, send the following ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginUpdate")," JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"{17-26}","{17-26}":!0},'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "metrics": [\n          {\n            "name": "cpu_temperature",\n            "displayName": "CPU Temperature",\n            "description": "Present CPU Temprature in chart.",\n            "displayCategory": "ChartCategory1",\n            "displayType": "temperature",\n            "displayUnit": "",\n            "value": ""\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"Once done, Allxon Portal shows the ",(0,a.kt)("strong",{parentName:"p"},"Charts")," card below. The diagram is empty because it's still in the initialization state."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metric-init",src:n(3672).Z,width:"588",height:"632"})),(0,a.kt)("p",null,"Now you can send ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginMetric")," to upload data:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "jsonrpc": "2.0",\n   "method": "v2/notifyPluginMetric",\n   "params": {\n      "appGUID": "${PLUGIN_APP_GUID}",\n      "moduleName": "${PLUGIN_NAME}",\n      "epoch": "",\n      "metrics": [\n         {\n            "name": "cpu_temperature",\n            "value": "298.15"\n         }\n      ]\n   }\n}\n')),(0,a.kt)("p",null,"While the ",(0,a.kt)("inlineCode",{parentName:"p"},'"value"')," is ",(0,a.kt)("inlineCode",{parentName:"p"},'\u201c298.15"')," in the code line above, why does the Charts card show 25",(0,a.kt)("sup",null,"o"),"C ? This is because Allxon Portal uses ",(0,a.kt)("strong",{parentName:"p"},"Kelvin")," as the unit of temperature if you select ",(0,a.kt)("inlineCode",{parentName:"p"},'"temperature"')," as the ",(0,a.kt)("inlineCode",{parentName:"p"},'"displayType"'),"."),(0,a.kt)("p",null,"You may curious why ",(0,a.kt)("inlineCode",{parentName:"p"},'"value"')," is ",(0,a.kt)("inlineCode",{parentName:"p"},'"298.5"'),", because if your ",(0,a.kt)("inlineCode",{parentName:"p"},'"displayType"')," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},'"temperature"'),", Allxon Portal would assume your ",(0,a.kt)("inlineCode",{parentName:"p"},'"value"')," unit is Kelvin."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this ",(0,a.kt)("a",{parentName:"p",href:"https://www.unitconverters.net/"},"unit converter")," to make sure you convert correctly between ",(0,a.kt)("em",{parentName:"p"},"Fahrenheit"),", ",(0,a.kt)("em",{parentName:"p"},"Celsius")," and ",(0,a.kt)("em",{parentName:"p"},"Kelvin"),".")),(0,a.kt)("p",null,"Below is an example of the ",(0,a.kt)("strong",{parentName:"p"},"Charts")," card::"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metric-first-shot",src:n(7292).Z,width:"594",height:"503"})),(0,a.kt)("p",null,"You can continue to send the ",(0,a.kt)("inlineCode",{parentName:"p"},"v2/notifyPluginMetric"),". The chart is updated accordingly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"metric-second-shot",src:n(9183).Z,width:"603",height:"501"})))}m.isMDXComponent=!0},3672:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metric-init-6c0dafc313f27879360e53ccfdd049b3.png"},2975:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metric-sequence-9cfdba9cd96a6502327ec88f3dba6f6b.png"},7292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics-first-shot-db8081d566195cbf50e06367d4246f53.png"},9183:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/metrics-second-shot-d1b032f4621545e7927ae9e0c10e5eb0.png"}}]);