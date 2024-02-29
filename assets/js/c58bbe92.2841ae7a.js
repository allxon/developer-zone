"use strict";(self.webpackChunkocto_develop_zone=self.webpackChunkocto_develop_zone||[]).push([[6935],{7798:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},c=void 0,a={id:"Implement Features/Metrics",title:"Metrics",description:"metric-sequence",source:"@site/docs/Implement Features/Metrics.md",sourceDirName:"Implement Features",slug:"/Implement Features/Metrics",permalink:"/Implement Features/Metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/allxon/developer-zone/edit/master/docs/Implement Features/Metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Alerts",permalink:"/Implement Features/Alerts"},next:{title:"Events",permalink:"/Implement Features/Events"}},o={},l=[{value:"Tutorials",id:"tutorials",level:2},{value:"Display Type",id:"display-type",level:2},{value:"Temperature",id:"temperature",level:3},{value:"Custom",id:"custom",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-sequence",src:t(6236).A+"",width:"3196",height:"1214"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Metrics"})," feature helps you to present information in a ",(0,s.jsx)(n.strong,{children:"Charts"})," card on the Portal, such as device temperature. The sequence flow is just the same as that of the ",(0,s.jsx)(n.strong,{children:"States"})," card."]}),"\n",(0,s.jsx)(n.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of creating the ",(0,s.jsx)(n.strong,{children:"Charts"})," card:"]}),"\n",(0,s.jsxs)(n.p,{children:["First, send the following ",(0,s.jsx)(n.code,{children:"v2/notifyPluginUpdate"})," JSON."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:"{17-26}",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginUpdate",\n  "params": {\n    "sdk": "${OCTO_SDK_VERSION}",\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "appName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "displayName": "plugIN Hello",\n    "type": "ib",\n    "version": "${PLUGIN_VERSION}",\n    "modules": [\n      {\n        "moduleName": "${PLUGIN_NAME}",\n        "displayName": "plugIN Hello",\n        "properties": [],\n        "metrics": [\n          {\n            "name": "cpu_temperature",\n            "displayName": "CPU Temperature",\n            "description": "Present CPU Temprature in chart.",\n            "displayCategory": "ChartCategory1",\n            "displayType": "temperature",\n            "displayUnit": "",\n            "value": ""\n          }\n        ]\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Once done, Allxon Portal shows the ",(0,s.jsx)(n.strong,{children:"Charts"})," card below. The diagram is empty because it's still in the initialization state."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-init",src:t(3309).A+"",width:"3349",height:"2173"})}),"\n",(0,s.jsxs)(n.p,{children:["Now you can send ",(0,s.jsx)(n.code,{children:"v2/notifyPluginMetric"})," to upload data:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "v2/notifyPluginMetric",\n  "params": {\n    "appGUID": "${PLUGIN_APP_GUID}",\n    "moduleName": "${PLUGIN_NAME}",\n    "epoch": "",\n    "metrics": [\n      {\n        "name": "cpu_temperature",\n        "value": "298.15"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["While the ",(0,s.jsx)(n.code,{children:'"value"'})," is ",(0,s.jsx)(n.code,{children:'\u201c298.15"'})," in the code line above, why does the Charts card show 25",(0,s.jsx)("sup",{children:"o"}),"C ? This is because Allxon Portal uses ",(0,s.jsx)(n.strong,{children:"Kelvin"})," as the unit of temperature if you select ",(0,s.jsx)(n.code,{children:'"temperature"'})," as the ",(0,s.jsx)(n.code,{children:'"displayType"'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You may curious why ",(0,s.jsx)(n.code,{children:'"value"'})," is ",(0,s.jsx)(n.code,{children:'"298.5"'}),", because if your ",(0,s.jsx)(n.code,{children:'"displayType"'})," is set to ",(0,s.jsx)(n.code,{children:'"temperature"'}),", Allxon Portal would assume your ",(0,s.jsx)(n.code,{children:'"value"'})," unit is Kelvin."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Use this ",(0,s.jsx)(n.a,{href:"https://www.unitconverters.net/",children:"unit converter"})," to make sure you convert correctly between ",(0,s.jsx)(n.em,{children:"Fahrenheit"}),", ",(0,s.jsx)(n.em,{children:"Celsius"})," and ",(0,s.jsx)(n.em,{children:"Kelvin"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example of the ",(0,s.jsx)(n.strong,{children:"Charts"})," card::"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"metric-first-shot",src:t(4969).A+"",width:"3314",height:"1729"}),"\nYou can continue to send the ",(0,s.jsx)(n.code,{children:"v2/notifyPluginMetric"}),". The chart is updated accordingly."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-second-shot",src:t(9432).A+"",width:"603",height:"501"})}),"\n",(0,s.jsx)(n.h2,{id:"display-type",children:"Display Type"}),"\n",(0,s.jsx)(n.p,{children:"You can define the unit of the chart or use a predefined temperature scale. For how to set up the unit of a chart, see the following sections."}),"\n",(0,s.jsx)(n.h3,{id:"temperature",children:"Temperature"}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows the code in ",(0,s.jsx)(n.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a temperature line graph with a predefined toggle button. The toggle button is used for switching between ",(0,s.jsx)("sup",{children:"o"}),"F/",(0,s.jsx)("sup",{children:"o"}),"C (Fahrenheit/ Celsius)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "metrics": [\n        {\n            "name": "temperatureMetric",\n            "displayType": "temperature",\n            ...\n        },\n        ...\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"v2/notifyPluginMetrics.json"})," is used to update the temperature metric, the ",(0,s.jsx)(n.code,{children:'"name"'})," must be identical to that in ",(0,s.jsx)(n.code,{children:"v2/notifyPluginUpdate.json"}),", and the ",(0,s.jsx)(n.code,{children:'"value"'})," SHOULD be reported in ",(0,s.jsx)(n.strong,{children:"Kelvin"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="v2/notifyPluginMetric.json"',children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginMetric",\n    "params": {\n        ...\n        "metrics": [\n            {\n                "name": "temperatureMetric",\n                "value": "298"\n            },\n            ...\n        ]\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The Portal converts the metric unit from ",(0,s.jsx)(n.strong,{children:"Kelvin"})," to ",(0,s.jsx)(n.strong,{children:"Fahrenheit"})," and ",(0,s.jsx)(n.strong,{children:"Celsius"}),".\n",(0,s.jsx)(n.img,{alt:"metric-display-type-temperature-exec",src:t(2190).A+"",width:"1173",height:"315"})]}),"\n",(0,s.jsx)(n.h3,{id:"custom",children:"Custom"}),"\n",(0,s.jsxs)(n.p,{children:["The following example shows the code in ",(0,s.jsx)(n.code,{children:"v2/notifyPluginUpdate.json"})," for displaying a line graph with a custom unit. You must define ",(0,s.jsx)(n.code,{children:'"displayUnit"'})," as the unit of the metrics."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="v2/notifyPluginUpdate.json"',children:'{\n    ...\n    "metrics": [\n        {\n            "name": "customMetric",\n            "displayType": "custom",\n            "displayUnit": "degree",\n            ...\n        },\n        ...\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:'"v2/notifyPluginMetrics.json"'})," is used to update the metric, the ",(0,s.jsx)(n.code,{children:'"name"'})," must be identical to that in ",(0,s.jsx)(n.code,{children:'"v2/notifyPluginUpdate.json"'}),", and the data type of ",(0,s.jsx)(n.code,{children:'"value"'})," must be ",(0,s.jsx)(n.strong,{children:"String"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="v2/notifyPluginMetric.json"',children:'{\n    "jsonrpc": "2.0",\n    "method": "v2/notifyPluginMetric",\n    "params": {\n        ...\n        "metrics": [\n            {\n                "name": "customMetric",\n                "value": "30"\n            },\n            ...\n        ]\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then the ",(0,s.jsx)(n.strong,{children:"Charts"})," card is updated, as shown below."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"metric-display-type-custom-exec",src:t(6601).A+"",width:"1174",height:"318"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6601:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-display-type-custom-exec-c408d1a9fa79bbb0ccb8a37452494917.png"},2190:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-display-type-temperature-exec-a9cafae5634cde5e9108884d6fba0cb5.png"},3309:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-init-900a8dd41e20f00a64908fccca633b57.svg"},6236:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metric-sequence-a26c82ca23903c1f687e7d274a37d8dc.svg"},4969:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metrics-first-shot-b94d60031eb6c146d95466929659f368.svg"},9432:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/metrics-second-shot-d1b032f4621545e7927ae9e0c10e5eb0.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);