"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[674],{9030:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const r={},o=void 0,c={id:"Implement Features/Metrics",title:"Metrics",description:"metric-sequence",source:"@site/versioned_docs/version-1.1.0/Implement Features/Metrics.md",sourceDirName:"Implement Features",slug:"/Implement Features/Metrics",permalink:"/1.1.0/Implement Features/Metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/versioned_docs/version-1.1.0/Implement Features/Metrics.md",tags:[],version:"1.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/1.1.0/Implement Features/Alerts"},next:{title:"Events",permalink:"/1.1.0/Implement Features/Events"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-sequence",src:t(7195).A+"",width:"438",height:"252"})}),"\n",(0,s.jsx)(n.p,{children:"Metrics Card help you to present chart style information, Ex: device temperature. Sequence flow just same with State Card."}),"\n",(0,s.jsx)(n.p,{children:"Take a look at the example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"{17-26}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "metrics": [\n          {\n            "name": "cpu_temperature",\n            "displayName": "CPU Temperature",\n            "description": "Present CPU Temprature in chart.",\n            "displayCategory": "ChartCategory1",\n            "displayType": "temperature",\n            "displayUnit": "",\n            "value": ""\n          }\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After Sending ",(0,s.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," JSON above, Allxon Portal will show Metrics Card below. Diagram is empty, because it's still in initialize state."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-init",src:t(9074).A+"",width:"588",height:"632"})}),"\n",(0,s.jsxs)(n.p,{children:["Let's try send ",(0,s.jsx)(n.code,{children:"v2/notifyPluginMetric"})," to upload data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginMetric",\n  "params": {\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "moduleName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "metrics": [\n      {\n        "name": "cpu_temperature",\n        "value": "298.15"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You may curious why ",(0,s.jsx)(n.code,{children:'"value"'})," is ",(0,s.jsx)(n.code,{children:'"298.5"'}),", because if your ",(0,s.jsx)(n.code,{children:'"displayType"'})," is set to ",(0,s.jsx)(n.code,{children:'"temperature"'}),", Allxon Portal would assume your ",(0,s.jsx)(n.code,{children:'"value"'})," unit is Kelvin."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.a,{href:"https://www.unitconverters.net/",children:"link"})," help you to convert between Celcius and Kelvin."]})}),"\n",(0,s.jsx)(n.p,{children:"Metric Card will display like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-first-shot",src:t(3646).A+"",width:"594",height:"503"})}),"\n",(0,s.jsxs)(n.p,{children:["Keep sending second shot of ",(0,s.jsx)(n.code,{children:"v2/notifyPluginMetric"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-second-shot",src:t(8008).A+"",width:"603",height:"501"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9074:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-init-6c0dafc313f27879360e53ccfdd049b3.png"},7195:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-sequence-c4b2d0b045b634e3ecb914fcd7f02827.png"},3646:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metrics-first-shot-db8081d566195cbf50e06367d4246f53.png"},8008:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metrics-second-shot-d1b032f4621545e7927ae9e0c10e5eb0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(6540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);